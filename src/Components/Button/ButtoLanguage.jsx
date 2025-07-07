import React from 'react';

function ButtoLanguage({ selectedLanguage, setSelectedLanguage }) {
  const buttonNames = ['All', 'Malayalam', 'English', 'Hindi', 'Tamil'];

  return (
    <div className="mt-3">
      {buttonNames.map((name) => (
        <button
          key={name}
          onClick={() => setSelectedLanguage(name)}
          className={`border p-[10px] rounded-[40px] m-1 text-[12px] ${
            selectedLanguage === name
              ? 'bg-red-500 text-white border-red-500'
              : 'bg-white text-red-500 border-gray-300'
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default ButtoLanguage;
