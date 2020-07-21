import React, { useEffect, useCallback } from 'react';

const DrumPad = (props) => {
    const { id, keypad, src, name, display } = props;

    const handleClick = useCallback(() => {
        const sound = document.getElementById(keypad);
        sound.currentTime = 0;
        sound.play();
        display(name);
    }, [display, name, keypad])
    
    const onKeyPress = useCallback((e) => {
        if (e.keyCode === id) {
            handleClick();
        }
    }, [handleClick, id])


    document.addEventListener('keydown', onKeyPress);

    useEffect(() => {
        document.removeEventListener('keydown', onKeyPress);
    }, [onKeyPress])

    return (
        <button
            id={id}
            onClick={handleClick}
            className="btn btn-danger"
            onKeyPress={onKeyPress}
        >
            {keypad} <br/>
            {name}
            <audio className="clip" id={keypad} src={src}></audio>
        </button>
    );
}

export default DrumPad;

