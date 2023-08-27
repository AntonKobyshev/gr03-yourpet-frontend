import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import Modal from '../../shared/components/ModalWindow/Modal';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import css from './ModalApproveActionDeletePet.module.css';

import { fetchDeleteUserPet } from '../../redux/auth/auth-operations';


const ModalApproveActionDeleteCard = ({ closeModal, _id, name }) => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    closeModal();
  };

  const handleConfirm = () => {
    dispatch(fetchDeleteUserPet(_id));
    closeModal();
  };

  return (
    <>
      <Modal className={css.modalApprove} closeModal={handleModalClose}>
        <div
          className={css.myСomponent}
        >
          <h2 className={css.titleDelete}>{"Delete Pet card?"}</h2>
          <p className={css.text}>
            {"Are you sure you want to delete"} {name}'s {"Pet card?"}
          </p>
          <div className={css.modalBtnContainer}>
            <button
              className={`${css.modalBtn} ${css.whiteBtn}`}
              onClick={handleModalClose}
            >
              {"Cancel"}
            </button>
            <button className={css.modalBtn} onClick={handleConfirm}>
              {"Yes"}
              <DeleteForeverOutlinedIcon
                sx={{ fontSize: 30 }}
                style={{ marginLeft: '5px' }}
              />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalApproveActionDeleteCard;
