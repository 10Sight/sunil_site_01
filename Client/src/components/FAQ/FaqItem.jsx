import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqItem = ( {question, answer} ) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='border-b border-gray-200'>
      <button
       onClick={() => setIsOpen(!isOpen)}
       className='w-full flex justify-between items-center py-4 text-left cursor-pointer text-lg font-medium text-gray-800'
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className='w-5 h-5' /> : <ChevronDown className='w-5 h-5' />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <p className="text-gray-600 text-sm pb-4">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
