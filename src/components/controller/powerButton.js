import React from 'react'

export default class PowerButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <button onClick = {this.props.changePower}> {this.props.power? "Power On" : "Power Off"}</button>
        </div>
    }
}