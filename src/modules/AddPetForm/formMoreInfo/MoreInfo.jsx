import React from "react";
import { Field } from "formik";
import {
  MoreInfoBlock,
  AddPoint,
  PhotoBlock,
  PointComment,
  Point,
  Input,
  GenderBlock,
  TextArea,
  FormFields,
  GenderLabelBlock,
  PhotoText,
  GenderTitle,
} from "./MoreInfo.styled";
import { Add, Male, Female } from "@mui/icons-material";
import { Message } from "./MoreInfo.styled";
const MoreInfo = ({
  setFieldValue,
  category,
  step,
  values,
  errors,
  touched,
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setFieldValue("image", "");
      return;
    }
    setFieldValue("image", file);
  };

  return (
    <MoreInfoBlock step={step} category={category}>
      <div>
        {category !== "my-pet" && (
          <GenderBlock>
            <GenderTitle>The sex</GenderTitle>
            <div>
              <GenderLabelBlock checked={values.sex === "female"}>
                <Female
                  sx={{ color: values.sex === "male" ? "#888888" : "#F43F5E" }}
                />
                Female
                <Field
                  type="radio"
                  name="sex"
                  value="female"
                  checked={values.sex === "female"}
                />
              </GenderLabelBlock>
              <GenderLabelBlock checked={values.sex === "male"}>
                <Male
                  sx={{
                    color: values.sex === "female" ? "#888888" : "#54ADFF",
                    transform: "rotate(-45deg)",
                  }}
                />
                Male
                <Field
                  type="radio"
                  name="sex"
                  value="male"
                  checked={values.sex === "male"}
                />
              </GenderLabelBlock>
            </div>
            <Field name="sex" component="div" />
            <Message name="sex" component="div" />
          </GenderBlock>
        )}
        <PhotoBlock step={step} category={category}>
          <PhotoText step={step} category={category}>
            {values.image ? "Add photo" : "Load the pet’s image: "}
          </PhotoText>
          <AddPoint>
            {values.image ? (
              <img src={URL.createObjectURL(values.image)} alt="pet" />
            ) : (
              <Add sx={{ fontSize: 50, color: "#54ADFF" }} />
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
          </AddPoint>
        </PhotoBlock>
      </div>

      <FormFields>
        {category !== "my-pet" && (
          <Point>
            Location
            <Input
              type="text"
              name="location"
              placeholder="Kyiv"
              errors={touched.location && errors.location}
            />
            <Field name="location" component="div" />
            <Message name="location" component="div" />
          </Point>
        )}

        {category === "sell" && (
          <Point>
            Price
            <Input
              type="text"
              name="price"
              placeholder="100"
              errors={touched.price && errors.price}
            />
            <Field name="price" component="div" />
            <Message name="price" component="div" />
          </Point>
        )}

        <PointComment>
          Comments
          <TextArea
            as="textarea"
            name="comments"
            placeholder="enter your comments here"
            category={category}
            step={step}
            errors={touched.comments && errors.comments}
          />
          <Field name="comments" component="div" />
          <Message name="comments" component="div" />
        </PointComment>
      </FormFields>
    </MoreInfoBlock>
  );
};
export default MoreInfo;
