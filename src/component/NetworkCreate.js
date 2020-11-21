import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const NetworkCreate = (props) => {
  return (
    <Create title="Create a Network" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="password" />
      </SimpleForm>
    </Create>
  );
};

export default NetworkCreate;
