import React from "react";

import { cloneElement, useMemo } from "react";
import PropTypes from "prop-types";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  BooleanField,
  ImageField,
  DateField,
  RichTextField,
  Filter,
  SearchInput,
  TextInput,
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
  Button,
  sanitizeListRestProps,
} from "react-admin";
import IconEvent from "@material-ui/icons/Event";
import "./user.css";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="search" source="name" resettable alwaysOn />
  </Filter>
);

const ListActions = (props) => {
  const { className, exporter, filters, maxResults, ...rest } = props;
  const {
    currentSort,
    resource,
    displayedFilters,
    filterValues,
    hasCreate,
    basePath,
    selectedIds,
    showFilter,
    total,
  } = useListContext();
  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      {filters &&
        cloneElement(filters, {
          resource,
          showFilter,
          displayedFilters,
          filterValues,
          context: "button",
        })}
      <CreateButton basePath={basePath} />
      <ExportButton
        disabled={total === 0}
        resource={resource}
        sort={currentSort}
        filterValues={filterValues}
        maxResults={maxResults}
      />
      {/* Add your custom actions */}
      <Button
        onClick={() => {
          alert("Your custom action");
        }}
        label="Show calendar"
      >
        <IconEvent />
      </Button>
    </TopToolbar>
  );
};

const UserList = ({ permissions, ...props }) => {
  return (
    <List
      {...props}
      filters={<PostFilter />}
      sort={{ field: "name", order: "DESC" }}
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="mobile" />
        <TextField source="password" />
        <BooleanField source="administrator" />
        <ImageField source="image" title="images" className="thumbNailView" />
        <TextField source="gender" />
        <DateField source="birth" />
        <TextField source="your Website" />
        <RichTextField source="yourAddress" />
        <RichTextField source="Biography" />
        {permissions === "admin" ? (
          <EditButton basePath="/users" />
        ) : (
          <DeleteButton basePath="/users" />
        )}
      </Datagrid>
    </List>
  );
};

export default UserList;
