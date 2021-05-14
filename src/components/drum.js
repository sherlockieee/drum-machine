import React from 'react'

export default class Drum extends React.Component {
    constructor(props){
        super(props);
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyPress)
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress(e){
        if (e.keyCode == this.props.keyCode){
            this.playSound()
        }
    }

    playSound(){
        const sound = document.getElementById(this.props.keyTrigger);
        sound.volume = this.props.volume/100
        sound.play();
        this.props.updateDisplay(this.props.id);
    }
    
    render(){
        return (
            <div className = {this.props.type} id = {this.props.id} onClick = {this.playSound}>
                <audio className = "clip" id = {this.props.keyTrigger} src={this.props.url}/>
                {this.props.keyTrigger}</div>
        )
    }
}
