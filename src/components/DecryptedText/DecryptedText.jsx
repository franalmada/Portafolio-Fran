'use client';
import React, { useEffect, useState, useCallback } from 'react';

const lettersAndSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function DecryptedText({ text, className = '' }) {
  const [animatedText, setAnimatedText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(true);
  
  const getRandomChar = useCallback(
    () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
    []
  );
  
  const animateText = useCallback(async () => {
    const duration = 40;
    const revealDuration = 60;
    const initialRandomDuration = 250;
    
    // Fase 1: Caracteres aleatorios
    const generateRandomText = () =>
      text
        .split('')
        .map(() => getRandomChar())
        .join('');
    
    setAnimatedText(generateRandomText());
    const endTime = Date.now() + initialRandomDuration;
    
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, duration));
      setAnimatedText(generateRandomText());
    }
    
    // Fase 2: Revelado progresivo
    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, revealDuration));
      setAnimatedText(
        (prevText) =>
          text.slice(0, i + 1) +
          prevText
            .slice(i + 1)
            .split('')
            .map(() => getRandomChar())
            .join('')
      );
    }
    setIsDecrypting(false);
  }, [text, getRandomChar]);
  
  useEffect(() => {
    setIsDecrypting(true);
    animateText();
  }, [text, animateText]);
  
  return (
    <div className={`relative inline-block ${className}`}>
      <span 
        className={`
          text-3xl md:text-5xl font-bold tracking-tight
${isDecrypting ? 'text-cyan-400' : 'text-blue-400'}
          transition-colors duration-500
          drop-shadow-[0_0_8px_rgba(0,150,255,0.5)]
        `}
      >
        {animatedText}
      </span>
    </div>
  );
}

export default DecryptedText;