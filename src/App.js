import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import useScript from './hooks/useScript.js'

import PadBank from './components/padBank'

import VolumeSlider from './components/controller/volumeSlider'
import PowerButton from './components/controller/powerButton'
import PadBankButton from './components/controller/padBankButton'
import Display from './components/controller/display'



const ScriptComponent = () => {
    useScript("https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js");
    return null
}

const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            power: true,
            display: "Hello",
            currentPadBank: bankOne,
            padBankName: "Bank One",
            volume: 50
        }
        this.changePower = this.changePower.bind(this)
        this.changePadBank = this.changePadBank.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);
        this.updateVolume = this.updateVolume.bind(this);
    }

    changePower(){
        this.setState(
            {power: !this.state.power,
            display: !this.state.power? "Power On": "Power Off"}
        )
        if (this.state.power){
            setTimeout(this.clearDisplay, 1000)
        }
    }

    clearDisplay(){
        this.setState(
            {display: ""}
        )
    }

    updateDisplay(name){
        if (this.state.power){
            this.setState(
                {display: name}
            )
        }
    }

    updateVolume(val){
        this.setState(
            {volume: val}
        )
        this.updateDisplay("Volume: " + val)
    }

    changePadBank(){
        
            if (this.state.currentPadBank === bankOne){
                this.setState({
                    currentPadBank: bankTwo,
                    padBankName: "Bank Two",
                })
                this.updateDisplay("Bank Two")
            } else {
                this.setState({
                    currentPadBank: bankOne,
                    padBankName: "Bank One",
                })
                this.updateDisplay("Bank One")
            }
    }

    
    render(){
        return (
            <div className = "App" id = "drum-machine">
                <ScriptComponent/>
                <PadBank volume = {this.state.volume} 
                name = {this.state.currentPadBank} 
                power = {this.state.power} 
                updateDisplay = {this.updateDisplay}/>

                <PowerButton changePower = {this.changePower} 
                power = {this.state.power}/>

                <PadBankButton changePadBank = {this.changePadBank} 
                currentPadBank = {this.state.padBankName}/>

                <Display text = {this.state.display}/>

                <VolumeSlider updateVolume = {this.updateVolume} 
                volume = {this.state.volume}/>
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));