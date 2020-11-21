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
    <SearchInput source="name" resettable alwaysOn />
  </Filter>
);

const EventList = (props) => {
  return (
    <List
      {...props}
      filters={<PostFilter />}
      filterDefaultValues={{ is_published: true }}
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="url" />

        <EditButton basePath="/events" />
        <DeleteButton basePath="/events" />
      </Datagrid>
    </List>
  );
};

export default EventList;
