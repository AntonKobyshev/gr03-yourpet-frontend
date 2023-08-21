import { Label, Input, PersonalDetailsWrapper } from './PersonalDetails.styled';

const PersonalDetails = ({ category, touched, errors }) => {
  return (
    <PersonalDetailsWrapper category={category}>
      {category !== 'my-pet' && (
        <Label>
          Title of add
          <Input
            type="text"
            name="title"
            placeholder="Title of add"
            errors={touched.title && errors.title}
          />
          {touched.title && errors.title && <div>{errors.title}</div>}
        </Label>
      )}
      <Label>
        Name pet
        <Input
          type="text"
          name="name"
          placeholder="Type name pet"
          errors={touched.name && errors.name}
        />
        {touched.name && errors.name && <div>{errors.name}</div>}
      </Label>
      <Label>
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
      </Label>
      <Label>
        Breed
        <Input
          type="text"
          name="breed"
          placeholder="Type breed"
          errors={touched.breed && errors.breed}
        />
        {touched.breed && errors.breed && <div>{errors.breed}</div>}
      </Label>
    </PersonalDetailsWrapper>
  );
};




export default PersonalDetails;