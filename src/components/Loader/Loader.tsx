import React, { useEffect, useState } from 'react';
import './Loader.css';
const greetings = [
    "Hello",  // English
    "Hola",   // Spanish
    "Bonjour", // French
    "Hallo",   // German
    "Ciao",    // Italian
    "你好",    // Chinese
    "こんにちは", // Japanese
    "안녕하세요", // Korean
    "नमस्ते", // India
];
const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
    const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % greetings.length;
                setCurrentGreeting(greetings[newIndex]);
                return newIndex;
            });
        }, 300);
        const timer = setTimeout(() => {
            clearInterval(interval);
            setIsVisible(false);
            setTimeout(onFinish, 500);
        }, 2500);
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onFinish]);
    return (
        <div className={`loader-container ${isVisible ? '' : 'fade-out'}`}>
            <div className="loader"></div>
            <h1 className={`greeting ${isVisible ? 'fade-in' : ''}`}>{currentGreeting}</h1>
        </div>
    );
};
export default Loader;