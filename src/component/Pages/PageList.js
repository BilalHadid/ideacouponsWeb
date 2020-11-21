import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";
const PageList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />

        <TextField source="title" />
        <TextField source="body" />
        <TextField source="footerWidget" />
        <EditButton basePath="/pages" />
        <DeleteButton basePath="/pages" />
      </Datagrid>
    </List>
  );
};

export default PageList;
