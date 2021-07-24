import React, {useRef, useEffect} from 'react';
import {CloseIcon} from '../CloseIcon/CloseIcon';
import {Button} from '../Button/Button';

export const AnswerOption = ({choice, index, onOptionTextChange, onRemoveOptionClick})=>{
    
    const textInputRef = useRef(null);

    useEffect(()=>{
        textInputRef.current && textInputRef.current.focus();
    },[])

    return(
        <li key={index} className="optionAnswerContainer width100percent flex alignItemsCenter">
            <div className="fakeRadio"/>
            <input type="text"
                ref={textInputRef}
                value={choice} placeholder={`Option ${index+1}`}
                onChange={ev => onOptionTextChange(ev, index) }
            />

            <Button onClick={onRemoveOptionClick} className={"removeButton"}>
                <CloseIcon/>
            </Button>
        </li>
    )
}