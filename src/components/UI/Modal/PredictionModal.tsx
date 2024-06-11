import React, { useState } from 'react';


const PredictionModal = ({ isOpen, onClose,dataMatche,onSubmit }) => {
  const [predictedScoreTeamA, setPredictedScoreTeamA] = useState(0);
  const [predictedScoreTeamB, setPredictedScoreTeamB] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = (e : any) => {
    e.preventDefault();
    onSubmit({
      matchId : dataMatche._id,
      predictedScore : {
          TeamAGoals : predictedScoreTeamA,
          TeamBGoals : predictedScoreTeamB
      }
  });
    onClose();
    // window.location.reload();
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-2xl w-full">
        <div className="px-6 py-4 border-b border-gray-200 ">
          <h3 className="text-lg font-medium text-gray-900">Dự Đoán Tỷ Số</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4 flex justify-center items-center space-x-4 bg-gray-700">
            <img src={dataMatche.flagTeamA} alt={`Flag of ${dataMatche.TeamA}`} className="w-50 h-10 border border-gray-300" />
            <input
              type="number"
              value={predictedScoreTeamA}
              min={0}
              onChange={(e) => setPredictedScoreTeamA(e.target.value)}
              className="w-16 px-3 py-2 border border-gray-300 rounded-md text-center"
              required
            />
            <span className="text-xl font-medium text-white">-</span>
            <input
              type="number"
              value={predictedScoreTeamB}
              min={0}
              onChange={(e) => setPredictedScoreTeamB(e.target.value)}
              className="w-16 px-3 py-2 border border-gray-300 rounded-md text-center"
              required
            />
            <img src={dataMatche.flagTeamB} alt={`Flag of ${dataMatche.TeamB}`} className="w-50 h-10 border border-gray-300" />
          </div>
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md mr-2">Hủy</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Dự đoán</button>
          </div>
        </form>
      </div>
    </div>


  );
};

export default PredictionModal;
