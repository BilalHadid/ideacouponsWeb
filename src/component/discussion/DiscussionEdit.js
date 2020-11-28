import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
  ImageField,
  ImageInput,
  ReferenceInput,
} from "react-admin";
const DiscussionEdit = (props) => {
  return (
    <Edit title="Edit a Forum & Categories" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
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
    </Edit>
  );
};

export default DiscussionEdit;
