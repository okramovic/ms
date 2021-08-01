import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import FocusTrap from 'focus-trap-react'
import {Button} from '../Button/Button';
import {CloseIcon} from '../CloseIcon/CloseIcon';
import styles from './Popup.module.css';

export const Popup = ({onTogglePopup, formData}) =>{

    useEffect(()=>{
        const onKeyDown = ev =>{
            if (ev.key === 'Escape') onTogglePopup();
        }

        window.addEventListener('keydown', onKeyDown);
        
        return ()=>{
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [onTogglePopup]);

    return createPortal(
        <FocusTrap>
            <aside id="popup" className={styles.popupContainer} aria-modal="true" role="dialog" tabIndex="-1">
                <div className="positionRelative width100percent">
                    <Button className={"removeButton " + styles.closeButton }
                            ariaLabel="Close Popup"
                            onClick={onTogglePopup}>
                        <CloseIcon/>
                    </Button>
                </div>
                <h2>{formData.name}</h2>
                <div>
                    <Button label="Close" className="buttonLarge marginLeftRight005rem" onClick={onTogglePopup}/>
                    <Button 
                        label="Take Survey"
                        className="buttonLarge marginLeftRight005rem" 
                        onClick={()=>alert('Sorry, it is currently not possible to take surveys.')} 
                    />
                </div>
            </aside>
        </FocusTrap>,
        document.body
    )
}