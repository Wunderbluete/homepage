'use client'
import React, { useState, useEffect } from 'react';
import styles from './AgeVerificationPopup.module.css'; // Importiere CSS-Modul

const AgeVerificationPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const ageVerified = localStorage.getItem('ageVerified');
        if (!ageVerified) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden'; // Verhindert Scrollen, wenn das Popup sichtbar ist
        }
    }, []);

    const handleVerifyAge = () => {
        localStorage.setItem('ageVerified', 'true');
        setIsVisible(false);
        document.body.style.overflow = 'auto'; // Erlaubt Scrollen, wenn das Popup nicht sichtbar ist
    };

    const handleDenyAge = () => {
        window.location.href = 'https://www.cannabispraevention.de/';
    };
    
    if (!isVisible) {
        return null;
    }

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popup}>
                <p>Bist du über 18 Jahre alt?</p>
                <button onClick={handleVerifyAge}>Ja</button>
                <button onClick={handleDenyAge}>Nein</button>
            </div>
        </div>
    );
};

export default AgeVerificationPopup;
