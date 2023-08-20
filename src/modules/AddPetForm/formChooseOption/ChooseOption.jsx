import { CategoryWrapper, Label } from './ChooseOption.styled';
import { Field } from 'formik';

const ChooseOption = ({ values }) => {
  return (
    <CategoryWrapper role="group" aria-labelledby="category-radio-group">
      <Label checked={values.category === 'my-pet'}>
        <Field
          type="radio"
          value="my-pet"
          name="category"
          checked={values.category === 'my-pet'}
        />
        your pet
      </Label>

      <Label checked={values.category === 'sell'}>
        <Field
          type="radio"
          value="sell"
          name="category"
          checked={values.category === 'sell'}
        />
        sell
      </Label>

      <Label checked={values.category === 'lost-found'}>
        <Field
          type="radio"
          value="lost-found"
          name="category"
          checked={values.category === 'lost-found'}
        />
        lost/found
      </Label>
      <Label checked={values.category === 'for-free'}>
        <Field
          type="radio"
          value="for-free"
          name="category"
          checked={values.category === 'for-free'}
        />
        in good hands
      </Label>
    </CategoryWrapper>
  );
};

export default ChooseOption;