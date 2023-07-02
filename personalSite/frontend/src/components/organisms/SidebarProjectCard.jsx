import { useContext } from 'react';
import Switch from "react-switch";

import styles from './sidebarProjectCard.module.scss';
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';
import deleteIcon from '../../assets/icons/trash.svg';
import editIcon from '../../assets/icons/edit.svg';
import { deleteType, editType, offColor, onColor, visibilityType } from '../../helpers';

export default function SidebarProjectCard({card, onToggleModal}) {
    const dispatch = useContext(ModalDataDispatchContext);

    const handleEditCard = () => {
        dispatch({
          type: editType,
          data: card,
        });
        
        onToggleModal();
    }
      
    const handleDeleteCard = () => {
        dispatch({
            type: deleteType,
            id: card.id,
        });

        onToggleModal();
    }
    
    const handleToggleVisibility = () => {
        dispatch({
            type: visibilityType,
            data: { id: card.id, isVisible: card.isVisible },
        });
        
        onToggleModal();
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={card.imgURL}/>
            </div>
            <div className={styles.cardDetails}>
                <div>
                <label>
                    <Switch onColor={onColor} offColor={offColor} handleDiameter={22} height={25} width={48} uncheckedIcon={false} checkedIcon={false} onChange={handleToggleVisibility} checked={card ? card.isVisible : null} />
                    <span>Visible</span>
                </label>
                </div>
                <div className={styles.cardActions}>
                    <div onClick={handleDeleteCard}><img className={styles.cardDelete} src={deleteIcon} /></div>
                    <div onClick={handleEditCard}><img className={styles.cardEdit} src={editIcon} /></div>
                </div>
                <h3>{card.name}</h3>
            </div>
        </div>
    );
}