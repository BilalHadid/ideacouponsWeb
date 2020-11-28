import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
  BooleanInput,
  DateInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const BlogEdit = (props) => {
  return (
    <Edit title="Edit a User" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
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
        <span>OR</span>
        <TextInput source="image" title="images URL" />
        <RichTextInput source="description" />
        <DateInput source="timestamp" />

        <BooleanInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export default BlogEdit;
