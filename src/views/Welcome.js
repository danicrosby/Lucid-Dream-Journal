import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
// import Menu from '../components/Menu';

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
      }, 100);
    }
  }, [index]);

  return (
    <>
    <NavBar />
    <div className="welcome-container">
      <span className="lucid-title">LUCID</span>
      <span className="journal-title">{text}</span>
      {/* <Link className="nav-link" to="/dreams"><i className="material-icons" id="cloud"> wb_cloud </i></Link> */}
    </div>
    </>
  );
}
