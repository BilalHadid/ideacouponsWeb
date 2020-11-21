import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const CountryCreate = (props) => {
  return (
    <Create title="Create a Forum & Categories" {...props}>
      <SimpleForm>
        <TextInput source="Name" />
      </SimpleForm>
    </Create>
  );
};

export default CountryCreate;
