import React from 'react'

export default class Display extends React.Component {
    constructor(props){
        super(props);
    };
    render(){
        return (<div id = "display"><p>{this.props.text}</p></div>)
    }
}