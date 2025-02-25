"use client";

import { FC } from "react";

interface MatchScoreProps {
  score: number;
}

const MatchScore: FC<MatchScoreProps> = ({ score }) => {
  let bgColor = "bg-gray-300";
  if (score >= 80) bgColor = "bg-green-500";
  else if (score >= 50) bgColor = "bg-yellow-500";
  else bgColor = "bg-red-500";

  return (
    <div className="mt-3 flex items-center">
      <span className="text-sm text-gray-600">Match Score:</span>
      <div className={`ml-2 px-3 py-1 rounded-full text-white ${bgColor}`}>
        {score}%
      </div>
    </div>
  );
};

export default MatchScore;