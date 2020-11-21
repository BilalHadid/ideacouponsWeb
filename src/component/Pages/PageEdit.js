import React from "react";
import { Edit, SimpleForm, TextInput, SelectInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";
const PageEdit = (props) => {
  return (
    <Edit title="Edit a Forum & Categories" {...props}>
      <SimpleForm>
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
    </Edit>
  );
};

export default PageEdit;
