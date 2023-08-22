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



  return schema;
};

export default validationSchema;