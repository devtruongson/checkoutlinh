'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function Success() {
    const params = useSearchParams();
    const error = params.get('error');

    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    return (
        <div className="h-[60vh] container mx-auto flex justify-center items-center">
            <h1 className="font-[600]">{error ? error : 'Chúc mừng bạn đã đăng ký tài khoản thành công!'}</h1>
        </div>
    );
}

export default function SuspenseWrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Success />
        </Suspense>
    );
}
