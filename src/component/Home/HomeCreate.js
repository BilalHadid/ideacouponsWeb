import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  BooleanInput,
} from "react-admin";
const HomeCreate = (props) => {
  return (
    <Create title="Create a new User" {...props}>
      <SimpleForm>
        <TextInput source="BannerName" />
        <TextInput source="BannerHeding" />
        <TextInput source="BannerSubheading" />

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
        <BooleanInput source="overlay" />
        <BooleanInput source="overlay" />
      </SimpleForm>
    </Create>
  );
};

export default HomeCreate;
