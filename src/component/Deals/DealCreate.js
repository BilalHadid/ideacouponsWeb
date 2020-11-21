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
const DealCreate = (props) => {
  return (
    <Create title="Create a Forum & Categories" {...props}>
      <SimpleForm>
        {/* <SelectInput source="user" choices={[{ id: "jhon", name: "Jhon" }]} /> */}
        <ReferenceInput label="users" source="user" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        {/* <SelectInput
      source="ForumCategory"
      choices={[{ id: "coupon", name: "General Coupon" }]}
    /> */}
        <ReferenceInput
          label="Forum & Category"
          source="ForumCategory"
          reference="forumcategory"
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <ReferenceInput label="store" source="store" reference="store">
          <SelectInput optionText="title" />
        </ReferenceInput>
        {/* <SelectInput
      source="store"
      choices={[
        { id: "1", name: "BathroomWall T-shirt" },
        { id: "2", name: "Daisy Baby Shop" },
        { id: "3", name: "DB3 Online" },
        { id: "4", name: "Dead Good Undies" },
        { id: "5", name: "Envie4u" },
        { id: "6", name: "Mega T-shirt store" },
        { id: "7", name: "Nazz Collection" },
        { id: "8", name: "Opera Cambi" },
        { id: "9", name: "Rock n Romance" },
        { id: "10", name: "Snide London" },
      ]}
    /> */}
        {/* <SelectInput
      source="category"
      choices={[
        { id: "Apperal", name: "Gift" },
        { id: "Health", name: "Fashion" },
        { id: "3", name: "Accessories" },
      ]}
    /> */}
        <ReferenceInput label="Category" source="category" reference="posts">
          <SelectInput optionText="title" />
        </ReferenceInput>
        <TextInput source="DealName" />
        <RichTextInput source="Description" />
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
        {/* <ImageInput
          source="data.pictures"
          label="Images"
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
         
        </ImageInput> */}
        <TextInput source="price" />
        <TextInput source="Discount" />
        <DateInput source="dealexpire" />
        <TextInput source="dealURL" label="Deal URL" />
        <BooleanInput source="fetured" />
        <BooleanInput source="dealExclusive" />
        <BooleanInput source="Verified" />
        <BooleanInput source="status" />
      </SimpleForm>
    </Create>
  );
};

export default DealCreate;
