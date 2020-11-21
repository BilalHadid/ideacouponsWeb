import React from "react";
import { List, Datagrid, TextField, BooleanField } from "react-admin";

const CommentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />

        <TextField source="comments" />
        <TextField source="title" />
        <TextField source="user" />
        <TextField source="repliedto" />
        <TextField source="comment" />
        <BooleanField source="status" />
        <BooleanField source="Action" />
      </Datagrid>
    </List>
  );
};

export default CommentList;
