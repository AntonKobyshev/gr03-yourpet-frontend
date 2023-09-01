import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import ChooseOption from "./formChooseOption/ChooseOption";
import PersonalDetails from "./formPersonalDetails/PersonalDetails";
import MoreInfo from "./formMoreInfo/MoreInfo";
import {
  AddPetFormWrapper,
  PetFormTitle,
  StepsList,
  Step,
  Button,
  ButtonFilled,
  ButtonWrap,
} from "./AddPetForm.styled";
import { Pets, West } from "@mui/icons-material";
import formSchemaValidations from "./formSchemaValidations";
import { useDispatch } from "react-redux";
import { addPet, addNotice } from "../../redux/pets/pets-operations";
import Loader from "../../shared/components/Loader/Loader";
import * as toasty from "../../shared/toastify/toastify";

const initialValues = {
  category: "my-pet",
  name: "",
  dateOfBirth: "",
  breed: "",
  image: "",
  sex: "",
  location: "",
  price: "",
  comments: "",
  title: "",
};

export const AddPetForm = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const steps = ["Choose option", "Personal details", "More info"];
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickNext = (e) => {
    e.preventDefault();

    if (step === 2) {
      return;
    }
    setStep(step + 1);
  };

  const handleClickBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleAddPet = async (data) => {
    try {
      setIsAdding(true);
      setIsLoading(true);
      let formData = new FormData();

      if (data.category !== "my-pet") {
        formData.append("category", data.category);
      }

      formData.append("name", data.name);

      if (data.category !== "my-pet") {
        formData.append("date", data.dateOfBirth);
      } else {
        formData.append("birthday", data.dateOfBirth);
      }

      formData.append("breed", data.breed);
      if (data.category !== "my-pet") {
        formData.append("title", data.title);
      }

      formData.append("image", data.image);

      if (data.comments) {
        formData.append("comments", data.comments);
      }

      if (data.category === "my-pet") {
        await dispatch(addPet(formData));
        navigate("/user");
        toasty.toastSuccess("Your own pet successfully added");
      }

      formData.append("sex", data.sex);
      formData.append("location", data.place);

      if (data.category === "for-free") {
        await dispatch(addNotice(formData));
        navigate("/notices/for-free");
        toasty.toastSuccess(
          "The pet with in a good hands category successfully added"
        );
      }

      if (data.category === "lost/found") {
        await dispatch(addNotice(formData));
        navigate("/notices/lost-found");
        toasty.toastSuccess("The pet lost/found category successfully added");
      }

      formData.append("price", data.price);

      if (data.category === "sell") {
        await dispatch(addNotice(formData));
        navigate("/notices/sell");
        toasty.toastSuccess("The pet sell category successfully added");
      }
    } catch (e) {
      toasty.toastError(e.message);
    } finally {
      setIsAdding(false);
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchemaValidations(step)}
      onSubmit={handleAddPet}
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
              ? "Add pet"
              : values.category === "my-pet"
              ? "Add pet"
              : values.category === "sell"
              ? "Add pet for sale"
              : values.category === "lost/found"
              ? "Add lost pet"
              : "Add for free"}
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
                <>
                  {" "}
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <ButtonFilled type="submit" disabled={isLoading}>
                      {<span>Done</span>}
                      <Pets
                        sx={{
                          width: 24,
                          height: 20,
                          color: "white",
                          transform: "rotate(25deg)",
                        }}
                      />
                    </ButtonFilled>
                  )}
                </>
              ) : (
                <ButtonFilled
                  type="button"
                  onClick={(e) => {
                    if (step === 0) {
                      setTouched({});
                      handleClickNext(e);
                    }
                    if (step === 1) {
                      validateField("name");
                      validateField("dateOfBirth");
                      validateField("breed");
                      validateField("title");
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
                  <Pets
                    sx={{ width: 24, height: 24, transform: "rotate(25deg)" }}
                  />
                </ButtonFilled>
              )}
              <Button
                type="button"
                onClick={step === 0 ? handleCancel : handleClickBack}
              >
                <West sx={{ width: 24, height: 24 }} />
                <span>{step === 0 ? "Cancel" : "Back"}</span>
              </Button>
            </ButtonWrap>
          </Form>
        </AddPetFormWrapper>
      )}
    </Formik>
  );
};

export default AddPetForm;
