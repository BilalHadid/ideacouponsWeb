import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";
const ForumCreate = (props) => {
  return (
    <Create title="Create a Forum & Categories" {...props}>
      <SimpleForm>
        <SelectInput
          source="type"
          choices={[
            { id: "coupon", name: "Coupon" },
            { id: "Deal", name: "Deal" },
            { id: "Discussion", name: "Discussion" },
          ]}
        />
        <TextInput source="title" />
        <TextInput source="detail" />
        <BooleanInput source="status" />
      </SimpleForm>
    </Create>
  );
};

export default ForumCreate;
