import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const AddPetForm = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    const steps = ['Choose option', 'Personal details', 'More info'];
}