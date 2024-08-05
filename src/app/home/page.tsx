import SideWrapper from '@/components/Sider/Sider';
import React from 'react';
import './HomePage.css';
import ShowNow from '@/components/ShopNow/ShowNow';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';
import ProductList from '@/components/ProductList/ProductList';

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

export default function HomePage() {
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
            <ShowNow />
            <div className="product_section py-10">
                <div className="container mx-auto">
                    <h2 className="title_top_section">
                        NEW ARRIVALS
                        <Link href="/">SEE ALL</Link>
                    </h2>
                    <ProductList
                        countRenderProduct={10}
                        isSide
                        settings={{
                            dots: false,
                            slidesToShow: 4,
                            speed: 1000,
                            arrows: true,
                            slidesToScroll: 1,
                            autoplay: true,
                        }}
                    />
                </div>
            </div>
            <div className="product_section py-10">
                <div className="container mx-auto">
                    <h2 className="title_top_section">
                        NEW ARRIVALS
                        <Link href="/">SEE ALL</Link>
                    </h2>
                    <ProductList
                        countRenderProduct={10}
                        isSide
                        settings={{
                            dots: false,
                            slidesToShow: 4,
                            speed: 1000,
                            arrows: true,
                            slidesToScroll: 1,
                            autoplay: true,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
