import React from 'react';

const ListPredictionModal = ({ isOpen, onClose, dataPredictionList }) => {
    const formatTime = (isoDate) => {
        const date = new Date(isoDate);
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'UTC'
        };
        const formatter = new Intl.DateTimeFormat('vi-VN', options);
        const formattedDate = formatter.format(date);
        return formattedDate;
    };
    const avatarUrls = [
        'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--914bcfe0-f610-4610-a77e-6ea53c53f630/_330603286208.app.png?preferwebp=true&width=312',
        'https://img.a.transfermarkt.technology/portrait/big/28003-1710080339.jpg?lm=1',
        'https://img.a.transfermarkt.technology/portrait/big/68290-1697056482.png?lm=1',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdq8BpP8g-6ArJZxW8OqyLzWfeaIJIK-5Lw&s',
        'https://img.a.transfermarkt.technology/portrait/big/602105-1680698738.jpg?lm=1',
        'https://img.a.transfermarkt.technology/portrait/big/225083-1703279938.png?lm=1',
        'https://static.bongda24h.vn/medias/original/2023/09/27/7-heung-min-son-2709141602.jpg',
        'https://img.a.transfermarkt.technology/portrait/big/96341-1661780981.jpg?lm=1',



        // Add other avatar URLs here
    ];
    const getRandomAvatarUrl = () => {
        return avatarUrls[Math.floor(Math.random() * avatarUrls.length)];
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md max-w-3xl ">
                <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md ml-96 mt-2">X</button>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Tên
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ngày dự đoán
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kết quả dự đoán
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPredictionList && dataPredictionList.map((item, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4 flex items-center">
                                    <img
                                        src={getRandomAvatarUrl()}
                                        alt="Avatar"
                                        className="h-8 w-8 rounded-full mr-2 object-cover object-center"
                                    />
                                    <span className="font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.user.username}</span>
                                </td>
                                    <td className="px-6 py-4">
                                        {formatTime(item.predictionDate)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.predictedScore.TeamAGoals} - {item.predictedScore.TeamBGoals}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListPredictionModal;
