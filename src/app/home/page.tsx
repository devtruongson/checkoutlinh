import SideWrapper from '@/components/Sider/Sider';
import React from 'react';
import './HomePage.css';
import ShowNow from '@/components/ShopNow/ShowNow';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';
import ProductList from '@/components/ProductList/ProductList';
import SaleOff from '@/components/SaleOff/SaleOff';
import Account from '@/components/Account/Account';

const listItem = [
    {
        src: '/image_path.png',
        alt: 'Hình ảnh Side Top ',
    },
    {
        src: '/image_path.png',
        alt: 'Hình ảnh Side Top ',
    },
    {
        src: '/image_path.png',
        alt: 'Hình ảnh Side Top ',
    },
    {
        src: '/image_path.png',
        alt: 'Hình ảnh Side Top ',
    },
    {
        src: '/image_path.png',
        alt: 'Hình ảnh Side Top ',
    },
    {
        src: '/image_path.png',
        alt: 'Hình ảnh Side Top ',
    },
];

export default async function HomePage() {
    const dataList: { data: any[] } = await fetch(
        'https://api-pro.teklearner.com/class/v1/get-list-class?class_code=&skip=0&limit=16000',
    ).then((response) => response.json());

    return (
        <div className="max-w-[100vw] overflow-x-hidden home-page-wrapper">
            <SideWrapper
                settings={{
                    dots: true,
                    slidesToShow: 1,
                    speed: 1000,
                    arrows: true,
                    autoplay: true,
                }}
            >
                {listItem &&
                    listItem.length > 0 &&
                    listItem.map((item) => {
                        const id = uuidv4();
                        return (
                            <div key={id}>
                                <div className="side_top_home_wrapper_image">
                                    <Image src={item.src} alt={item.alt} width={200} height={200} />
                                </div>
                            </div>
                        );
                    })}
            </SideWrapper>
            <ShowNow dataList={dataList.data} />
            <div className="product_section py-10">
                <div className="container mx-auto">
                    <h2 className="title_top_section">
                        NEW ARRIVALS
                        <Link href="/">SEE ALL</Link>
                    </h2>
                    <ProductList
                        dataList={dataList.data}
                        countRenderProduct={10}
                        isSide
                        settings={{
                            dots: false,
                            slidesToShow: 4,
                            speed: 1000,
                            arrows: true,
                            slidesToScroll: 1,
                            autoplay: true,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: true,
                                    },
                                },
                                {
                                    breakpoint: 992,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: false,
                                    },
                                },
                                {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    },
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                    },
                                },
                            ],
                        }}
                    />
                </div>
            </div>
            <div className="container mx-auto pt-6">
                <SaleOff cateTitle="On All Items" percent={50} />
            </div>
            <div className="product_section py-6">
                <div className="container mx-auto">
                    <h2 className="title_top_section">
                        NEW ARRIVALS
                        <Link href="/">SEE ALL</Link>
                    </h2>
                    <ProductList
                        dataList={dataList.data}
                        countRenderProduct={10}
                        isSide
                        settings={{
                            dots: false,
                            slidesToShow: 4,
                            speed: 1000,
                            arrows: true,
                            slidesToScroll: 1,
                            autoplay: true,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: true,
                                    },
                                },
                                {
                                    breakpoint: 992,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: false,
                                    },
                                },
                                {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    },
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                    },
                                },
                            ],
                        }}
                    />
                </div>
            </div>
            <div className="container mx-auto pt-6">
                <SaleOff cateTitle="All SKINCARE Items" percent={35} />
            </div>
            <div className="product_section py-6">
                <div className="container mx-auto">
                    <h2 className="title_top_section">
                        AMBASSADORS
                        <Link href="/">VIEW ALL</Link>
                    </h2>
                    <Account
                        countRenderAccount={20}
                        isSide
                        settings={{
                            dots: false,
                            slidesToShow: 4,
                            speed: 1000,
                            arrows: true,
                            slidesToScroll: 1,
                            autoplay: true,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: true,
                                    },
                                },
                                {
                                    breakpoint: 992,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                        infinite: true,
                                        dots: false,
                                    },
                                },
                                {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    },
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                    },
                                },
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
