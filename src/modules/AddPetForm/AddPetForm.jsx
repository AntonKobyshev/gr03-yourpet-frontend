import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import ChooseOption from './formChooseOption/ChooseOption';
import PersonalDetails from './formPersonalDetails/PersonalDetails';
import MoreInfo from './formMoreInfo/MoreInfo';
import {
  AddPetFormWrapper,
  PetFormTitle,
  StepsList,
  Step,
  Button,
  ButtonFilled,
  ButtonWrap,
} from './AddPetForm.styled';
import { Pets, West } from '@mui/icons-material';
import validationSchema from './validationSchema';

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
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const steps = ['Choose option', 'Personal details', 'More info'];

  const handleClickNext = e => {
    e.preventDefault();

    if (step === 2) {
      return;
    }
    setStep(step + 1);
  };

  const handleClickBack = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleCancel = e => {
    e.preventDefault();
    navigate(-1);
  };

  return (
   <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(step)}
      onSubmit={values => {
        console.log(values); // Ваші дані з форми
      }}
    >
      {({
        values,
        touched,
        errors,
        setFieldValue,
        validateField,
        setTouched,
      }) => (
        <AddPetFormWrapper
          step={step}
          category={values.category}
          autoComplete="off"
        >
          <PetFormTitle step={step} category={values.category}>
            {step === 0
              ? 'Add pet'
              : values.category === 'my-pet'
              ? 'Add pet'
              : values.category === 'sell'
              ? 'Add pet for sale'
              : values.category === 'lost-found'
              ? 'Add lost pet'
              : 'Add for free'}
          </PetFormTitle>
          <Form>
            <StepsList step={step}>
              {steps.map((stepName, index) => (
                <Step
                  key={stepName}
                  step={step}
                  index={index}
                  category={values.category}
                >
                  {stepName}
                </Step>
              ))}
            </StepsList>

            {step === 0 && (
              <ChooseOption category={values.category} values={values} />
            )}

            {step === 1 && (
              <PersonalDetails
                category={values.category}
                errors={errors}
                touched={touched}
              />
            )}

            {step === 2 && (
              <MoreInfo
                category={values.category}
                step={step}
                values={values}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />
            )}
            <ButtonWrap category={values.category} step={step}>
              {step === 2 ? (
                <ButtonFilled type="submit">
                  <span>Done</span>
                  <Pets
                    sx={{
                      width: 24,
                      height: 20,
                      color: 'white',
                      transform: 'rotate(25deg)',
                    }}
                  />
                </ButtonFilled>
              ) : (
                <ButtonFilled
                  type="button"
                  onClick={e => {
                    if (step === 0) {
                      setTouched({});
                      handleClickNext(e);
                    }
                    if (step === 1) {
                      validateField('name');
                      validateField('dateOfBirth');
                      validateField('breed');
                      validateField('title');
                      setTouched({
                        name: true,
                        dateOfBirth: true,
                        breed: true,
                        title: true,
                      });
                    }
                    if (
                      step === 1 &&
                      Object.keys(errors).length === 0 &&
                      Object.keys(touched).length !== 0
                    ) {
                      handleClickNext(e);
                    }
                  }}
                >
                  Next
                  {/* <span>Next</span> */}
                  <Pets
                    sx={{ width: 24, height: 24, transform: 'rotate(25deg)' }}
                  />
                </ButtonFilled>
              )}
              <Button
                type="button"
                onClick={step === 0 ? handleCancel : handleClickBack}
              >
                <West sx={{ width: 24, height: 24 }} />
                <span>{step === 0 ? 'Cancel' : 'Back'}</span>
              </Button>
            </ButtonWrap>
          </Form>
        </AddPetFormWrapper>
      )}
    </Formik>
  );
};

export default AddPetForm;