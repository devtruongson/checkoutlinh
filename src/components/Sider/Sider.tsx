'use client';

import React from 'react';
import Slider, { Settings } from 'react-slick';

interface IProps {
    settings?: Settings;
    children: React.ReactNode;
    className?: string;
}

export default function SideWrapper({ settings, children, className }: IProps) {
    return <Slider {...settings}>{children}</Slider>;
}
