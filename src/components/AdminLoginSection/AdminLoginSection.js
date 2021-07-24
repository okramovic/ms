import {useState} from 'react'

export const ADMIN_PWD = 'moonshiner', 
ADMIN_ROLE = 'admin';

export const AdminLoginSection = ({role, setUserRole}) => {

    const [passwordValue, setPasswordValue] = useState('');

    const onAdminPasswordChange = ev =>{
        setPasswordValue(ev.target.value);
    };

    const onKeyDown = ev =>{
        if (ev.key === 'Enter'){
            onAdminLogin();
        }
    };

    const onAdminLogin = () =>{
        if (passwordValue === ADMIN_PWD){
            setUserRole(ADMIN_ROLE);
            setPasswordValue('');
        } else {
            setUserRole(null);
            alert('Wrong password, please try again.');
        }
    };

    const onAdminLogout = () =>{
        setUserRole(null);
    };

    return(
        <div className="width100percent">
            { role === ADMIN_ROLE ? <>
                    <div className="empty"></div>
                    <span>You're logged in as Admin</span>
                    <button onClick={onAdminLogout} className="adminLogoutButton">Logout</button>
                </>
                :
                <>
                    Admin login
                    <div className="flex">
                        <input type="password" placeholder="password" 
                            value={passwordValue} 
                            onChange={onAdminPasswordChange}
                            onKeyDown={onKeyDown}/>
                        <button onClick={onAdminLogin} className="loginButton">Login</button>
                    </div>
                </>
            }
        </div>
    )
}