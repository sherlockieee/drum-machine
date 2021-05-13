import React from 'react'

class VolumeSlider extends React.Component {
    constructor(props){
        super(props);
    };
    render(){
        return <input type = "range" min = "1" max = "100" value = {this.props.volume}
        onInput = {e => this.props.updateVolume(e.target.value)}></input>
    }
}

export default VolumeSlider