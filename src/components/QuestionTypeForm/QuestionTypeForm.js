export const QUESTION_TYPE_TEXT = "questionTypeText",
QUESTION_TYPE_SINGLE_CHOICE = "questionTypeSingleChoice";

export const QuestionTypeForm = ({onFormChange, qIndex, questionType})=>(
    
    <form className="formChooseQuestionType width80percent flex alignItemsCenter">
        <h4>Choose answer type:</h4>

        <input type="radio" value={QUESTION_TYPE_TEXT} onChange={onFormChange} 
            id={"inputText" + qIndex} checked={questionType === QUESTION_TYPE_TEXT}/>
        <label htmlFor={"inputText" + qIndex}>text</label>

        <input type="radio" value={QUESTION_TYPE_SINGLE_CHOICE} onChange={onFormChange} 
            id={"inputSingleChoice" + qIndex} checked={ questionType === QUESTION_TYPE_SINGLE_CHOICE}/>
        <label htmlFor={"inputSingleChoice" + qIndex}>single choice</label>
    </form>
)