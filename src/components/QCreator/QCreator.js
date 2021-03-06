import React, { useEffect, useState, useRef } from 'react';
import {Question} from '../Question/Question';
import {QUESTION_TYPE_TEXT} from '../QuestionTypeForm/QuestionTypeForm';
import {Button} from '../Button/Button';

export function QCreator({onCreateQCancel, onFormSave}){

    const [questionnaireName, setQuestionnaireName] = useState('');
    const [questions, setQuestions] = useState([]);

    const qNameInputRef = useRef(null);

    useEffect(()=>{
        qNameInputRef.current && qNameInputRef.current.focus();
    }, []);

    const onAddQuestionClick = ()=>{
        const newQuestions = [...questions];
        newQuestions.push({questionType: QUESTION_TYPE_TEXT});
        setQuestions(newQuestions);
    };

    const onQNameChange = ev =>{
        setQuestionnaireName(ev.target.value);
    };

    const onQuestionDataUpdate = (index, data)=>{
        if (typeof index === 'undefined') return;

        const newQuestions = [...questions]
        newQuestions[index] = data;
        setQuestions(newQuestions);
    };

    const onQuestionRemove = (index) =>{
        const newQuestions = [...questions].filter((_,i)=>i!==index);
        setQuestions(newQuestions);
    };

    const onFormSaveClick = ()=>{
        const newQuestionnaire = {
            name: questionnaireName,
            createdOn: new Date(),
            questions
        };
        onFormSave(newQuestionnaire);
    };

    return(
        <div className="QCreator">
            <div className="qHeaderSection width100percent flex flexDirectionColumn alignItemsCenter">
                <input type="text" placeholder="Give your questionnaire a name" 
                    className="width100percent"
                    value={questionnaireName} onChange={onQNameChange}
                    ref={qNameInputRef}
                />
            </div>

            {questions.map((qData, i) =>
                <Question key={i} qIndex={i}
                    questionType={qData.questionType} questionText={qData.questionText} 
                    answerOptions={qData.answerOptions}
                    onQuestionDataUpdate={onQuestionDataUpdate} onQuestionRemove={onQuestionRemove}
                />
            )}

            <Button  onClick={onAddQuestionClick} className={"addQuestionButton buttonSmall"} label={"Add question"}/>

            <div className="bottomButtonsContainer">
                <Button  onClick={onCreateQCancel} className={"buttonLarge"} label={"Cancel"}/>
                <Button  onClick={onFormSaveClick} className={"buttonLarge"} label={"Save"} disabled={questions.length < 1}/>
            </div>
        </div>
    )
}