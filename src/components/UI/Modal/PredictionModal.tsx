import React, { useState } from 'react';

const PredictionModal = ({ isOpen, onClose,dataMatche,onSubmit }) => {
  const [predictedScoreTeamA, setPredictedScoreTeamA] = useState('');
  const [predictedScoreTeamB, setPredictedScoreTeamB] = useState('');

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
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Dự Đoán Tỷ Số</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Số bàn thắng của đội {dataMatche.TeamA}</label>
              <input
                type="number"
                value={predictedScoreTeamA}
                onChange={(e) => setPredictedScoreTeamA(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Số bàn thắng của đội {dataMatche.TeamB}</label>
              <input
                type="number"
                value={predictedScoreTeamB}
                onChange={(e) => setPredictedScoreTeamB(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
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
