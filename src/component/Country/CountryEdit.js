import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
const CountryEdit = (props) => {
  return (
    <Edit title="Edit a Forum & Categories" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />

        <TextInput source="Name" />
      </SimpleForm>
    </Edit>
  );
};

export default CountryEdit;
