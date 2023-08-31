import * as Yup from "yup";

const formSchemaValidations = (step) => {
  let schema;

  const commonValidation = (category) =>
    ["sell", "lost/found", "for-free"].includes(category);
  

  if (step === 0) {
    schema = Yup.object().shape({
      category: Yup.string()
        .oneOf(["my-pet", "sell", "lost/found", "for-free"])
        .required(),
    });
  }

  if (step === 1) {
    const commonFieldsValidation = Yup.object().shape({
      name: Yup.string()
        .required("Please enter name of your pet")
        .trim()
        .min(2, "Too Short!")
        .max(16, "Too Long!"),
      breed: Yup.string()
        .required("Please enter breed of your pet")
        .min(2, "Too Short!")
        .max(16, "Too Long!")
        .trim(),
      title: Yup.string().when("category", {
        is: commonValidation,
        then: () =>
          Yup.string().trim().required("Please enter the advertise title"),
      }),
    });

    schema = commonFieldsValidation.shape({
      dateOfBirth: Yup.string()
        .required("Please enter your pets date of birth")
        .matches(
          /^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/,
          "Invalid date format (dd.mm.yyyy)"
        )
        .test(
          "not-in-future",
          "Date should not exceed the current date",
          function (value) {
            const currentDate = new Date();
            const inputDate = new Date(
              value.substring(6),
              value.substring(3, 5) - 1,
              value.substring(0, 2)
            );
            return inputDate <= currentDate;
          }
        ),
    });
  }

  if (step === 2) {
    const commonFieldsValidation = Yup.object().shape({
      sex: Yup.string().when("category", {
        is: commonValidation,
        then: () =>
          Yup.string()
            .oneOf(["male", "female"])
            .required("Please choose the sex"),
      }),
      location: Yup.string().when("category", {
        is: commonValidation,
        then: () =>
          Yup.string()
            .trim()
            .required("Location is required, please enter your city"),
      }),
      price: Yup.number().when("category", {
        is: commonValidation,
        then: () =>
          Yup.number()
            .nullable()
            .positive("Price should be positive")
            .typeError("Please enter the price"),
      }),
      comments: Yup.string()
        .min(8, "Comments should be at least 8 characters")
        .max(120, "Comments should not exceed 120 characters")
        .required("Comments should be at least 8 characters")
        .trim(),

      image: Yup.mixed()
        .required("Please upload the photo of your pet")
        .test(
          "image",
          "Image size must be less then 3mb",
          (value) => value && value.size <= 3 * 1024 * 1024
        ),
    });

    schema = commonFieldsValidation;
  }
  return schema;
};

export default formSchemaValidations;
