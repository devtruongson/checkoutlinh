'use client';

import Image from 'next/image';
import React, { Fragment, use, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Product.css';
import SideWrapper from '../Sider/Sider';
import { Settings } from 'react-slick';
import { ClassObject } from '@/utils/interface';
import Link from 'next/link';

interface IProps {
    isSide?: boolean;
    countRenderProduct: number;
    settings?: Settings;
    dataList?: ClassObject[];
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

export default function ProductList({ countRenderProduct, isSide = false, settings, dataList }: IProps) {
    const [stateFakeProductCount, setStateFakeProductCount] = useState<number[] | ClassObject[]>(
        dataList ? dataList : Array.from({ length: countRenderProduct }, () => 1),
    );

    return (
        <>
            {isSide ? (
                <SideWrapper settings={settings}>
                    {stateFakeProductCount.map((item, index) => (
                        <Link
                            href={typeof item === 'object' ? 'detail/' + item.id : '/'}
                            className="product_item px-2"
                            key={uuidv4()}
                        >
                            <div className="img_product">
                                <Image src={'/image_product.png'} alt={'Hình ảnh sản phẩm'} width={200} height={200} />
                                <span>
                                    {typeof item === 'object'
                                        ? item.class_type
                                            ? item.class_type
                                            : 'Đang cập nhật'
                                        : Cate[index < Cate.length ? index : 0].title}
                                </span>
                            </div>
                            <div className="intro-product">
                                <h2>{typeof item === 'object' ? item.class_name : 'Product Title Goes Here'}</h2>
                                <p>BRAND</p>
                                <div className="price_wrap gap-2">
                                    <div className="price_wrap_left">
                                        <span>
                                            {typeof item === 'object'
                                                ? (item.course_price - item.course_discount).toLocaleString('it-IT', {
                                                      style: 'currency',
                                                      currency: 'VND',
                                                  })
                                                : 'AED 32.00'}
                                        </span>
                                        <span>
                                            {' '}
                                            {typeof item === 'object'
                                                ? item.course_price.toLocaleString('it-IT', {
                                                      style: 'currency',
                                                      currency: 'VND',
                                                  })
                                                : 'AED 32.00'}
                                        </span>
                                    </div>
                                    <div className="price_wrap_right text-[12px]">30% Off</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </SideWrapper>
            ) : (
                <>
                    {stateFakeProductCount.map((item, index) => (
                        <Link
                            href={typeof item === 'object' ? 'detail/' + item.id : '/'}
                            className="product_item px-2"
                            key={uuidv4()}
                        >
                            <div className="img_product">
                                <Image src={'/image_product.png'} alt={'Hình ảnh sản phẩm'} width={200} height={200} />
                                <span>
                                    {typeof item === 'object'
                                        ? item.class_type
                                            ? item.class_type
                                            : 'Đang cập nhật'
                                        : Cate[index < Cate.length ? index : 0].title}
                                </span>
                            </div>
                            <div className="intro-product">
                                <h2>{typeof item === 'object' ? item.class_name : 'Product Title Goes Here'}</h2>
                                <p>BRAND</p>
                                <div className="price_wrap">
                                    <div className="price_wrap_left">
                                        <span>
                                            {typeof item === 'object'
                                                ? (item.course_price - item.course_discount).toLocaleString('it-IT', {
                                                      style: 'currency',
                                                      currency: 'VND',
                                                  })
                                                : 'AED 32.00'}
                                        </span>
                                        <span>
                                            {typeof item === 'object'
                                                ? item.course_price.toLocaleString('it-IT', {
                                                      style: 'currency',
                                                      currency: 'VND',
                                                  })
                                                : 'AED 32.00'}
                                        </span>
                                    </div>
                                    <div className="price_wrap_right text-[12px]">30% Off</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </>
            )}
        </>
    );
}
