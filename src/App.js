import {useState} from 'react';
import {QCreator as QuestionnairesCreator} from './components/QCreator/QCreator';
import {QuestionnairesOverview} from './components/QuestionnairesOverview/QuestionnairesOverview';
import {AdminLoginSection, ADMIN_ROLE} from './components/AdminLoginSection/AdminLoginSection';
import './App.css';

const dummyQuestionnaires = [
    {
        "name": "Shopping 1",
        "createdOn": new Date("2021-07-24T08:46:34.863Z"),
        "questions": [
            {"questionText": "how was it","questionType":"questionTypeText","answerOptions":null}
        ]
    },
    {
        "name":"Customer satisfaction no. 1",
        "createdOn": new Date("2021-07-24T08:56:02.944Z"),
        "questions":[
            {"questionText":"How was your experience?","questionType":"questionTypeSingleChoice","answerOptions":["Very good","Good","Average"]},
            {"questionText":"What would you improve if you could?","questionType":"questionTypeText","answerOptions":null}
        ]
    }
];

function App() {

    const [role, setRole] = useState(ADMIN_ROLE); // null
    const [isCreatingQuestionnaire, setIsCreatingQuestionnaire] = useState(false);
    const [questionnaires, setQuestionnaires] = useState([...dummyQuestionnaires]);

    const setAdminRole = (role = null)=>{ 
        setRole(role);
    };
    
    const onCreateNewClick = ()=>{
        setIsCreatingQuestionnaire(prevValue => !prevValue);
    };

    const onFormSave = questionnaireData =>{
        /* {
            name: questionnaireName,
            date: new Date(),
            questions
        } */
        setQuestionnaires([...questionnaires, questionnaireData]);
        setIsCreatingQuestionnaire(false);
    };
    
    const qThumbnails = <QuestionnairesOverview role={role} onCreateNewClick={onCreateNewClick} questionnaires={questionnaires} />;

    return (
        <div className="App">
            <nav>
                <AdminLoginSection setUserRole={setAdminRole} role={role} />
            </nav>
            <main>
                { role === ADMIN_ROLE ? <section>
                        {
                            isCreatingQuestionnaire ? 
                                <QuestionnairesCreator onCreateQCancel={ _ => setIsCreatingQuestionnaire(false)} onFormSave={onFormSave} />
                                : qThumbnails
                        }
                    </section>
                    :
                    <section>
                        {qThumbnails}
                    </section>
                }
            </main>
        </div>
    );
}

export default App;