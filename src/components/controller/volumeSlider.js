import React from 'react'

class VolumeSlider extends React.Component {
    constructor(props){
        super(props);
    };
    render(){
        return (<div id = "Volume">
            <p> 0 </p>
            <input id = "VolumeSlider" type = "range" min = "1" max = "100" value = {this.props.volume}
        onInput = {e => this.props.updateVolume(e.target.value)}></input>
            <p> 100 </p>
        </div>)
    }
}

export default VolumeSlider