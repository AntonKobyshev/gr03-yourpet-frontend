import { FormCategory, Form } from './ChooseOption.styled';
import { Field } from 'formik';

const ChooseOption = ({ values }) => {
  return (
    <FormCategory role="group" aria-labelledby="category-radio-group">
      <Form checked={values.category ==='my-pet'}>
        <Field
          type="radio"
          value="my-pet"
          name="category"
          checked={values.category ==='my-pet'}
        />
        your pet
      </Form>

      <Form checked={values.category === 'sell'}>
        <Field
          type="radio"
          value="sell"
          name="category"
          checked={values.category === 'sell'}
        />
        sell
      </Form>

      <Form checked={values.category ==='lost-found'}>
        <Field
          type="radio"
          value="lost-found"
          name="category"
          checked={values.category ==='lost-found'}
        />
        lost/found
      </Form>
      <Form checked={values.category ==='for-free'}>
        <Field
          type="radio"
          value="for-free"
          name="category"
          checked={values.category === 'for-free'}
        />
        in good hands
      </Form>
    </FormCategory>
  );
};

export default ChooseOption;