import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  BooleanField,
  Filter,
  SearchInput,
} from "react-admin";

import "../user.css";

const PostFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="title" resettable alwaysOn />
  </Filter>
);
const ForumList = (props) => {
  return (
    <List {...props} filters={<PostFilter />}>
      <Datagrid>
        <TextField source="id" />

        <TextField source="type" />
        <TextField source="title" />
        <TextField source="detail" />
        <BooleanField source="status" />
        <EditButton basePath="/forumcategory" />
        <DeleteButton basePath="/forumcategory" />
      </Datagrid>
    </List>
  );
};

export default ForumList;
