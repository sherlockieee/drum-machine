import React from 'react'

function VolumeSlider (props) {
    return (
        <div id = "Volume">
            <p> 0 </p>
            <input id = "VolumeSlider" type = "range" min = "1" max = "100" value = {props.volume}
        onInput = {e => props.updateVolume(e.target.value)}></input>
            <p> 100 </p>
        </div>
    )
}


export default VolumeSlider