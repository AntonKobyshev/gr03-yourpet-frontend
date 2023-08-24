import * as Yup from 'yup';

const validationSchema = step => {
  let schema;

  if (step === 0) {
    schema = Yup.object().shape({
      category: Yup.string()
        .oneOf(['my-pet', 'sell', 'lost-found', 'for-free'])
        .required(),
    });
  }

  if (step === 1) {
    schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .trim()
        .min(2, 'Too Short!')
        .max(16, 'Too Long!'),
      dateOfBirth: Yup.string()
        .required('Date is required')
        .matches(
          /^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/,
          'Invalid date format (dd.mm.yyyy)'
        )
        .test(
          'not-in-future',
          'Date should not exceed the current date',
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

      breed: Yup.string()
        .required()
        .min(2, 'Too Short!')
        .max(16, 'Too Long!')
        .trim(),
      title: Yup.string().when('category', {
        is: category => ['sell', 'lost-found', 'for-free'].includes(category),
        then: () => Yup.string().trim().required('Title is required'),
      }),
    });
  }

  return schema;

};

export default validationSchema;