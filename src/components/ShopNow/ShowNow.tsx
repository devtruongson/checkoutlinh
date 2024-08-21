import React from 'react';
import ProductList from '../ProductList/ProductList';
import './ShopNow.css';
import Image from 'next/image';
import Link from 'next/link';
import { ClassObject } from '@/utils/interface';

export default function ShowNow({ dataList }: { dataList: ClassObject[] }) {
    return (
        <div className="container mx-auto">
            <h2 className="title_top_section">
                NEW ARRIVALS
                <Link href="/">SEE ALL</Link>
            </h2>
            <div className="shop_now_wp_top">
                <div className="shop_now_item __shop_now_landing">
                    <Image src={'/image_product.png'} alt={'Hình ảnh sản phẩm'} width={200} height={200} />
                    <button>SHOP NOW</button>
                </div>
                <div className="shop_now_item">
                    <ProductList dataList={dataList} countRenderProduct={2} />
                </div>
            </div>
            <div className="shop_now_wp_top">
                <div className="shop_now_item">
                    <ProductList dataList={dataList} countRenderProduct={2} />
                </div>
                <div className="shop_now_item __shop_now_landing">
                    <Image src={'/image_product.png'} alt={'Hình ảnh sản phẩm'} width={200} height={200} />
                    <button>SHOP NOW</button>
                </div>
            </div>
        </div>
    );
}
