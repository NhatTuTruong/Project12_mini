import axios from "axios";
import Image from "../Image"
import PredictionModal from '../Modal/PredictionModal';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListPredictionModal from "../Modal/ListPredictionModal";
import { formatISO } from 'date-fns';

const CardWWO = ({ data }: { data: any }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPredictionModalOpen, setIsPredictionModalOpen] = useState(false);
    const [dataPredictionList, setdataPredictionList] = useState([]);
    const [error, setError] = useState(null);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleOpenPredictionModal = () => setIsPredictionModalOpen(true);
    const handleClosePredictionModal = () => setIsPredictionModalOpen(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let matchId = data._id;
                const response = await axios.get('http://localhost:8000/v1/prediction/matches/' + matchId);
                setdataPredictionList(response.data); // Đặt dữ liệu vào state
                console.log(response.data);

            } catch (error: any) {
                setError(error);
            }
        };

        fetchData();
    }, []); // Mảng rỗng [] có nghĩa là useEffect chỉ chạy một lần sau khi component được mount
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
    const handlePredictionSubmit = async (prediction: any) => {
        const token = localStorage.getItem('token'); // Lấy JWT từ localStorage
        try {
            if (data.date >= formatISO(new Date())) {
                const response = await axios.post('http://localhost:8000/v1/prediction/', prediction, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
              
                toast(response.data.message);
            }
            else {
                toast('Bạn không thể dự đoán tỉ số khi trận đấu đã bắt đầu');
            }
        } catch (error: any) {
            toast(error.response ? error.response.data : error.message);
        }
    };
    const CheckTime = () => {
        let status: string = 'Dự đoán';

        if (data.date <= formatISO(new Date())) {
            status = 'Đang diễn ra';
        } else {
            status = 'Dự đoán';
        }
        return status;;
    }
    return (
        <>
            <div
                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark sm:shrink-0 sm:grow sm:basis-0">
                <a href="#!" className="flex justify-center">
                    <center className="px-10 py-5">
                        <Image style='' src={data.flagTeamA} ></Image>
                        <h3 className="mb-2 text-xl font-medium leading-tight text-center pt-5">{data.TeamA}</h3>
                    </center>
                    <center className="px-10 py-5">
                        <Image style='' src={data.flagTeamB} ></Image>
                        <h3 className="mb-2 text-xl font-medium leading-tight text-center pt-5">{data.TeamB}</h3>
                    </center>
                </a>
                <div className="px-6">
                    <p className="mb-4 text-base text-center">Vòng bảng: <span className="font-semibold">{data.board}</span>, Thời gian diễn ra: <span className="font-semibold">{formatTime(data.date)}</span>
                        <div className="sm:grid  md:grid-cols-3 mt-4">
                            <button type="button" onClick={handleOpenModal} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{CheckTime()}</button>
                            <PredictionModal
                                isOpen={isModalOpen}
                                onClose={handleCloseModal}
                                dataMatche={data}
                                onSubmit={handlePredictionSubmit}
                            />

                            <h5 className="mb-2 text-center text-3xl font-bold leading-tight">{data.score.homeGoals}-{data.score.awayGoals}</h5>
                            <button type="button" onClick={handleOpenPredictionModal} className="text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Danh sách</button>
                            <ListPredictionModal
                                isOpen={isPredictionModalOpen}
                                onClose={handleClosePredictionModal}
                                dataPredictionList={dataPredictionList}
                            />
                        </div>
                    </p>
                </div>
                <ToastContainer />
            </div>

        </>
    )
}

export default CardWWO