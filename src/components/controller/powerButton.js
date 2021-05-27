import React from 'react'

function PowerButton(props){
    return <div>
            <button onClick = {props.changePower}> {props.power? "Power On" : "Power Off"}</button>
        </div>
}

export default PowerButton
