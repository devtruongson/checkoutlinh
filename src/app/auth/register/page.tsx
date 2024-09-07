'use client';

import { checkParam, formRegister } from '@/actions/action';
import useDebounce from '@/app/HOC/useDeounce';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

function Register() {
    const [image, setImage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
    const [isValidPhone, setIsValidPhone] = useState<boolean>(false);

    const refInputImage = useRef<HTMLInputElement>(null);

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files?.length) {
            const urlString = URL.createObjectURL(files[0]);
            setImage(urlString);
        }
    };

    const valueDebounceEmail = useDebounce(email, 700);
    const valueDebouncePhone = useDebounce(phone, 700);

    useEffect(() => {
        if (!valueDebounceEmail) return;
        const fetch = async () => {
            const res: { data: boolean; error?: string } = await checkParam({
                type: 'email',
                value: valueDebounceEmail,
            });

            if (res.error) {
                alert(res.error);
                return;
            }

            if (!res.data) {
                setIsValidEmail(true);
                await checkParam({
                    type: 'email',
                    value: valueDebounceEmail,
                    urlString: 'https://api-pro.teklearner.com/auth/v1/send-otp-email',
                });
            }
        };

        fetch();
    }, [valueDebounceEmail]);

    useEffect(() => {
        if (!valueDebouncePhone) return;
        const fetch = async () => {
            const res: { data: boolean; error?: string } = await checkParam({
                type: 'phone',
                value: valueDebouncePhone,
            });

            if (res.error) {
                alert(res.error);
                return;
            }

            if (!res.data) {
                setIsValidPhone(true);
            }
        };

        fetch();
    }, [valueDebouncePhone]);

    return (
        <div className="container mx-auto py-4">
            <p className="text-[13px] font-[600]">
                Home {' > '} Auth {' > '} Register
            </p>
            <h2 className="font-bold text-[22px] mt-4">REGISTRATION</h2>
            <div className="mt-3 bg-[#fff] shadow-md rounded-md pb-6 px-6">
                <div className="flex justify-center items-center gap-4 pb-3 pt-6">
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
                        <form
                            action={(() => {
                                if (!isValidEmail || !isValidPhone) {
                                    return '';
                                } else {
                                    return formRegister;
                                }
                            })()}
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name *"
                                        required
                                        className="border border-gray-300 p-2 rounded-md col-span-2"
                                    />
                                    <input
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Email Address *"
                                        className="border border-gray-300 p-2 rounded-md col-span-2"
                                    />
                                    {email && (
                                        <div className="col-span-2 flex gap-2 items-center justify-end">
                                            <label htmlFor="OTP" className="text-[13px]">
                                                {isValidEmail
                                                    ? '  email của bạn đã hợp lệ vui lòng kiểm tra OTP tại email'
                                                    : 'Email chưa hợp lệ'}
                                            </label>
                                            {isValidEmail && (
                                                <input
                                                    name="otp"
                                                    required
                                                    id="OTP"
                                                    type="text"
                                                    placeholder="OTP"
                                                    className="border border-gray-300 p-2 rounded-md h-[24px] text-[13px] outline-none"
                                                />
                                            )}
                                        </div>
                                    )}
                                    <input
                                        name="phone"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="tel"
                                        placeholder="Mobile Number *"
                                        className="border border-gray-300 p-2 rounded-md col-span-2"
                                    />
                                    {phone && (
                                        <div className="col-span-2 flex gap-2 items-center justify-end">
                                            <label htmlFor="OTP" className="text-[13px]">
                                                {isValidPhone ? 'SDT của bạn đã hợp lệ' : 'SDT của bạn không hợp lệ'}
                                            </label>
                                        </div>
                                    )}
                                    <input
                                        required
                                        name="password"
                                        type="password"
                                        placeholder="password *"
                                        className="border border-gray-300 p-2 rounded-md col-span-2"
                                    />
                                    <div className="col-span-2 grid grid-cols-2 gap-4">
                                        <div className="col-span-1">
                                            <label className="block" htmlFor="birthday">
                                                Sinh nhật
                                            </label>
                                            <input
                                                name="birthday"
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
                                        required
                                        name="street"
                                        type="text"
                                        placeholder="Street"
                                        className="border border-gray-300 p-2 rounded-md col-span-2"
                                    />
                                    <input
                                        required
                                        name="area"
                                        type="text"
                                        placeholder="Area"
                                        className="border border-gray-300 p-2 rounded-md"
                                    />
                                    <input
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
                                <button
                                    type={isValidEmail && isValidPhone ? 'submit' : 'button'}
                                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                                >
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
