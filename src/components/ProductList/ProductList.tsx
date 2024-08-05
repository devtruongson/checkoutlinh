'use client';

import Image from 'next/image';
import React, { Fragment, use, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Product.css';
import SideWrapper from '../Sider/Sider';
import { Settings } from 'react-slick';

interface IProps {
    isSide?: boolean;
    countRenderProduct: number;
    settings?: Settings;
}

const Cate = [
    {
        title: 'SKINCARE',
    },
    {
        title: 'MAKE UP',
    },
    {
        title: 'HAIR CARE',
    },
    {
        title: 'BATH & BODY',
    },
    {
        title: 'BEAUTY SUPPLEMENTS',
    },
    {
        title: 'PROMOS',
    },
];

export default function ProductList({ countRenderProduct, isSide = false, settings }: IProps) {
    const [stateFakeProductCount, setStateFakeProductCount] = useState<number[]>(
        Array.from({ length: countRenderProduct }, () => 1),
    );

    return (
        <>
            {isSide ? (
                <SideWrapper settings={settings}>
                    {stateFakeProductCount.map((item, index) => (
                        <div className="product_item px-2" key={uuidv4()}>
                            <div className="img_product">
                                <Image src={'/image_product.png'} alt={'Hình ảnh sản phẩm'} width={200} height={200} />
                                <span>{Cate[index < Cate.length ? index : 0].title}</span>
                            </div>
                            <div className="intro-product">
                                <h2>Product Title Goes Here</h2>
                                <p>BRAND</p>
                                <div className="price_wrap">
                                    <div className="price_wrap_left">
                                        <span>AED 32.00</span>
                                        <span>AED 25.60</span>
                                    </div>
                                    <div className="price_wrap_right">30% Off</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </SideWrapper>
            ) : (
                <>
                    {stateFakeProductCount.map((item, index) => (
                        <div className="product_item" key={uuidv4()}>
                            <div className="img_product">
                                <Image src={'/image_product.png'} alt={'Hình ảnh sản phẩm'} width={200} height={200} />
                                <span>{Cate[index < Cate.length ? index : 0].title}</span>
                            </div>
                            <div className="intro-product">
                                <h2>Product Title Goes Here</h2>
                                <p>BRAND</p>
                                <div className="price_wrap">
                                    <div className="price_wrap_left">
                                        <span>AED 32.00</span>
                                        <span>AED 25.60</span>
                                    </div>
                                    <div className="price_wrap_right">30% Off</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
}
