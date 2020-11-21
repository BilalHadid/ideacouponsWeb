import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";
const ForumEdit = (props) => {
  return (
    <Edit title="Edit a Forum & Categories" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
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
    </Edit>
  );
};

export default ForumEdit;
