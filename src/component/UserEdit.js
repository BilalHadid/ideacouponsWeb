import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
  BooleanInput,
  DateInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const UserEdit = (props) => {
  return (
    <Edit title="Edit a User" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="mobile" />
        <TextInput source="password" />
        <BooleanInput source="administrator" />
        {/* <ImageInput source="image" label="desc" accept="image/*">
          <ImageField source="url" title="desc" />
        </ImageInput> */}
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
        <TextInput source="gender" />
        <DateInput source="birth" />
        <TextInput source="your Website" />
        <RichTextInput source="yourAddress" />
        <RichTextInput source="Biography" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
