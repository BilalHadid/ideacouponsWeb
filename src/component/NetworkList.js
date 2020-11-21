import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Filter,
  SearchInput,
} from "react-admin";
const PostFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="name" alwaysOn />
  </Filter>
);
const NetworkList = (props) => {
  return (
    <List {...props} filters={<PostFilter />}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <TextField source="password" />
        <EditButton basePath="/networks" />
        <DeleteButton basePath="/networks" />
      </Datagrid>
    </List>
  );
};

export default NetworkList;
