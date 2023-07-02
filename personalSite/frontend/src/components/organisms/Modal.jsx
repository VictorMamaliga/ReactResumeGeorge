import styles from './Modal.module.scss';

const Modal = ({ isOpen, apiResponseStatus, children, onToggleModal }) => {
    return isOpen && (
        <div className={styles.modal}>
            <div className={styles.modalWrapper}>
                <button className={styles.modalClose} onClick={() => onToggleModal()}>X</button>
                {apiResponseStatus == 201 && (<h4 className='api-response-status'>Success</h4>)}
                {apiResponseStatus == 404 && (<h4 className='api-response-status'>Error</h4>)}
                {!apiResponseStatus && (children)}
            </div>
        </div>
    )
}

export default Modal;
