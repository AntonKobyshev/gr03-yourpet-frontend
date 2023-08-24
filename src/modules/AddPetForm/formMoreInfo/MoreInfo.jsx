import React from 'react';
import { Field } from 'formik';
import { MoreInfoWrapper, AddLabel, PhotoWrap, CommentsLabel, Label, Input, TheSexWrapper, TextArea, FormFields, SexLabel, PhotoText, TheSexTitle } from './MoreInfo.styled';
import { Add, Male, Female } from '@mui/icons-material';

const MoreInfo = ({ setFieldValue, category, step, values, errors, touched }) => {
  const handleFileChange = e => {
    const file = e.target.files[0];
    setFieldValue('image', file || '');
  };

  const sexOptions = [
    { value: 'female', label: 'Female', color: '#F43F5E', icon: <Female sx={{ width: 24, height: 24 }} /> },
    { value: 'male', label: 'Male', color: '#54ADFF', icon: <Male sx={{ width: 24, height: 24, transform: 'rotate(-45deg)' }} /> },
  ];

  return (
    <MoreInfoWrapper step={step} category={category}>
      {category !== 'my-pet' && (
        <TheSexWrapper>
          <TheSexTitle>The sex</TheSexTitle>
          <div>
            {sexOptions.map(option => (
              <SexLabel key={option.value} checked={values.sex === option.value}>
                {option.icon}
                {option.label}
                <Field type="radio" name="sex" value={option.value} checked={values.sex === option.value} />
              </SexLabel>
            ))}
            <Field name="sex" component="div" />
          </div>
        </TheSexWrapper>
      )}

      <PhotoWrap step={step} category={category}>
        <PhotoText step={step} category={category}>
          {values.image ? 'Add photo' : 'Load the pet’s image: '}
        </PhotoText>
        <AddLabel>
          {values.image ? (
            <img src={URL.createObjectURL(values.image)} alt="pet" />
          ) : (
            <Add sx={{ fontSize: 50, color: '#54ADFF' }} />
          )}
          <input type="file" name="image" accept=".png, .jpg" onChange={handleFileChange} hidden />
          <Field name="image" component="div" />
        </AddLabel>
      </PhotoWrap>

      <FormFields>
        {category !== 'my-pet' && (
          <Label>
            Location
            <Input type="text" name="place" placeholder="Type location" errors={touched.place && errors.place} />
            <Field name="place" component="div" />
          </Label>
        )}

        {category === 'sell' && (
          <Label>
            Price
            <Input type="text" name="price" placeholder="Type price" errors={touched.price && errors.price} />
            <Field name="price" component="div" />
          </Label>
        )}

        <CommentsLabel>
          Comments
          <TextArea as="textarea" name="comments" placeholder="Type comment" category={category} step={step} errors={touched.comments && errors.comments} />
          <Field name="comments" component="div" />
        </CommentsLabel>
      </FormFields>
    </MoreInfoWrapper>
  );
};

export default MoreInfo;