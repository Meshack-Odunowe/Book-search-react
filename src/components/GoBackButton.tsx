import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)} // Navigate back
      className="mb-6 flex items-center text-[#6b4f2b] hover:text-[#3e2f1c] transition-colors border rounded-[10px] p-2 border-[#6b4f2b]"
    >
      <ArrowLeft size={20} className="mr-2" />
      <span>Back</span>
    </button>
  );
};

export default GoBackButton;
