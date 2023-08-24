import React from 'react';
import { Field } from 'formik';
import { MoreInfoWrapper, AddLabel, PhotoWrap, CommentsLabel, Label, Input, TheSexWrapper, TextArea, FormFields, SexLabel, PhotoText, TheSexTitle } from './MoreInfo.styled';
import { Add, Male, Female } from '@mui/icons-material';
import { Message } from './MoreInfo.styled';
const MoreInfo = ({
  setFieldValue,
  category,
  step,
  values,
  errors,
  touched,
}) => {
  const handleFileChange = e => {
    const file = e.target.files[0];

    if (!file) {
      setFieldValue('image', '');
      return;
    }
    setFieldValue('image', file);
  };

  return (
    <MoreInfoWrapper step={step} category={category}>
      <div>
        {category !== 'my-pet' && (
          <TheSexWrapper>
            <TheSexTitle>The sex</TheSexTitle>
            <div>
              <SexLabel checked={values.sex === 'female'}>
                <Female sx={{ color: values.sex === 'male' ? '#888888' : '#F43F5E' }} />
                Female
                <Field type="radio" name="sex" value="female" checked={values.sex === 'female'} />
              </SexLabel>
              <SexLabel checked={values.sex === 'male'}>
                <Male sx={{ color: values.sex === 'female' ? '#888888' : '#54ADFF', transform: 'rotate(-45deg)' }} />
                Male
                <Field type="radio" name="sex" value="male" checked={values.sex === 'male'} />
              </SexLabel>
            </div>
            <Field name="sex" component="div" />
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
            <input
              type="file"
              name="image"
              accept=".png, .jpg"
              multiple={false}
              onChange={handleFileChange}
              hidden
            />

            <Message name="image" component="div" />
          </AddLabel>
        </PhotoWrap>
      </div>

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
          <TextArea as="textarea" name="comments" placeholder="Type of pet" category={category} step={step} errors={touched.comments && errors.comments} />
          <Field name="comments" component="div" />
        </CommentsLabel>
      </FormFields>
    </MoreInfoWrapper>
  );
};

export default MoreInfo;