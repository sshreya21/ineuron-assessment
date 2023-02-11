import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  ModalDiv,
  ModalHeader,
  ModalTitle,
  Button,
  ModalContent,
} from "./styledComponents/index.js";

const NewModal = ({ title, onCloseClick, ...props }) => {
  let element = document.createElement("div");
  element.classList.add("pie-modal");

  useEffect(() => {
    document.body.appendChild(element);
    return () => document.body.removeChild(element);
  }, [element]);

  return ReactDOM.createPortal(
    <ModalDiv>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <button onClick={onCloseClick} type="button">
          X
        </button>
      </ModalHeader>
      <ModalContent>{props.children}</ModalContent>
    </ModalDiv>,
    element
  );
};
export default NewModal;
