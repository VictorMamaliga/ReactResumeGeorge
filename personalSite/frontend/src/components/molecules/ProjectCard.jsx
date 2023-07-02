import React, { useContext } from 'react';

import styles from './projectCard.module.scss';
import { ModalDataContext } from '../../contexts/ModalDataContext';

const ProjectCard = ({ onToggleModal, onSubmitForm }) => {
    const modalData = useContext(ModalDataContext);

        if (modalData?.requestType === 'delete' || modalData?.requestType === 'visibility') {
            return (
                <div>
                    <h4>Are you sure?</h4>
                    <button onClick={onSubmitForm}>Yes</button>
                    <button onClick={onToggleModal}>Cancel</button>
                </div>
            );
        }

        return modalData?.requestType === 'view' && (
            <a href={modalData?.data?.redirrect} target='blank'>
                <div className={styles.card}>
                    <div className={styles.cardWrapper}>
                        <img src={modalData?.data?.imgURL} />
                    </div>
                    <div className={styles.cardDetails}>
                        <h3>{modalData?.data?.name}</h3>
                        <div>
                            <h4>{modalData?.data?.description}</h4>
                        </div>
                    </div>
                </div>
            </a>
        );

}

export default ProjectCard;
