import {Button} from '../Button/Button';
import {ADMIN_ROLE} from '../AdminLoginSection/AdminLoginSection';
const DEFAULT_Q_LABEL = 'Questionnaire #';

export const QuestionnairesOverview = ({role, onCreateNewClick, questionnaires}) =>(
    <>
        { role === ADMIN_ROLE && 
            <Button className={"createNewButton buttonLarge"} onClick={onCreateNewClick} label={"Create questionnaire"}/>
        }
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