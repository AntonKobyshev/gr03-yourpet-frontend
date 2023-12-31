import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import CloseIcon from '@mui/icons-material/Close';

import css from "./modal-window.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, closeModal }) => {
  const close = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", close);

    return () => document.removeEventListener("keydown", close);
  }, [close]);

  return createPortal(
    <div className={css.overlay} onClick={close}>
      <div className={css.myСomponent}>
        <div className={css.modal}>
          <button className={css.btnClose} onClick={closeModal}>
             < CloseIcon
              sx={{
      fontSize: 30,
      color: '#54adff', 
      transition: 'color 0.3s', 
      '&:hover': {
        color: '#ffc107',
      },
    }}
  />
          </button>
          <div className={css.modalContent}>{children}</div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
