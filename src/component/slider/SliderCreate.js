import React from "react";
import {
  Create,
  SimpleForm,
  ImageInput,
  ImageField,
  TextInput,
} from "react-admin";
const SliderCreate = (props) => {
  return (
    <Create title="Create a Event" {...props}>
      <SimpleForm>
        <ImageInput source="image" label="desc" accept="">
          <ImageField source="image" src="url" title="desc" />
        </ImageInput>
        <TextInput source="url" />
      </SimpleForm>
    </Create>
  );
};

export default SliderCreate;
