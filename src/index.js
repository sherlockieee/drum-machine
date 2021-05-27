import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

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


function App () {
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState('Hello!');
  const [volume, setVolume] = useState(50);
  const [currentPadBank, setPadBank] = useState(bankOne)
  const [padBankName, setPadBankName] = useState("Bank One")

  const changePower = () => {
    setPower(prevPower => !prevPower)
    setDisplay(!power? "Power On": "Power Off")
    if (power){
        setTimeout(clearDisplay, 1000)
    }
  }

  const clearDisplay = () => {
      setDisplay("")
  };

  const updateDisplay = (name) => {
      if (power){
          setDisplay(name);
      }
  };

  const updateVolume = (val) => {
      setVolume(val);
      updateDisplay("Volume: " + val);
  };

  const changePadBank = () => {
          if (currentPadBank === bankOne){
            setPadBank(bankTwo);
            setPadBankName("Bank Two");
            updateDisplay("Bank Two");
          } else {
              setPadBank(bankOne);
              setPadBankName("Bank One");
              updateDisplay("Bank One");
          }
  };

  return (
    <div>
      <ScriptComponent/>
      <div className = "App" id = "drum-machine">
                <ScriptComponent/>
                <PadBank volume = {volume} 
                name = {currentPadBank} 
                power = {power} 
                updateDisplay = {updateDisplay}/>
                <div id = "Controller">

                  <Display text = {display}/>

                  <div className = "Buttons">

                    <PowerButton changePower = {changePower} 
                    power = {power}/>

                    <PadBankButton changePadBank = {changePadBank} 
                    currentPadBank = {padBankName}/>

                  </div>
                  
                  <VolumeSlider updateVolume = {updateVolume} 
                  volume = {volume}/>
                </div>
            </div>

    </div>
  )




}

ReactDOM.render(<App />, document.getElementById('root'));