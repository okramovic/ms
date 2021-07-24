const DEFAULT_Q_LABEL = 'Questionnaire #';

export const QuestionnairesOverview = ({onCreateNewClick, questionnaires}) =>(
    <>
        <button className="createNewButton" onClick={onCreateNewClick}>Create questionnaire</button>
        <ul className="questionnairesContainer width100percent flex">
            { 
                (questionnaires && questionnaires.length) ? 
                    questionnaires.map((q,i) =>(<QuestionnaireThumbnail key={i} index={i} questionnaire={q}/>))
                    : <span>No questionnaires created yet.</span>
            }
        </ul>
    </>
)

const QuestionnaireThumbnail = ({questionnaire, index}) =>(
    <li className="questionnaireThumbnail">
        <h4>{questionnaire.name || ( DEFAULT_Q_LABEL + (index+1))}</h4>
        <h5>Created: {questionnaire.createdOn.toLocaleDateString()}</h5>
    </li>
)