'use server';

import { redirect } from 'next/navigation';

export async function getListDataClass() {
    // Fetch data from API or database
    const data = await fetch('https://api-pro.teklearner.com/class/v1/get-list-class?class_code=&skip=0&limit=16').then(
        (response) => response.json(),
    );

    return data;
}

export async function checkParam(data: { type: 'email' | 'phone'; value: string; urlString?: string }) {
    const url = data.urlString
        ? data.urlString
        : data.type === 'email'
        ? 'https://api-pro.teklearner.com/auth/v1/check-email'
        : 'https://api-pro.teklearner.com/auth/v1/check-phone';
    const bodyData = {
        [data.type]: data.value,
    };

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
    }).then((res) => res.json());
    return res;
}

export async function formRegister(data: {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
    address: string;
    gender: string;
    otp: string;
}) {
    const url = 'https://api-pro.teklearner.com/auth/v1/register';

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());

    return res;
}
