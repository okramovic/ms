import React, {useRef, useEffect} from 'react';
import {CloseIcon} from '../CloseIcon/CloseIcon';

export const AnswerOption = ({choice, index, onOptionTextChange, onRemoveOptionClick})=>{
    
    const textInputRef = useRef(null);

    useEffect(()=>{
        textInputRef.current && textInputRef.current.focus();
    },[])

    return(
        <li key={index} className="optionAnswerContainer width100percent flex alignItemsCenter">
            <div className="fakeRadio"/>
            <input type="text" value={choice} placeholder={`Option ${index+1}`} 
                ref={textInputRef}
                onChange={ev => onOptionTextChange(ev, index) }
            />
            <button className="removeButton" onClick={onRemoveOptionClick}>
                <CloseIcon/>
            </button>
        </li>
    )
}