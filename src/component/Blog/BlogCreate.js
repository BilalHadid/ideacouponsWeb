import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  SelectInput,
  ImageField,
  DateInput,
  ReferenceInput,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";

const BlogCreate = (props) => {
  return (
    <Create title="Create a Forum & Categories" {...props}>
      <SimpleForm>
        <ReferenceInput label="users" source="user" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <SelectInput
          source="tag"
          choices={[{ id: "coupon", name: "Huge Discount" }]}
        />

        {/* <ImageInput source="image" label="desc" accept="image/*">
          <ImageField source="url" title="desc" />
        </ImageInput> */}
        <ImageInput
          source=""
          label="title"
          accept="image/png, image/jpg, image/jpeg"
          maxSize={5000000}
          placeholder={
            <p>
              Upload Image
              <span>*File size should not exceed 5MB</span>
            </p>
          }
        >
          <ImageField source="image" title="images" />
        </ImageInput>

        <RichTextInput source="description" />
        <DateInput source="timestamp" />

        <BooleanInput source="status" />
      </SimpleForm>
    </Create>
  );
};

export default BlogCreate;
