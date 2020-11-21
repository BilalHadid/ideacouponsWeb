import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  SelectInput,
  ImageField,
  DateInput,
  ReferenceInput,
  required,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";

// const required = (message = "Required") => (title) =>
//   title ? undefined : message;
// const validateUserCreation = (values) => {
//   const errors = {};
//   if (!values.title) {
//     errors.title = ["plz Enter"];
//   }

//   if (!values.type) {
//     errors.type = ["plz Enter"];
//   }
//   if (!values.couponscode) {
//     errors.couponscode = ["plz Fill couponscode"];
//   }
//   if (!values.dealStart) {
//     errors.dealStart = ["User is must plz Enter User"];
//   }
//   if (!values.dealexpire) {
//     errors.dealexpire = ["User is must plz Enter User"];
//   }
//   if (!values.ForumCategory) {
//     errors.ForumCategory = [" Plz Fill Forum & Categories"];
//   }
//   if (!values.user) {
//     errors.user = ["User is must plz Enter User"];
//   }

//   if (!values.store) {
//     errors.store = ["plz Fill "];
//   }
//   if (!values.category) {
//     errors.category = ["plz Fill"];
//   }
//   if (!values.image) {
//     errors.image = [" Plz Fill"];
//   }

//   if (!values.dealURL) {
//     errors.dealURL = ["plz Fill"];
//   }

//   return errors;
// };
const CouponCreate = (props) => {
  return (
    <Create title="Create a Forum & Categories" {...props}>
      <SimpleForm>
        <TextInput source="title" validate={required()} />
        <RichTextInput source="type" label="Description" />

        <TextInput source="couponscode" label="Coupons Code" />

        <DateInput
          source="dealStart"
          defaultValue={new Date()}
          label="Starting Date"
        />
        <DateInput source="dealexpire" label="Expire Date" />
        <ReferenceInput
          label="Forum & Category"
          source="ForumCategory"
          reference="forumcategory"
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        {/* <SelectInput source="user" choices={[{ id: "jhon", name: "Jhon" }]} /> */}
        <ReferenceInput label="users" source="user" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        {/* <SelectInput
          source="ForumCategory"
          choices={[{ id: "coupon", name: "General Coupon" }]}
        /> */}

        <ReferenceInput label="store" source="store" reference="store">
          <SelectInput multiple native optionText="title" />
        </ReferenceInput>

        {/* <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          onChange={handleChangeMultiple}
          inputProps={{
            id: 'select-multiple-native',
          }}
        > 
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select> */}
        {/* <SelectInput
          source="store"
          choices={[
            { id: "1", name: "BathroomWall T-shirt" },
            { id: "2", name: "Daisy Baby Shop" },
            { id: "3", name: "DB3 Online" },
            { id: "4", name: "Dead Good Undies" },
            { id: "5", name: "Envie4u" },
            { id: "6", name: "Mega T-shirt store" },
            { id: "7", name: "Nazz Collection" },
            { id: "8", name: "Opera Cambi" },
            { id: "9", name: "Rock n Romance" },
            { id: "10", name: "Snide London" },
          ]}
        /> */}
        {/* <SelectInput
          source="category"
          choices={[
            { id: "Apperal", name: "Gift" },
            { id: "Health", name: "Fashion" },
            { id: "3", name: "Accessories" },
          ]}
        /> */}
        <ReferenceInput label="Category" source="category" reference="posts">
          <SelectInput optionText="title" />
        </ReferenceInput>

        {/* <ImageInput source="image" label="title" accept="image/*"></ImageInput> */}
        <ImageInput
          source=""
          label="title"
          accept="image/png, image/jpg, image/jpeg"
          maxSize={5000000}
          placeholder={
            <p>
              Upload Image
              <span>*File size should not exceed 5MB</span>
            </p>
          }
        >
          <ImageField source="image" title="images" />
        </ImageInput>
        <TextInput source="dealURL" />
        <BooleanInput source="fetured" />
        <BooleanInput source="dealExclusive" />
        <BooleanInput source="Verified" />
        <BooleanInput source="status" />
      </SimpleForm>
    </Create>
  );
};

export default CouponCreate;
