import {useState} from 'react';

export const QuestionTextInput = ({qMainInputRef, questionText, onQuestionTextChange}) =>{
    
    const [questionRows, setQuestionRows] = useState(1);

    const onChange = ev =>{
        const newValue = ev.target.value;
        onQuestionTextChange(newValue);

        // improve this for narrower screens
        const charsPerLine = 40;
        const linesFull = parseInt(newValue.length / charsPerLine);
        setQuestionRows(linesFull + 1);
    };

    return(
        <textarea className="questionText" 
            placeholder="Ask your question" ref={qMainInputRef}
            value={questionText} onChange={onChange}
            rows={questionRows}
        />
    )
}