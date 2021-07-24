import React, { useState } from 'react';
import {Button} from '../Button/Button';
import {AnswerOption} from '../AnswerOption/AnswerOption';

export const SingleChoicesOptions = ({onOptionsChange}) =>{

    const [choices, setChoices] = useState([""]);

    const onAddOptionClick = ev =>{
        setChoices([...choices, ""]);
        ev.preventDefault();
    };

    const onOptionTextChange = (ev, index)=>{
        const newValue = ev.target.value;
        const newChoices = [...choices];
        newChoices[index] = newValue;
        setChoices(newChoices);
        onOptionsChange(newChoices);
    };

    const onRemoveOptionClick = ev =>{
        ev.preventDefault();
        // to do
    };

    return(
        <form className="singleChoiceOptions flex alignItemsCenter">
            <h4>Answers:</h4>
            <div className="allOptionsContainer">
                <ul>
                    { choices.map((choice, i) =>
                        <AnswerOption key={i} choice={choice} index={i} 
                            onOptionTextChange={onOptionTextChange} onRemoveOptionClick={onRemoveOptionClick}
                        />
                    )}
                </ul>
                <Button onClick={onAddOptionClick} className={"buttonSecondary"} label={"Add option"} />
            </div>
        </form>
    )
}