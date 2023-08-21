import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import ChooseOption from './formChooseOption/ChooseOption';
import PersonalDetails from './formPersonalDetails/PersonalDetails';
import MoreInfo from './formMoreInfo/MoreInfo';
import { useDispatch, useSelector } from 'react-redux';


 const initialValues = {
  category: 'my-pet',
  name: '',
  dateOfBirth: '',
  breed: '',
  image: '',
  sex: '',
  place: '',
  price: '',
  comments: '',
  title: '',
};



export const AddPetForm = () => {
    // const [step, setStep] = useState(0);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const steps = ['Choose option', 'Personal details', 'More info'];
    // const isLoading = useSelector(selectIsLoading);
    // const isNoticeLoading = useSelector(selectIsNoticeLoading);
}

