import { useContext } from 'react';
import ModalContent from '../../components/ModalContent/ModalContent';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const data = useContext(ModalContext);  
  const {setElement} = data;

  const handleModal = () => {
    setElement(<ModalContent />);
  };

  return (
    <>
      <div className={styles.layout}>
        <h1>My TMDB</h1>
        <input type='text' placeholder='Search Movies...' onClick={handleModal} />
      </div>
      {children}
    </>
  );
};

export default Layout;