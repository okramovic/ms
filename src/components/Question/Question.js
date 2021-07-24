import React, { useState, useEffect, useRef } from 'react';
import {QuestionHeader} from '../QuestionHeader/QuestionHeader';
import {QuestionTextInput} from '../QuestionTextInput/QuestionTextInput';
import {SingleChoicesOptions} from '../SingleChoicesOptions/SingleChoicesOptions';
import {QuestionTypeForm, QUESTION_TYPE_SINGLE_CHOICE} from '../QuestionTypeForm/QuestionTypeForm'

export const Question = ({questionData, qIndex, onQuestionUpdate}) => {
    
    const {questionType: qType, questionText: qText} = questionData;

    const [questionText, setQuestionText] = useState(qText);
    const [questionType, setQuestionType] = useState(qType);
    const [questionRows, setQuestionRows] = useState(1);
    const [answerOptions, setAnswerOptions] = useState([]);

    const qMainInputRef = useRef(null);

    useEffect(()=>{
        qMainInputRef.current && qMainInputRef.current.focus();
    }, []);

    const onQuestionTextChange = ev =>{
        const value = ev.target.value;
        setQuestionText(value);

        updateQuestionProp('questionText', value);

        // improve this
        const charsPerLine = 40;
        const linesFull = parseInt(value.length / charsPerLine );
        setQuestionRows( linesFull + 1 );
    };

    const onFormChange = ev =>{
        const newValue = ev.target.value;
        setQuestionType(newValue);
        updateQuestionProp('questionType', newValue);
    };

    const onOptionsChange = choices =>{
        setAnswerOptions(choices);
        updateQuestionProp('answerOptions', choices);
    };

    const updateQuestionProp = (prop, value)=>{
        if (!prop) return;

        const questionData = {
            id: qIndex,
            questionText,
            questionType,
            answerOptions: questionType === QUESTION_TYPE_SINGLE_CHOICE ? answerOptions : null
        };
        questionData[prop] = value;

        onQuestionUpdate(qIndex, questionData);
    };

    return (
        <div className="questionContainer" key={qIndex}>
            <QuestionHeader id={questionData.id}/>

            <QuestionTextInput qMainInputRef={qMainInputRef} 
                questionText={questionText} 
                onQuestionTextChange={onQuestionTextChange} 
                questionRows={questionRows}
            />

            <QuestionTypeForm qIndex={qIndex} 
                onFormChange={onFormChange} 
                questionType={questionType}
            />

            { questionType === QUESTION_TYPE_SINGLE_CHOICE &&
                <SingleChoicesOptions onOptionsChange={onOptionsChange}/>
            }
        </div>
    )
}
