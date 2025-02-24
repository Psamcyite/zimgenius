const getScoreColor = (score: number) => {
  if (score >= 80) return "bg-green-500";
  if (score >= 50) return "bg-yellow-500";
  return "bg-red-500";
};

const MatchScore = ({ score }: { score: number }) => {
  return (
    <div className="relative w-full h-3 bg-gray-200 rounded-full">
      <div className={`${getScoreColor(score)} h-3 rounded-full`} style={{ width: `${score}%` }} />
      <span className="absolute right-2 text-sm">{score}%</span>
    </div>
  );
};

export default MatchScore;