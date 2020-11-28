import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
} from "react-admin";
const SliderEdit = (props) => {
  return (
    <Edit title="Edit a Forum & Categories" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />

        <ImageInput source="image" label="desc" accept="">
          <ImageField source="image" src="url" title="desc" />
        </ImageInput>
        <TextInput source="image" label="Enter URL For SLider" />
      </SimpleForm>
    </Edit>
  );
};

export default SliderEdit;
