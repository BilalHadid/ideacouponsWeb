import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ImageField,
  BooleanField,
  Filter,
  SearchInput,
  AutocompleteInput,
  ReferenceInput,
  TextInput,
} from "react-admin";
import "./user.css";
const MyFilter = (props) => (
  <Filter {...props}>
    {/* <ReferenceInput
      label="Search"
      source="title"
      reference="posts"
      sort={{ field: "title", order: "ASC" }}
      filterToQuery={(searchText) => ({ title: searchText })}
      allowEmpty={true}
      alwaysOn
    >
      <AutocompleteInput optionText="title" />
    </ReferenceInput> */}
    <TextInput label="Search" source="q" alwaysOn />
    <AutocompleteInput optionText="title" />
  </Filter>
);

const PostList = (props) => {
  return (
    <List
      {...props}
      filters={<MyFilter />}
      perPage={25}
      sort={{ field: "title", order: "DESC" }}
      // sort={{ field: "id", order: "DESC" }}
    >
      <Datagrid>
        <TextField source="id" />
        <ImageField source="image" title="images" className="thumbNail" />
        <TextField source="title" />
        <BooleanField source="status" />
        <EditButton basePath="/posts" label="Edit" />
        <DeleteButton basePath="/posts" label="Delete" />
      </Datagrid>
    </List>
  );
};

export default PostList;
