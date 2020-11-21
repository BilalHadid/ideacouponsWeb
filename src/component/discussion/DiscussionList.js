import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  BooleanField,
  ImageField,
  Filter,
  SearchInput,
  ReferenceField,
} from "react-admin";

import "../user.css";

const PostFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="title" resettable alwaysOn />
  </Filter>
);
const DiscussionList = (props) => {
  return (
    <List {...props} filters={<PostFilter />}>
      <Datagrid>
        <TextField source="id" />
        <ImageField
          source="image"
          src="url"
          title="desc"
          className="thumbNail"
        />
        <TextField source="type" />
        <TextField source="title" />
        <TextField source="detail" />
        <ReferenceField label="users" source="user" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <BooleanField source="fetured" />
        <BooleanField source="Action" />
        <BooleanField source="status" />
        <EditButton basePath="/discussion" />
        <DeleteButton basePath="/discussion" />
      </Datagrid>
    </List>
  );
};

export default DiscussionList;
