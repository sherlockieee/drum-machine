import React, {useEffect} from 'react'

function Drum (props) {

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress) 

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [])

    const handleKeyPress = (e) => {
        if (e.keyCode == props.keyCode){
            playSound()
        }
    }

    const playSound = () => {
        const sound = document.getElementById(props.keyTrigger);
        sound.volume = props.volume/100
        sound.play();
        props.updateDisplay(props.id);
    }

    return (
        <div className = {props.type} id = {props.id} onClick = {playSound}>
            <audio className = "clip" id = {props.keyTrigger} src={props.url}/>
            {props.keyTrigger}</div>
    )

}

export default Drum;