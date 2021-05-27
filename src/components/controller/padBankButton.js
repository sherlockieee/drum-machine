import React from 'react'

export default function PadBankButton(props) {
    return (<button onClick = {props.changePadBank}>
        {props.currentPadBank === "Bank One"? "Bank One": "Bank Two"}
        </button>)
}

