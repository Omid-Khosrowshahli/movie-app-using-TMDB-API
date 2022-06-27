import React from 'react';
import { useState } from "react";
import Modal from "../components/Modal/Modal";

export const ModalContext = React.createContext();

const ModalContextProvider = ({children}) => {
    const [element, setElement] = useState();

    return (
      <ModalContext.Provider value={{element, setElement}}>
        {children}
        <Modal>
          {element}
        </Modal>
      </ModalContext.Provider>
    )
}

export default ModalContextProvider;
