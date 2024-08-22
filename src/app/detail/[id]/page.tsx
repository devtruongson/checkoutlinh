import React from 'react';
import './detail.css';
import SideImageListDetail from '@/components/SideImageListDetail/SideImageListDetail';
import ProductList from '@/components/ProductList/ProductList';
import Link from 'next/link';
import { ClassObject } from '@/utils/interface';

export default async function Detail({ params }: { params: { id: string } }) {
    const dataList: { data: ClassObject[] } = (await fetch(
        'https://api-pro.teklearner.com/class/v1/get-list-class?class_code=&skip=0&limit=16000',
        {
            cache: 'no-cache',
        },
    ).then((response) => response.json())) || { data: [] };
    const dataDetail: { data: any } = (await fetch(
        `https://api-pro.teklearner.com/class/v1/class-detail?id=${params.id}`,
        {
            cache: 'no-cache',
        },
    ).then((response) => response.json())) || { data: {} };

    return (
        <div className="container mx-auto pt-6">
            <div className="mb-6">
                <BreadCrumb titleDetail="Khóa Học NodeJs Cơ Bản Đến Nâng Cao" />
            </div>
            <div className="content">
                <div className="content-side">
                    <SideImageListDetail
                        listUrl={[
                            '/sider_top_one.png',
                            '/sider_top_one.png',
                            '/sider_top_one.png',
                            '/sider_top_one.png',
                            '/sider_top_one.png',
                            '/sider_top_one.png',
                        ]}
                    />
                    <div className="content-side-right">
                        <div className="p-4">
                            <div className="text-sm font-bold">
                                {dataDetail?.data ? dataDetail?.data.class_type : 'Đang Cập Nhật'}
                            </div>

                            <h1 className="text-2xl font-bold">
                                {dataDetail?.data ? dataDetail?.data.class_name : 'Đang Cập Nhật'}
                            </h1>

                            <div className="text-sm text-gray-500 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 16.343l-6.828-6.828a4 4 0 010-5.656z" />
                                </svg>
                                Add to Favourites
                            </div>

                            <p className="text-sm text-gray-500 mt-2">
                                {dataDetail?.data ? dataDetail?.data.class_location : 'Đang Cập Nhật'}
                            </p>

                            <div className="flex items-center mt-2">
                                <span className="line-through text-gray-400">
                                    {dataDetail?.data
                                        ? (
                                              dataDetail?.data?.course?.course_price -
                                              dataDetail?.data?.course?.course_discount
                                          ).toLocaleString('it-IT', {
                                              style: 'currency',
                                              currency: 'VND',
                                          })
                                        : 'AED 32.00'}
                                </span>
                                <span className="text-xl font-bold ml-2">
                                    {' '}
                                    {dataDetail?.data
                                        ? dataDetail?.data?.course?.course_price.toLocaleString('it-IT', {
                                              style: 'currency',
                                              currency: 'VND',
                                          })
                                        : 'AED 32.00'}
                                </span>
                                <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold ml-2 p-1 rounded">
                                    30% Off
                                </span>
                            </div>

                            <p className="text-sm text-gray-500 mt-1">
                                {dataDetail?.data ? dataDetail?.data.normalized_class_name : 'Đang cập nhât'}
                                <span className="text-blue-600 cursor-pointer ms-3">Track Rate</span>
                            </p>

                            <div className="flex space-x-4 mt-4">
                                <button className="bg-black text-white px-4 py-2 font-semibold">ADD TO CART</button>
                                <button className="bg-black text-white px-4 py-2 font-semibold">BUY NOW</button>
                            </div>

                            <div className="mt-5 text-sm text-gray-500 flex gap-4 items-center">
                                <div>
                                    <span className="flex items-center cursor-pointer">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 16.343l-6.828-6.828a4 4 0 010-5.656z" />
                                        </svg>
                                        View My Favourite List
                                    </span>
                                    <span className="flex items-center cursor-pointer">
                                        Số lượng sinh viên{' '}
                                        {dataDetail?.data ? dataDetail?.data.number_student : 'Đang cập nhât'}
                                    </span>
                                    <span className="flex items-center cursor-pointer">
                                        Ngày bắt đầu {dataDetail?.data ? dataDetail?.data.start_date : 'Đang cập nhât'}
                                    </span>
                                    <span className="flex items-center cursor-pointer">
                                        Ngày kết thúc {dataDetail?.data ? dataDetail?.data.end_date : 'Đang cập nhât'}
                                    </span>
                                    <span className="flex items-center cursor-pointer">
                                        Giáo viên{' '}
                                        {dataDetail?.data ? dataDetail?.data?.teachers?.email : 'Đang cập nhât'}
                                    </span>
                                    <span className="flex items-center cursor-pointer">
                                        ClassCode {dataDetail?.data ? dataDetail?.data?.class_code : 'Đang cập nhât'}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-[600] text-[30px] text-[#333] mb-4">Campus</h4>
                                    <span className="flex items-center cursor-pointer">
                                        Trạng thái{' '}
                                        {dataDetail?.data ? dataDetail?.data?.campus?.campus_status : 'Đang cập nhât'}
                                    </span>
                                    <span className="flex items-center cursor-pointer">
                                        Code{' '}
                                        {dataDetail?.data ? dataDetail?.data?.campus?.campus_code : 'Đang cập nhât'}
                                    </span>
                                    <span className="flex items-center cursor-pointer">
                                        Name{' '}
                                        {dataDetail?.data ? dataDetail?.data?.campus?.campus_name : 'Đang cập nhât'}
                                    </span>
                                    <span className="flex items-center cursor-pointer">
                                        Name{' '}
                                        {dataDetail?.data ? dataDetail?.data?.campus?.campus_address : 'Đang cập nhât'}
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 p-2 border mt-4">
                                {dataDetail?.data ? (
                                    dataDetail?.data.calendar_config.rank.map((item: string, index: number) => {
                                        return (
                                            <div key={index} className="bg-gray-200 p-2 text-center">
                                                {item}
                                            </div>
                                        );
                                    })
                                ) : (
                                    <>
                                        <div className="bg-gray-200 p-2 text-center">Lorem Ipsum</div>
                                        <div className="bg-gray-200 p-2 text-center">Lorem Ipsum Se</div>
                                        <div className="bg-gray-200 p-2 text-center">Lorem Ipsum</div>
                                        <div className="bg-gray-200 p-2 text-center">Lorem Ipsum</div>
                                        <div className="bg-gray-200 p-2 text-center">Lorem Ipsum Se</div>
                                        <div className="bg-gray-200 p-2 text-center">Lorem Ipsum</div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full overflow-auto">
                    <h2 className="text-xl font-semibold text-center mb-6">
                        See what Ambassadors says about the product
                    </h2>
                    <div className="flex justify-around gap-4 cart_list">
                        <div className="w-full bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                                    <div>
                                        <p className="text-lg font-bold">Name Surname</p>
                                        <p className="text-sm text-gray-500">AMBASSADOR</p>
                                    </div>
                                </div>
                                <button className="bg-black text-white py-2 px-4 rounded">SHOP WITH ME</button>
                            </div>
                            <p className="italic mt-4 text-gray-600">
                                Pede dis ipsum placeat do exercitation laborum nostra non inceptos sociosqu dolorum
                            </p>
                            <h3 className="text-lg font-semibold mt-4">What I love about this product</h3>
                            <div className="flex mt-2">
                                <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs mr-2">
                                    Lorem Ipsum
                                </span>
                                <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs mr-2">
                                    Lorem Ipsum Se
                                </span>
                            </div>
                            <button className="mt-4 text-blue-500 text-sm">View More</button>
                        </div>
                        <div className="w-full bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                                    <div>
                                        <p className="text-lg font-bold">Name Surname</p>
                                        <p className="text-sm text-gray-500">AMBASSADOR</p>
                                    </div>
                                </div>
                                <button className="bg-black text-white py-2 px-4 rounded">SHOP WITH ME</button>
                            </div>
                            <p className="italic mt-4 text-gray-600">
                                Pede dis ipsum placeat do exercitation laborum nostra non inceptos sociosqu dolorum
                            </p>
                            <h3 className="text-lg font-semibold mt-4">What I love about this product</h3>
                            <div className="flex mt-2">
                                <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs mr-2">
                                    Lorem Ipsum
                                </span>
                                <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs mr-2">
                                    Lorem Ipsum Se
                                </span>
                            </div>
                            <button className="mt-4 text-blue-500 text-sm">View More</button>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                        <p className="text-gray-700">
                            Ad illum natoque volutpat leo curabitur est nisi reprehenderit quisque illo ullam
                            scelerisque viverra taciti volutaptum adipiscing omnis vel augue convallis anim dis quis et
                            molestie, eos aenean corrupti neque? Interdum, quisque.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Key Ingredients</h3>
                            <ul className="list-disc pl-5 text-gray-700">
                                <li>Ingredient - Eget cursus officis, consequatior adipiscing elit scinimano</li>
                                <li>
                                    Ingredient - Eget cursus officis, consequatior adipiscit tincidunt, velit nemo dict
                                </li>
                                <li>Ingredient - Eget cursus officis, consequatior adipiscit tincidunt, velit</li>
                                <li>Ingredient - Eget cursus officis, consequatior adipiscit</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
                            <ul className="list-disc pl-5 text-gray-700">
                                <li>
                                    Nisl venenatis, esse conubia nibh ipsum, quisrand sequi, vitae convallis lectus
                                    dignis
                                </li>
                                <li>
                                    Nisl venenatis, esse conubia nibh ipsum, quisrand sequi, vitae convallis lectus
                                    dignis integer
                                </li>
                                <li>Nisl venenatis, esse conubia nibh ipsum, quisrand sequi, vitae convallis lectus</li>
                                <li>Nisl venenatis, esse conubia nibh ipsum, quisrand sequi</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">How to Use?</h3>
                        <p className="text-gray-700">
                            Ad illum natoque volutpat leo curabitur est nisi reprehenderit quisque illo ullam
                            scelerisque viverra taciti volutaptum adipiscing omnis vel augue convallis anim dis quis et
                            molestie, eos aenean corrupti neque? Interdum, quisque.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">All Ingredients</h3>
                        <p className="text-gray-700">
                            Water, Brassica Alcohol, Glycerin, Neopentyl Glycol Diethylhexanoate, Propanediol,
                            Bis-Stearoyl Dimethicone, Trimethylpentanediol/Adipic Acid Copolymer, Butyrospermum Parkii
                            (Shea) Butter, Dimethicone, Squalane, Potassium.
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="max-w-6xl mx-auto p-4">
                        {/* Reviews Header */}
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-semibold">Reviews (1480)</h2>
                            <button className="bg-black text-white py-2 px-4 rounded">WRITE REVIEW</button>
                        </div>

                        {/* Average Rating */}
                        <div className="flex items-center mb-8">
                            <div className="text-2xl">⭐ 4 / 5</div>
                            <div className="text-gray-700 ml-2">Average Rating</div>
                        </div>

                        {/* Reviews and Top Reviews Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* User Reviews */}
                            <div className="col-span-2">
                                {Array(3)
                                    .fill('')
                                    .map((_, index) => (
                                        <div key={index} className="mb-8 border-b pb-4">
                                            <div className="flex items-center mb-2">
                                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                                                <div>
                                                    <p className="text-lg font-bold">Name Surname</p>
                                                    <div className="flex items-center">
                                                        <div className="flex text-yellow-400">
                                                            {Array(4)
                                                                .fill('⭐')
                                                                .map((star, i) => (
                                                                    <span key={i}>{star}</span>
                                                                ))}
                                                            <span className="text-gray-400">⭐</span>
                                                        </div>
                                                        <p className="text-sm text-gray-500 ml-2">5 September 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-700">
                                                Porta corporis nibh. Adipisci maiores dui torquent porttitor wisi
                                                necessitatis...
                                            </p>
                                        </div>
                                    ))}
                                <button className="text-blue-500 text-sm">View All</button>
                            </div>

                            {/* Top Reviews */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Top Reviews</h3>
                                {Array(3)
                                    .fill('')
                                    .map((_, index) => (
                                        <div key={index} className="mb-8 border-b pb-4">
                                            <div className="flex items-center mb-2">
                                                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                                                <div>
                                                    <p className="text-lg font-bold">Name Surname</p>
                                                    <div className="flex text-yellow-400">
                                                        {Array(5)
                                                            .fill('⭐')
                                                            .map((star, i) => (
                                                                <span key={i}>{star}</span>
                                                            ))}
                                                    </div>
                                                    <p className="text-sm text-gray-500">5 September 2018</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-700">
                                                Porta corporis nibh. Adipisci maiores dui torquent porttitor wisi
                                                necessitatis...
                                            </p>
                                            <button className="text-blue-500 text-sm mt-2">Read More</button>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_section py-6">
                    <div className="container mx-auto">
                        <h2 className="title_top_section">RELATED PRODUCTS</h2>
                        <ProductList
                            dataList={dataList.data}
                            countRenderProduct={10}
                            isSide
                            settings={{
                                dots: false,
                                slidesToShow: 4,
                                speed: 1000,
                                arrows: true,
                                slidesToScroll: 1,
                                autoplay: true,
                                responsive: [
                                    {
                                        breakpoint: 1024,
                                        settings: {
                                            slidesToShow: 4,
                                            slidesToScroll: 1,
                                            infinite: true,
                                            dots: true,
                                        },
                                    },
                                    {
                                        breakpoint: 600,
                                        settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 2,
                                        },
                                    },
                                    {
                                        breakpoint: 480,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1,
                                        },
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

interface IPropsBreadCrumb {
    titleDetail: string;
}

function BreadCrumb({ titleDetail }: IPropsBreadCrumb) {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                    >
                        <svg
                            className="w-3 h-3 me-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg
                            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <a
                            href="#"
                            className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                        >
                            Trang Chi Tiết
                        </a>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg
                            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                            {titleDetail}
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    );
}
