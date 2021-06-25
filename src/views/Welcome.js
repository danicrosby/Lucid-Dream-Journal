import React, { useState, useEffect } from 'react';

export default function Welcome() {
  const [index, setIndex] = useState(0);
  const [fullText, setFullText] = useState(
    'a dream journal'
  );
  const [text, setText] = useState('');

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
        setFullText(fullText);
      }, 150);
    }
  }, [index]);

  return (
    <div className="welcome-container">
      <div className="lucid-title">Lucid.</div>
      <div className="journal-title">{text}</div>
    </div>
  );
}
