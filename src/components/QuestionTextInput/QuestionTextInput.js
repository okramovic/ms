export const QuestionTextInput = ({qMainInputRef, questionText, onQuestionTextChange, questionRows}) =>(
    <textarea className="questionText" 
        placeholder="Ask your question" ref={qMainInputRef}
        value={questionText} onChange={onQuestionTextChange}
        rows={questionRows}
    />
)