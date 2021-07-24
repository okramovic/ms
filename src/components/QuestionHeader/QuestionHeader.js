import React from 'react'
import {CloseIcon} from '../CloseIcon/CloseIcon';

export const QuestionHeader = ({id}) =>(
    <div className="width100percent flex justifyBetween">
        <div/>
        <span>Question #{(id + 1)}</span>
        <button className="deleteQuestionButton removeButton">
            <CloseIcon />
        </button>
    </div>
)