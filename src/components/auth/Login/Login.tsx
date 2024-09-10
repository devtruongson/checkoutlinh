'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Login({
    classname,
    setLoading,
}: {
    classname: string;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleClickLogin = async () => {
        if (!email || !password) {
            alert('Bạn hãy nhập đầy đủ các tham số!');
            return;
        }

        try {
            setLoading(true);
            const res: any = await fetch('https://api-pro.teklearner.com/auth/v1/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
            });

            if (!res.ok) {
                throw new Error();
            }

            const data = await res.json();
            const response = {
                isLoginIn: true,
                user: data.data,
            };

            localStorage.setItem('dataLogin', JSON.stringify(response));
            window.location.href = '/';
        } catch (error: any) {
            Swal.fire({
                title: 'Có lỗi xảy ra?',
                text: 'Vui lòng kiểm tra lại username & password của bạn',
                icon: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={classname}>
            <h2 className="text-center font-bold">SIGN IN</h2>
            <div className="mt-4">
                <div className="mb-4">
                    <label htmlFor="username_auth_login" className="font-[600] text-[16px]">
                        Username
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="username"
                        id="username_auth_login"
                        className="w-full h-[35px] rounded-md text-[12px] px-2 mt-2"
                        style={{
                            border: '1px solid #333',
                        }}
                        placeholder="Vui lòng nhập username của bạn..."
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="password_auth_login" className="font-[600] text-[16px]">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="Password"
                        id="password_auth_login"
                        className="w-full h-[35px] rounded-md text-[12px] px-2 mt-2"
                        style={{
                            border: '1px solid #333',
                        }}
                        placeholder="Vui lòng nhập password của bạn..."
                    />
                </div>
                <Link className="text-[12px] text-end block font-[600] underline" href="#">
                    Forgot Password
                </Link>
                <div className="mt-4 flex justify-center items-center" onClick={handleClickLogin}>
                    <button className="px-10 py-2 bg-black font-[600] text-[#fff]">SIGN IN</button>
                </div>
                <p className="text-[12px] text-center block font-[600] py-3">or</p>
                <div className="mt-2 flex justify-center items-center">
                    <button
                        className="px-10 py-2 font-[600] w-[95%] rounded-md text-[15px]"
                        style={{
                            border: '1px solid #333',
                        }}
                    >
                        Login with Facebook
                    </button>
                </div>
                <div className="mt-2 flex justify-center items-center">
                    <button
                        className="px-10 py-2 font-[600] w-[95%] rounded-md text-[15px]"
                        style={{
                            border: '1px solid #333',
                        }}
                    >
                        Login with Google
                    </button>
                </div>
                <p className="text-[12px] text-center block font-[600] pt-4">
                    New Member?{' '}
                    <a href="/auth/register" className="underline">
                        Register Now
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
