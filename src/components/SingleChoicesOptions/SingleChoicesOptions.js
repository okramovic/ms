import React from 'react';
import {Button} from '../Button/Button';
import {AnswerOption} from '../AnswerOption/AnswerOption';

export const SingleChoicesOptions = ({answerOptions, onOptionsChange}) =>{

    const onAddOptionClick = ev =>{
        const newChoices = [...answerOptions, ""];
        onOptionsChange(newChoices);
        ev.preventDefault();
    };

    const onOptionTextChange = (ev, index) =>{
        const newChoices = [...answerOptions];
        newChoices[index] = ev.target.value;
        onOptionsChange(newChoices);
    };

    const onRemoveOptionClick = ev =>{
        ev.preventDefault();
        alert(`Sorry, it's currently not possible to remove an option.`);
    };

    return(
        <form className="singleChoiceOptions flex alignItemsCenter">
            <h4>Answers:</h4>
            <div className="allOptionsContainer">
                <ul>
                    { answerOptions && answerOptions.map((choice, i) =>
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