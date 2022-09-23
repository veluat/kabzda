import React from "react";
import App from "../../App";

type OnOffType = {
    colorButton: boolean
}


export const OnOff = (props: OnOffType) => {
    return (
        <>
            {props.colorButton && <ButtonOn colorButton/>}
            {!props.colorButton && <ButtonOff colorButton/>}

        </>
    )
}

const ButtonOn = (props: OnOffType) => {
    return (<div className='App'>
        <div className='buttonOn'><span>ON</span></div>
        <div className='buttonOff1'><span>OFF</span></div>
        <div className='buttonVoid'>
            <div className='buttonOnRound'></div>
        </div>
    </div>)
}

const ButtonOff = (props: OnOffType) => {
    return (<div className='App'>
        <div className='buttonOn1'><span>ON</span></div>
        <div className='buttonOff'><span>OFF</span></div>
        <div className='buttonVoid'>
            <div className='buttonOnRound1'></div>
        </div>
    </div>)
}