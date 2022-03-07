import {useState, useEffect} from 'react';

export default function ApiTest() {
    //fetch text from http://localhost:8000/ and set it to state
    const [text, setText] = useState('');
    useEffect(() => {
        fetch('http://localhost:8000/')
            .then(res => res.text())
            .then(text => setText(text));
    }
    , []);
    return (
        <div>
            <h1 className="text-white font-display text-2xl">ApiTest</h1>
            <p className="text-white font-display text-xl">{text}</p>
        </div>
    );
  }