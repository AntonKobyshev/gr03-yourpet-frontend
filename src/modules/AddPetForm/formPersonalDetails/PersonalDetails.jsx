import { Point, Input, PersonalDetailsBlock } from "./PersonalDetails.styled";

const PersonalDetails = ({ category, touched, errors }) => {
  return (
    <PersonalDetailsBlock category={category}>
      {category !== "my-pet" && (
        <Point>
          Title of add
          <Input
            type="text"
            name="title"
            placeholder="Dog in good hands"
            errors={touched.title && errors.title}
          />
          {touched.title && errors.title && <div>{errors.title}</div>}
        </Point>
      )}
      <Point>
        Name pet
        <Input
          type="text"
          name="name"
          placeholder="Cute dog"
          errors={touched.name && errors.name}
        />
        {touched.name && errors.name && <div>{errors.name}</div>}
      </Point>
      <Point>
        Date of birth
        <Input
          type="text"
          name="dateOfBirth"
          placeholder="dd.mm.yyyy"
          errors={touched.dateOfBirth && errors.dateOfBirth}
        />
        {touched.dateOfBirth && errors.dateOfBirth && (
          <div>{errors.dateOfBirth}</div>
        )}
      </Point>
      <Point>
        Breed
        <Input
          type="text"
          name="breed"
          placeholder="Type breed"
          errors={touched.breed && errors.breed}
        />
        {touched.breed && errors.breed && <div>{errors.breed}</div>}
      </Point>
    </PersonalDetailsBlock>
  );
};

export default PersonalDetails;
