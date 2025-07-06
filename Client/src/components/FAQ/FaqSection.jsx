import React from 'react'

import FaqItem from './FaqItem';

const faqs = [
    {
        question: "This is my first Question?",
        answer: "This is my first answer."
    }
];

const FaqSection = () => {
  return (
    <div className='max-w-3xl mx-auto p-6'>
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
