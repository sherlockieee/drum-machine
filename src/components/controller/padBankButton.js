import React from 'react'

export default class PadBankButton extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return (<button onClick = {this.props.changePadBank}>
            {this.props.currentPadBank === "Bank One"? "Bank One": "Bank Two"}</button>)
    }
}
