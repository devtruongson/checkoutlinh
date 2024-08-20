' use client';

import React from 'react';
import './SideImageListDetail.css';
import Image from 'next/image';

interface IProps {
    listUrl: string[];
}

export default function SideImageListDetail({ listUrl }: IProps) {
    return (
        <>
            <div className="content-side-left flex gap-2">
                <div className="inline-block block_imgs">
                    {listUrl &&
                        listUrl.length > 0 &&
                        listUrl.map((item, index: number) => {
                            return (
                                <Image
                                    width={100}
                                    height={100}
                                    src={item}
                                    alt="Hình ảnh hiển thị"
                                    key={index}
                                    className="w-[67px] h-[62px] mb-6 object-cover rounded-[4px]"
                                />
                            );
                        })}
                </div>
                <div className="flex-1">
                    <Image
                        width={500}
                        height={400}
                        src={'/sider_top_one.png'}
                        alt="Hình ảnh hiển thị"
                        className="h-[400px] w-full mb-6 object-cover rounded-[4px] image_list"
                    />
                </div>
            </div>
        </>
    );
}
