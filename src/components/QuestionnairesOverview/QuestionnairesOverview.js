import {Button} from '../Button/Button';
import {ADMIN_ROLE} from '../AdminLoginSection/AdminLoginSection';
import {Popup} from '../Popup/Popup';
import {useCallback, useState} from 'react';
const DEFAULT_Q_LABEL = 'Questionnaire #';

export const QuestionnairesOverview = ({role, onCreateNewClick, questionnaires}) =>{

    const [showPopup, setShowPopup] = useState(false);
    const [formShownIndex, setFormShownIndex] = useState(null);
    
    const onTogglePopup = useCallback(formIndex =>{
        setShowPopup(prev => !prev);
        setFormShownIndex(formIndex);
        document.body.classList.toggle('scrollLock');
    }, []);

    return(
        <>
            { role === ADMIN_ROLE && 
                <Button className={"createNewButton buttonLarge"} onClick={onCreateNewClick} label={"Create questionnaire"}/>
            }
            <ul className="questionnairesContainer width100percent flex">
                { 
                    (questionnaires && questionnaires.length) ? 
                        questionnaires.map((q,i) =>(<QuestionnaireThumbnail key={i} index={i} questionnaire={q} onThumbnailClick={onTogglePopup}/>))
                        : <span>No questionnaires created yet.</span>
                }
            </ul>
            { showPopup && <Popup onTogglePopup={onTogglePopup} formData={ questionnaires[formShownIndex] }/>}
        </>
)}

const QuestionnaireThumbnail = ({questionnaire, index, onThumbnailClick}) =>(
    <li className="questionnaireThumbnail" onClick={()=>onThumbnailClick(index)}>
        <h4>{questionnaire.name || ( DEFAULT_Q_LABEL + (index+1))}</h4>
        <h5>Created: {questionnaire.createdOn.toLocaleDateString()}</h5>
    </li>
)