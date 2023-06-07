import React, { useState } from 'react';
import SadImage from './Sad.jpg';
import HappyImage from './Happy.jpg';

const Emoji = () => {
    const [mood, setMood] = useState('Happy');

    const toggleMood = () => {
        const newMood = mood === 'Happy' ? 'Sad' : 'Happy';
        setMood(newMood);
    };

    return (
        <div>
            <img src={mood === 'Happy' ? HappyImage : SadImage} alt={mood} style={{ width: '100px', height: '100px' }} />
            <h2>{mood}</h2>
            <button onClick={toggleMood}>Toggle Emoji</button>
        </div>
    );
};

export default Emoji;
