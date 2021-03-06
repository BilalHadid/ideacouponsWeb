import React from "react";
import { List, Datagrid, TextField, BooleanField } from "react-admin";
const FaqList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />

        <TextField source="Category" />
        <TextField source="Question" />
        <TextField source="Answer" />

        <BooleanField source="Action" />
      </Datagrid>
    </List>
  );
};

export default FaqList;
