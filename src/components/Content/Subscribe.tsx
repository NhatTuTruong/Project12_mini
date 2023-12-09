
import Title from "../UI/Title"
import SubscribeForm from "../UI/Form/subscribeForm";

import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface Product {
    id: number;
    title: string;
    price: number;
}

const Subscribe: React.FC = () => {
    const { data, isLoading, isError, error } = useQuery<Product[], Error>({
        queryKey: ['products'], queryFn: () =>
            fetch('https://api.escuelajs.co/api/v1/products?offset=0').then(res => res.json())
    })

    if (isLoading) return <div>Đang tải...</div>;

    if (isError) {
        return <span>Error: {error.message}</span>
    }
    return (
        <section className="bg-gray-f3f3f3 pb-12">
            <Title text="Subscribe to Our Newsletter"></Title>
            <div className="md:container md:mx-auto  py-4 items-center">
                <SubscribeForm></SubscribeForm>

            </div>
        </section>
    )
}

export default Subscribe