import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  // ImageField,
  BooleanField,
  // UrlField,
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
const StoreList = (props) => {
  return (
    <List {...props} filters={<PostFilter />}>
      <Datagrid>
        <TextField source="id" label="#" />

        <TextField source="title" label="Title" />

        {/* <UrlField source="" /> */}
        <ReferenceField
          label="Networks"
          source="SelectNetwork"
          reference="networks"
        >
          <TextField source="name" label="Networks" />
        </ReferenceField>
        <TextField source="Address" />
        <BooleanField source="featured" />
        <BooleanField source="status" />
        <EditButton basePath="/store" />
        <DeleteButton basePath="/store" />
      </Datagrid>
    </List>
  );
};

export default StoreList;
