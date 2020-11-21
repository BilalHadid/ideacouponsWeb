import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
const EventEdit = (props) => {
  return (
    <Edit title="Edit a Event" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="url" />
      </SimpleForm>
    </Edit>
  );
};

export default EventEdit;
