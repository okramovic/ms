import {useState} from 'react';
import {QCreator as QuestionnairesCreator} from './components/QCreator/QCreator';
import {QuestionnairesOverview} from './components/QuestionnairesOverview/QuestionnairesOverview';
import {AdminLoginSection, ADMIN_ROLE} from './components/AdminLoginSection/AdminLoginSection';
import './App.css';

// eslint-disable-next-line
const {log} = console;

const dummyQuestionnaires = [
    {
        "name": "shopping 1",
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
    
    return (
        <div className="App">
            <nav>
                <AdminLoginSection setUserRole={setAdminRole} role={role}/>
            </nav>
            <main>
                { role === ADMIN_ROLE && <section>
                        {isCreatingQuestionnaire ? 
                            <QuestionnairesCreator onCreateQCancel={ _ => setIsCreatingQuestionnaire(false)} onFormSave={onFormSave} />
                            :
                            <QuestionnairesOverview onCreateNewClick={onCreateNewClick} questionnaires={questionnaires} />
                        }
                    </section>
                }
            </main>
        </div>
    );
}

export default App;