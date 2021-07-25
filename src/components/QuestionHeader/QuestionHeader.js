import React from 'react'
import {Button} from '../Button/Button';
import {CloseIcon} from '../CloseIcon/CloseIcon';

export const QuestionHeader = ({id}) =>(
    <div className="width100percent flex justifyBetween alignItemsCenter">
        <div/>
        <span>Question #{(id + 1)}</span>
        <Button className={"deleteQuestionButton removeButton"} ariaLabel="Remove question">
            <CloseIcon />
        </Button>
    </div>
)