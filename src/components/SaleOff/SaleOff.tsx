import React from 'react';
import './SaleOff.css';

interface IProps {
    percent: number;
    cateTitle: string;
}

export default function SaleOff({ cateTitle, percent }: IProps) {
    return (
        <div className="sale_off_wrapper">
            <div>
                <h3>{percent}% OFF</h3>
                <p>{cateTitle}</p>
            </div>
            <button>SHOP NOW</button>
        </div>
    );
}
