import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  DeleteButton,
} from "react-admin";
import "../user.css";
const HomeList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />

        <TextField source="BannerName" />
        <TextField source="BannerHeding" />
        <TextField source="BannerSubheading" />
        <ImageField source="image" title="images" className="thumbNail" />

        <DeleteButton basePath="/homebanner" />
      </Datagrid>
    </List>
  );
};

export default HomeList;
