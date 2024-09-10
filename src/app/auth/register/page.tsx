'use client';

import { checkParam, formRegister } from '@/actions/action';
import ReactLoading from 'react-loading';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import Swal from 'sweetalert2';

function Register() {
    const [image, setImage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [birthday, setBirthday] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [area, setArea] = useState<string>('');
    const [emirate, setEmirate] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const refInputImage = useRef<HTMLInputElement>(null);
    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files?.length) {
            const urlString = URL.createObjectURL(files[0]);
            setImage(urlString);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setLoading(true);
        const res: { data: boolean; error?: string } = await checkParam({
            type: 'phone',
            value: phone,
        });

        const resCheckEmail: { data: boolean; error?: string } = await checkParam({
            type: 'email',
            value: email,
        });
        setLoading(false);

        if (resCheckEmail.error) {
            Swal.fire({
                title: 'Có lỗi xảy ra?',
                text: resCheckEmail.error,
                icon: 'error',
            });
            return;
        }

        if (res.error) {
            Swal.fire({
                title: 'Có lỗi xảy ra?',
                text: res.error,
                icon: 'error',
            });
            return;
        }

        if (res.data) {
            Swal.fire({
                title: 'Có lỗi xảy ra!',
                text: 'Số điện thoại đã tồn tại trong hệ thống',
                icon: 'error',
            });
            return;
        }

        if (resCheckEmail.data) {
            Swal.fire({
                title: 'Có lỗi xảy ra!',
                text: 'email đã tồn tại trong hệ thống',
                icon: 'error',
            });
            return;
        }

        const { value: OTP } = await Swal.fire({
            title: 'Nhập OTP Gửi về email của bạn',
            input: 'text',
            inputLabel: 'OTP email',
            inputValue: '',
            showCancelButton: false,
            allowOutsideClick: false,
            inputValidator: (value) => {
                if (!value) {
                    return 'Bạn chưa nhập gì cả!';
                }
            },
        });

        setLoading(true);
        try {
            const resRegister = await formRegister({
                name,
                email,
                password,
                phone,
                birthday,
                address: street + ' - ' + area + ' - ' + emirate,
                gender,
                otp: OTP,
            });

            if (resRegister.error) {
                Swal.fire({
                    title: 'Có lỗi xảy ra?',
                    text: resRegister.error,
                    icon: 'error',
                });
                return;
            }

            Swal.fire({
                title: 'Bạn đã đăng ký tài khoản thành công!',
                text: 'chúc mừng bạn đã đăng ký tài khoản thành công trong hệ thống vui lòng click vào header để đăng nhập!',
                icon: 'success',
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Có lỗi xảy ra!',
                text: 'Có lỗi xảy ra với dữ liệu',
                icon: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto py-4">
            {loading && (
                <div className="fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100%] flex justify-center items-center bg-[rgba(0,0,0,0.75)] z-[999999999999999]">
                    <div className="flex items-center flex-col gap-4">
                        <ReactLoading type={'spin'} color={'#fff'} height={100} width={100} />
                        <p className="text-[#fff] font-[600]">Xin hãy đợi trong giây lát</p>
                    </div>
                </div>
            )}
            <p className="text-[13px] font-[600]">
                Home {' > '} Auth {' > '} Register
            </p>
            <h2 className="font-bold text-[22px] mt-4">REGISTRATION</h2>
            <div className="mt-3 bg-[#fff] shadow-md rounded-md pb-6 px-6">
                <div>
                    <div className="flex justify-center items-center gap-4 pb-3 pt-6 auth_register">
                        <div className="mt-2 flex justify-center items-center">
                            <button
                                className="px-10 py-2 font-[600] w-[300px] rounded-md text-[15px]"
                                style={{
                                    border: '1px solid #333',
                                }}
                            >
                                Register with Facebook
                            </button>
                        </div>
                        <div className="mt-2 flex justify-center items-center">
                            <button
                                className="px-10 py-2 font-[600] w-[300px] rounded-md text-[15px]"
                                style={{
                                    border: '1px solid #333',
                                }}
                            >
                                Register with Google +
                            </button>
                        </div>
                        <div className="mt-2 flex justify-center items-center">
                            <button
                                className="px-10 py-2 font-[600] w-[300px] rounded-md text-[15px]"
                                style={{
                                    border: '1px solid #333',
                                }}
                            >
                                Register with Instagram
                            </button>
                        </div>
                    </div>
                </div>
                <p className="text-[12px] text-center block font-[600] py-3">or</p>
                <div className="flex justify-center items-center">
                    <div className="bg-white w-full">
                        {/* Profile Picture */}
                        <div className="flex flex-col items-center mb-6">
                            <div className="w-32 h-32 bg-gray-200 flex items-center justify-center mb-4 rounded-full overflow-hidden">
                                {image ? (
                                    <img src={image} alt="" className="object-cover w-full h-full" />
                                ) : (
                                    <label
                                        onClick={() => {
                                            if (refInputImage.current) {
                                                refInputImage.current.click();
                                            }
                                        }}
                                        htmlFor="upload"
                                        className="flex flex-col items-center justify-center cursor-pointer text-gray-500"
                                    >
                                        <span className="text-3xl">+</span>
                                        <span className="text-sm">Upload Image</span>
                                    </label>
                                )}
                            </div>
                        </div>
                        <input type="file" ref={refInputImage} onChange={handleChangeImage} hidden />
                        {/* Personal Details */}
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        name="name"
                                        placeholder="Name *"
                                        required
                                        autoComplete="off"
                                        className="border border-gray-300 p-2 rounded-md col-span-2"
                                    />
                                    <input
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        type="email"
                                        required
                                        placeholder="Email Address *"
                                        className="border border-gray-300 p-2 rounded-md col-span-2"
                                    />
                                    <input
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="tel"
                                        placeholder="Mobile Number *"
                                        className="border border-gray-300 p-2 rounded-md col-span-2"
                                    />
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        type="password"
                                        autoComplete="off"
                                        placeholder="password *"
                                        className="border border-gray-300 p-2 rounded-md col-span-2"
                                    />
                                    <div className="col-span-2 grid grid-cols-2 gap-4">
                                        <div className="col-span-1">
                                            <label className="block" htmlFor="birthday">
                                                Sinh nhật
                                            </label>
                                            <input
                                                autoComplete="off"
                                                value={birthday}
                                                onChange={(e) => setBirthday(e.target.value)}
                                                id="birthday"
                                                type="date"
                                                placeholder="password *"
                                                className="border border-gray-300 p-2 w-full rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label className="block" htmlFor="gender">
                                                Giới tính
                                            </label>
                                            <select
                                                required
                                                name="gender"
                                                id="gender"
                                                className="border border-gray-300 p-2 w-full rounded-md"
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                            >
                                                <option value="">---- Chọn giới tính ----</option>
                                                <option value="Nam">Nam</option>
                                                <option value="Nữ">Nữ</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-4">Address</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                        required
                                        name="street"
                                        type="text"
                                        placeholder="Street"
                                        className="border border-gray-300 p-2 rounded-md col-span-2"
                                    />
                                    <input
                                        value={area}
                                        onChange={(e) => setArea(e.target.value)}
                                        required
                                        name="area"
                                        type="text"
                                        placeholder="Area"
                                        className="border border-gray-300 p-2 rounded-md"
                                    />
                                    <input
                                        value={emirate}
                                        onChange={(e) => setEmirate(e.target.value)}
                                        required
                                        name="emirate"
                                        type="text"
                                        placeholder="Emirate"
                                        className="border border-gray-300 p-2 rounded-md"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                                    REGISTER
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
