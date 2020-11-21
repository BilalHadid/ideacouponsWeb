import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  BooleanField,
  ImageField,
  RichTextField,
  DateField,
  ReferenceField,
} from "react-admin";
import "../user.css";

const BlogList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ImageField source="image" title="images" className="thumbNail" />
        <TextField source="title" />
        <RichTextField source="description" />
        {/* <TextField source="created" /> */}
        <ReferenceField label="users" source="user" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <BooleanField source="status" />
        <DateField source="timestamp" />
        <EditButton basePath="/blog" />
        <DeleteButton basePath="/blog" />
      </Datagrid>
    </List>
  );
};

export default BlogList;
