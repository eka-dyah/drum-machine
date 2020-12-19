import { drumPadKeys } from '../shared/drumPadKeys';
import DrumPad from './DrumPad';

const DrumDisplay = (props) => {
    return (
        <div className="container">
            <h1 className="text-center text-white mt-5">DRUM MACHINE</h1>
            <hr className="border-white" />
            <div className="row my-5">
                <h4 id="display" className="col-12 text-white text-center">{props.display}
                </h4>
            </div>
            <div className="row justify-content-center">
                {drumPadKeys.keys.map(pad => (
                    <div className="col-3 col-md-2 m-1" key={pad.id}>
                        <DrumPad
                            id={pad.id}
                            keypad={pad.keypad}
                            name={pad.name}
                            src={pad.src}
                            display={props.updateDisplay}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DrumDisplay;