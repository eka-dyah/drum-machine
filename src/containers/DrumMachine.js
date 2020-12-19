import { Component } from 'react';
import DrumDisplay from '../components/DrumDisplay';

class DrumMachine extends Component {
    constructor(props) {
        super(props);
        this.state = { display: 'Midi' }
    }
    updateDisplay = (name) => {
        this.setState({ display: name })
    }
    render() {
        return (
            <DrumDisplay 
                display={this.state.display}
                updateDisplay={this.updateDisplay}
            />
        );
    }
}

export default DrumMachine;