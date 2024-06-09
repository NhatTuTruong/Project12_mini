import React, { useState } from 'react';

const ListPredictionModal = ({ isOpen, onClose, dataPredictionList }) => {
    const formatTime = (isoDate: string) => {
        // Tạo đối tượng Date từ chuỗi
        const date = new Date(isoDate);

        // Tạo formatter với `Intl.DateTimeFormat`
        const options: any = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false, // Không sử dụng AM/PM
            timeZone: 'UTC' // Nếu bạn muốn giữ thời gian theo UTC
        };
        const formatter = new Intl.DateTimeFormat('vi-VN', options);

        // Định dạng ngày giờ
        const formattedDate = formatter.format(date);
        return formattedDate;
    };
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Danh sách dự đoán</h3>
                </div>
                <div
                    className="relative flex w-100 flex-col  bg-white bg-clip-border text-gray-700"
                >
                    <div className="p-6">
                        <div className="mb-4 flex items-center justify-between">
                            <h5
                                className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                            >
                            
                            </h5>
                            <a
                                href="#"
                                className="block font-sans text-sm font-bold leading-normal text-blue-500 antialiased"
                            >
                            </a>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {
                                dataPredictionList && dataPredictionList.map((item: any, index: number) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
                                            <div className="flex items-center gap-x-3">
                                                <img
                                                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg"
                                                    alt="Tania Andrew"
                                                    className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                                />
                                                <div>
                                                    <h6
                                                        className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased"
                                                    >
                                                        {item.user.username}
                                                    </h6>
                                                    <p
                                                        className="block font-sans text-sm font-light leading-normal text-gray-700 antialiased"
                                                    >
                                                        {formatTime(item.predictionDate)}
                                                    </p>
                                                </div>
                                            </div>
                                            <h6
                                                className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased"
                                            >
                                                {item.predictedScore.TeamAGoals} - {item.predictedScore.TeamBGoals}
                                            </h6>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md mr-2">Hủy</button>
            </div>
        </div>
    );
};

export default ListPredictionModal;
