import CardProduct from "../UI/Cart/CardProduct"
import Title from "../UI/Title"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface Product {
    id: number;
    title: string;
    price: number;
}

const ListProduct: React.FC = () => {
    const { data, isLoading, isError, error } = useQuery<Product[], Error>({
        queryKey: ['products'], queryFn: () =>
            fetch('https://api.escuelajs.co/api/v1/products?offset=0').then(res => res.json())
    })

    if (isLoading) return <div>Đang tải...</div>;

    if (isError) {
        return <span>Error: {error.message}</span>
    }
    return (
        <section className="bg-white">
            <Title text="List Of Products"></Title>
            <div className="md:container md:mx-auto  py-4 items-center">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        400:{
                          slidesPerView:2,
                        },
                        639: {
                          slidesPerView: 3,
                        },
                        865:{
                          slidesPerView:3
                        },
                        1000:{
                          slidesPerView:4
                        },
                        1500:{
                          slidesPerView:4
                        },
                        1700:{
                          slidesPerView:4
                        }
                      }}
                    slidesPerView={4}
                    navigation
                >
                    {
                        data && data.map((product: Product) => (
                            <SwiperSlide key={product.id}>
                                <CardProduct data={product} ></CardProduct>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default ListProduct