import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const EventCreate = (props) => {
  return (
    <Create title="Create a Event" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="url" />
      </SimpleForm>
    </Create>
  );
};

export default EventCreate;
