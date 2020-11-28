import React from "react";
import { cloneElement } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Filter,
  SearchInput,
  TextInput,
  useListContext,
  TopToolbar,
  ExportButton,
  sanitizeListRestProps,
  CreateButton,
  SortButton,
  BooleanField,
} from "react-admin";
import "./user.css";
// import jsonExport from "jsonexport/dist";
// import PropTypes from "prop-types";
// import IconEvent from "@material-ui/icons/Event";
// import { Card, CardContent } from "@material-ui/core";

const ListActions = (props) => {
  const { className, exporter, filters, maxResults, ...rest } = props;
  const {
    currentSort,
    resource,
    displayedFilters,
    filterValues,
    basePath,
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
    </TopToolbar>
  );
};

const PostFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    <TextInput source="title" defaultValue="Title" />
    {/* <QuickFilter label="Title" source="title" defaultValue /> */}
  </Filter>
);
// const MyFilter = (props) => (
//   <Filter {...props}>
//     {/* <ReferenceInput
//       label="Search"
//       source="title"
//       reference="posts"
//       sort={{ field: "title", order: "ASC" }}
//       filterToQuery={(searchText) => ({ title: searchText })}
//       allowEmpty={true}
//       alwaysOn
//     >
//       <AutocompleteInput optionText="title" />
//     </ReferenceInput> */}
//     <TextInput label="Search" source="q" alwaysOn />
//     <AutocompleteInput optionText="title" />
//   </Filter>
// );

const PostList = (props) => {
  return (
    <List
      {...props}
      filters={<PostFilter />}
      title="Categories"
      sort={{ field: "id", order: "DESC" }}
      actions={<ListActions />}
      bulkActions={false}
    >
      <Datagrid rowClick="toggleSelection">
        <TextField source="id" />
        {/* <ImageField source="image" title="images" className="thumbNail" /> */}
        <TextField source="title" sortBy="ASC" />
        <TextField source="icon" />

        <BooleanField source="status" />
        <EditButton basePath="/posts" label="Edit" />
        <DeleteButton basePath="/posts" label="Delete" />
      </Datagrid>
    </List>
  );
};

export default PostList;
