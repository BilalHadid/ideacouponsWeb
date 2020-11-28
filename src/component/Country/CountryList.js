import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Filter,
  SearchInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const ProductFilter = (props) => {
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn />
      <ReferenceInput
        source="id"
        reference="country"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput source="Name" />
      </ReferenceInput>
    </Filter>
  );
};

const CountryList = (props) => {
  return (
    <List {...props} filters={<ProductFilter />}>
      <Datagrid>
        <TextField source="id" />

        <TextField source="Name" />

        <EditButton basePath="/country" />
        <DeleteButton basePath="/country" />
      </Datagrid>
    </List>
  );
};

export default CountryList;
