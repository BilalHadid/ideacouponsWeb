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
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceField,
} from "react-admin";

import "../user.css";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="id" alwaysOn />
    <ReferenceInput label="User" source="title" reference="user" allowEmpty>
      <SelectInput optionText="user" />
    </ReferenceInput>
  </Filter>
);

const CouponList = (props) => {
  return (
    <List {...props} filters={<PostFilter />}>
      <Datagrid>
        <TextField source="id" />
        <ImageField source="image" label="images" className="thumbNail" />
        <TextField source="type" />
        <ReferenceField
          label="Forum & Category"
          source="ForumCategory"
          reference="forumcategory"
          link={false}
        >
          <TextField source="title" />
        </ReferenceField>
        {/* <TextField source="ForumCategory" /> */}
        <TextField source="title" />
        <ReferenceField
          label="store"
          source="store"
          reference="store"
          link={false}
        >
          <TextField source="title" />
        </ReferenceField>
        <ReferenceField
          label="Category"
          source="category"
          reference="posts"
          link={false}
        >
          <TextField source="title" />
        </ReferenceField>
        <ReferenceField
          label="users"
          source="user"
          reference="users"
          link={false}
        >
          <TextField source="name" />
        </ReferenceField>
        <BooleanField source="fetured" />
        <BooleanField source="Verified" />
        <BooleanField source="status" />
        <EditButton basePath="/CouponDeal" />
        <DeleteButton basePath="/CouponDeal" />
      </Datagrid>
    </List>
  );
};

export default CouponList;
