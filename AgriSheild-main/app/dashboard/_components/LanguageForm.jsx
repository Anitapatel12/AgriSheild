import React, { useState } from 'react';
import VideoRecommendation from './VideoRecommendation';

const LanguageForm = () => {
  const [inputLanguage, setInputLanguage] = useState('');
  const [submittedLanguage, setSubmittedLanguage] = useState('kannada');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedLanguage(inputLanguage.toLowerCase());
    setInputLanguage('');
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Search for Videos</h2>
      <p className="text-md text-gray-600 mb-6">Enter a language to see its video recommendations:</p>
      
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <label htmlFor="language" className="mr-4">Language:</label>
        <input
          type="text"
          id="language"
          value={inputLanguage}
          onChange={(e) => setInputLanguage(e.target.value)}
          className="border p-2 mr-4"
          placeholder="e.g., English"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>

      {/* Pass the submitted language to VideoRecommendation */}
      <VideoRecommendation initialLanguage={submittedLanguage} />
    </div>
  );
};

export default LanguageForm;
