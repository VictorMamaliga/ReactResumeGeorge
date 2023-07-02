import { useContext } from 'react';

import styles from './projectPreview.module.scss';
import { ModalDataDispatchContext } from '../../contexts/ModalDataContext';
import { viewType } from '../../helpers';

const ProfilPreview = ({ card, onToggleModal }) => {
  const dispatch = useContext(ModalDataDispatchContext);

  const handleCardView = () => {
    dispatch({
      type: viewType,
      data: card,
    })

    onToggleModal()
  }

  return (
    <div className={styles.card} onClick={handleCardView}>
      <img src={card.imgURL} /> 
    </div>
  );
};
  

export default ProfilPreview;
