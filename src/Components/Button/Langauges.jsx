import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function Langauges({ selectedLanguage, setSelectedLanguage }) {
  const [showLanguage, setShowLanguage] = useState(false);

  const languages = ['All', 'Malayalam', 'English', 'Hindi', 'Tamil'];

  const handleSelect = (lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <div className="bg-white m-4 rounded shadow">
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center cursor-pointer" onClick={() => setShowLanguage(!showLanguage)}>
          <FaChevronDown
            className={`mt-0.5 text-[14px] text-gray-500 transition-transform ${
              showLanguage ? 'rotate-180' : ''
            }`}
          />
          <h3 className="text-red-500 ml-2 font-semibold">Language</h3>
        </div>
        <button
          className="text-sm text-gray-500 hover:underline"
          onClick={() => setSelectedLanguage('All')}
        >
          Clear
        </button>
      </div>

      {!showLanguage && (
        <div className="p-3 flex flex-wrap">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`border p-[10px] rounded-[40px] m-1 text-[13px] ${
                selectedLanguage === lang
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-white text-red-500 border-gray-300'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Langauges;
