import React from "react";
import { Create, SimpleForm, TextInput, SelectInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";
const validateUserCreation = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = ["The firstName is required"];
  }
  if (!values.body) {
    errors.body = ["Body is nor"];
  }
  if (!values.footerWidget) {
    errors.footerWidget = ["nikal"];
  }

  return errors;
};
const PageCreate = (props) => {
  return (
    <Create title="Create a Pages" {...props}>
      <SimpleForm validate={validateUserCreation}>
        <TextInput source="title" />
        <RichTextInput source="body" />
        <SelectInput
          source="footerWidget"
          choices={[
            { id: "1", name: "Widget1" },
            { id: "2", name: "Widget2" },
            { id: "3", name: "Widget3" },
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export default PageCreate;
