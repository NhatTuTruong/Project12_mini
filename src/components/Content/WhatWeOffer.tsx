
import CartWWO from "../UI/Cart/CardWWO"
import Title from "../UI/Title"
import React ,{ useState, useEffect } from 'react';
import env from '../../../config/env'
import axios from 'axios';


const WhatWeOffer = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const apiUrl = env.apiUrl;
    console.log(apiUrl);
    useEffect(() => {
        const fetchData = async () => {
            try {
                 
                const response = await axios.get(`${apiUrl}/matche/`);
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
