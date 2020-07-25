import React, { useEffect, useCallback, useRef } from 'react';

const DrumPad = (props) => {
    const { id, keypad, src, name, display } = props;

    const sound = useRef();

    const handleClick = useCallback(() => {
        sound.current.currentTime = 0;
        sound.current.play();
        display(name);
    }, [display, name])
    
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
            <audio className="clip" src={src} ref={sound}></audio>
        </button>
    );
}

export default DrumPad;

