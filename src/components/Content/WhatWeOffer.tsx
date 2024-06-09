
import CartWWO from "../UI/Cart/CardWWO"
import Title from "../UI/Title"
import { useState, useEffect } from 'react';
import axios from 'axios';


const WhatWeOffer = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/v1/matche/');
                setData(response.data); // Đặt dữ liệu vào state
                console.log(response.data);

            } catch (error: any) {
                setError(error);
            }
        };

        fetchData();
    }, []); // Mảng rỗng [] có nghĩa là useEffect chỉ chạy một lần sau khi component được mount
    return (
        <section className="bg-gray-f3f3f3 pb-12">
            <Title text="Các trận đấu diễn ra hôm nay"></Title>
            <div className="grid-cols-1 sm:grid md:grid-cols-3">
                {
                    data && data.map((item: any, index: number) => (
                        <div key={index}>
                            <CartWWO data={item} ></CartWWO>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default WhatWeOffer
