import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './Modal.module.css';

const Modal = ({children}) => {
  const contextData = useContext(ModalContext);
  const {setElement} = contextData;
  
  return (
    children &&
    <div className={styles.modal}>
      <span className={styles.layer} onClick={() => setElement(null)}></span>
      <div className={styles.search}>{children}</div>
    </div>
  )
};

export default Modal;