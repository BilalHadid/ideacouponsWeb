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
        <span>OR</span>
        <TextInput source="image" label="URL IMAGE ENTER" />
      </SimpleForm>
    </Create>
  );
};

export default SliderCreate;
