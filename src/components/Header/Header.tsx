'use client';

import Link from 'next/link';
import React, { useEffect, useId, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ICateHeader } from '@/utils/interface';
import './Header.css';
import Login from '../auth/Login/Login';
import Tippy from '@tippyjs/react/headless';
import ReactLoading from 'react-loading';

export default function Header() {
    const [isOpenHeaderMobile, setIsOpenHeaderMobile] = useState<boolean>(false);
    const [dataLogin, setDataLogin] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem('dataLogin') || 'null');
        setDataLogin(data);
    }, []);

    const handleClickLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    };

    return (
        <header className="z-[999] relative">
            {loading && (
                <div className="fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100%] flex justify-center items-center bg-[rgba(0,0,0,0.75)] z-[999999999999999]">
                    <div className="flex items-center flex-col gap-4">
                        <ReactLoading type={'spin'} color={'#fff'} height={100} width={100} />
                        <p className="text-[#fff] font-[600]">Xin hãy đợi trong giây lát</p>
                    </div>
                </div>
            )}
            <div className="py-4 bg-[#F0F0F0]">
                <div className="container mx-auto header-wrapper">
                    <div className="logo">
                        <Link href="/">
                            <h1>YOUR LOGO</h1>
                        </Link>
                    </div>
                    <div className="right-header-nav">
                        <div className="right-header-nav--item search-wrapper-header-input">
                            <input type="text" placeholder="Type in and hit Enter" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 search-icon-header"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </div>
                        <div className="right-header-nav--item cart-header">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                            <span>Cart</span>
                        </div>
                        <div className="divider"></div>
                        {dataLogin ? (
                            <div>
                                <Tippy
                                    trigger="click"
                                    placement="bottom"
                                    render={(attrs) => (
                                        <div {...attrs}>
                                            <div className=" rounded-md px-4 py-5 bg-[#fff] shadow-md">
                                                <button onClick={handleClickLogout}>Logout</button>
                                            </div>
                                        </div>
                                    )}
                                    interactive
                                >
                                    <div className="right-header-nav--item user-header">
                                        <>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                            </svg>
                                            <span>{dataLogin.user.name}</span>
                                        </>
                                    </div>
                                </Tippy>
                            </div>
                        ) : (
                            <div>
                                <Tippy
                                    trigger="click"
                                    render={(attrs) => (
                                        <div {...attrs}>
                                            <Login
                                                setLoading={setLoading}
                                                classname="bg-[#fff] shadow-md px-10 py-8 w-[20vw] min-h-[60vh] rounded-[20px] overflow-hidden"
                                            />
                                        </div>
                                    )}
                                    placement="bottom"
                                    interactive
                                >
                                    <div className="right-header-nav--item user-header">
                                        <>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                            </svg>
                                            <span>User</span>
                                        </>
                                    </div>
                                </Tippy>
                            </div>
                        )}

                        <div className="divider"></div>
                        <div className="right-header-nav--item lang-header">عربى</div>
                    </div>
                    <div className="header_mobile">
                        <button
                            onClick={() => {
                                setIsOpenHeaderMobile(!isOpenHeaderMobile);
                            }}
                        >
                            {isOpenHeaderMobile ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                        {
                            <div
                                className={isOpenHeaderMobile ? 'render_header_mobile active' : 'render_header_mobile'}
                            >
                                <div className="right-header-nav--item search-wrapper-header-input">
                                    <input type="text" placeholder="Type in and hit Enter" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6 search-icon-header"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="right-header-nav--item cart-header">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                            />
                                        </svg>
                                        <span>Cart</span>
                                    </div>
                                    <div className="divider"></div>
                                    {dataLogin ? (
                                        <div>
                                            <Tippy
                                                trigger="click"
                                                placement="bottom"
                                                render={(attrs) => (
                                                    <div {...attrs}>
                                                        <div className=" rounded-md px-4 py-5 bg-[#fff] shadow-md">
                                                            <button onClick={handleClickLogout}>Logout</button>
                                                        </div>
                                                    </div>
                                                )}
                                                interactive
                                            >
                                                <div className="right-header-nav--item user-header">
                                                    <>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="size-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                            />
                                                        </svg>
                                                        <span>{dataLogin.user.name}</span>
                                                    </>
                                                </div>
                                            </Tippy>
                                        </div>
                                    ) : (
                                        <div>
                                            <Tippy
                                                trigger="click"
                                                render={(attrs) => (
                                                    <div {...attrs}>
                                                        <Login
                                                            setLoading={setLoading}
                                                            classname="bg-[#fff] shadow-md px-10 py-8 w-[100vw] rounded-[20px] overflow-hidden"
                                                        />
                                                    </div>
                                                )}
                                                placement="bottom"
                                                interactive
                                            >
                                                <div className="right-header-nav--item user-header">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="size-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                        />
                                                    </svg>
                                                    <span>User</span>
                                                </div>
                                            </Tippy>
                                        </div>
                                    )}
                                    <div className="divider"></div>
                                    <div className="right-header-nav--item lang-header">عربى</div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <CateComponent isContainer={true} />
        </header>
    );
}

function CateComponent({ isContainer }: { isContainer: boolean }) {
    // fake data
    const [cate, setCate] = useState<ICateHeader[]>([
        {
            title: 'ALL BRANDS',
            href: '/',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            ),
        },
        {
            title: 'SKINCARE',
            href: '/',
        },
        {
            title: 'MAKE UP',
            href: '/',
        },
        {
            title: 'HAIR CARE',
            href: '/',
        },
        {
            title: 'BATH & BODY',
            href: '/',
        },
        {
            title: 'BEAUTY SUPPLEMENTS',
            href: '/',
        },
        {
            title: 'PROMOS',
            href: '/',
        },
    ]);

    return (
        <div className="shadow-md bg-[#fff]">
            <div className={isContainer ? 'container mx-auto' : ''}>
                <nav className="nav-wrapper">
                    <ul>
                        {cate &&
                            cate.length > 0 &&
                            cate.map((item) => {
                                const id = uuidv4();
                                return (
                                    <li key={id}>
                                        <a href={item.href}>
                                            {item.title}
                                            {item.icon && <span>{item.icon}</span>}
                                        </a>
                                    </li>
                                );
                            })}
                    </ul>
                    <button>SELL WITH US</button>
                </nav>
            </div>
        </div>
    );
}
