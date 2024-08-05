import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './styles/styles.css';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Quản Lý Bán Hàng Sản Phẩm',
    description: 'Website cung cấp các sản phẩm bán hàng',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
