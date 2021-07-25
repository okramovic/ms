import React, { useState, useEffect, useRef } from 'react';
import {QuestionHeader} from '../QuestionHeader/QuestionHeader';
import {QuestionTextInput} from '../QuestionTextInput/QuestionTextInput';
import {SingleChoicesOptions} from '../SingleChoicesOptions/SingleChoicesOptions';
import {QuestionTypeForm, QUESTION_TYPE_SINGLE_CHOICE} from '../QuestionTypeForm/QuestionTypeForm'

export const Question = ({
    questionText, questionType, answerOptions,
    qIndex, onQuestionDataUpdate, onQuestionRemove
}) => {
    
    const [questionRows, setQuestionRows] = useState(1);
    const qMainInputRef = useRef(null);

    useEffect(()=>{
        qMainInputRef.current && qMainInputRef.current.focus();
    }, []);

    const onQuestionTextChange = ev =>{
        const value = ev.target.value;
        updateQuestionProp({'questionText': value});

        // improve this
        const charsPerLine = 40;
        const linesFull = parseInt(value.length / charsPerLine);
        setQuestionRows( linesFull + 1 );
    };

    const onQuestionTypeChange = ev =>{
        const newValue = ev.target.value;
        
        if (newValue === QUESTION_TYPE_SINGLE_CHOICE){
            updateQuestionProp({'questionType': newValue, 'answerOptions':[""]});
        } else updateQuestionProp({'questionType': newValue, 'answerOptions': null});
    };

    const onOptionsChange = choices =>{
        updateQuestionProp({'answerOptions': choices});
    };

    const updateQuestionProp = props =>{
        if (!props) return;

        const newQuestionData = {
            questionText,
            questionType,
            answerOptions: questionType === QUESTION_TYPE_SINGLE_CHOICE ? answerOptions : null
        };
        Object.keys(props).forEach( key =>{
            newQuestionData[key] = props[key];
        });

        onQuestionDataUpdate(qIndex, newQuestionData);
    };

    const onQuestionRemoveClick = () => {
        onQuestionRemove(qIndex);
    };

    return (
        <div className="questionContainer" key={qIndex}>
            <QuestionHeader id={qIndex} onClick={onQuestionRemoveClick}/>

            <QuestionTextInput qMainInputRef={qMainInputRef} 
                questionText={questionText} 
                onQuestionTextChange={onQuestionTextChange} 
                questionRows={questionRows}
            />

            <QuestionTypeForm qIndex={qIndex} 
                onFormChange={onQuestionTypeChange} 
                questionType={questionType}
            />

            { questionType === QUESTION_TYPE_SINGLE_CHOICE &&
                <SingleChoicesOptions onOptionsChange={onOptionsChange} answerOptions={answerOptions}/>
            }
        </div>
    )
}
