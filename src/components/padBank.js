import React from 'react'
import Drum from './drum'

class PadBank extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let padBank;

        if (this.props.power){
            padBank = this.props.name.map((drum) => {
                return <Drum 
                volume = {this.props.volume}
                updateDisplay = {this.props.updateDisplay} 
                id = {drum.id} 
                url = {drum.url} 
                keyTrigger = {drum.keyTrigger} 
                keyCode = {drum.keyCode} 
                power = {this.props.power}/>
            })
        } else {
            padBank = this.props.name.map((drum)=> {
                return <Drum 
                volume = {this.props.volume}
                updateDisplay = {this.props.updateDisplay} 
                id = {drum.id} url ='#' 
                keyTrigger = {drum.keyTrigger} 
                keyCode = {drum.keyCode}
                power = {this.props.power}/>
            })

       }

        return(
            <div id = "padBank">
                {padBank}
            </div>
        )
    }
}



export default PadBank