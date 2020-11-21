import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  SelectInput,
  ImageField,
  ReferenceInput,
} from "react-admin";
const DiscussionCreate = (props) => {
  return (
    <Create title="Create a Forum & Categories" {...props}>
      <SimpleForm>
        <ReferenceInput label="users" source="user" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <SelectInput source="type" choices={[{ id: "", name: "" }]} />

        <TextInput source="title" />
        <TextInput source="detail" />
        <ImageInput source="image" label="desc" accept="image/*">
          <ImageField source="url" title="desc" />
        </ImageInput>

        <BooleanInput source="fetured" />
        <BooleanInput source="Action" />
        <BooleanInput source="status" />
      </SimpleForm>
    </Create>
  );
};

export default DiscussionCreate;
