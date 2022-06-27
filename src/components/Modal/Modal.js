import styles from './Modal.module.css';

const Modal = ({children}) => {
  return (
    children &&
    <div className={styles.modal}>
      <span className={styles.layer}></span>
      <div className={styles.search}>{children}</div>
    </div>
  )
};

export default Modal;