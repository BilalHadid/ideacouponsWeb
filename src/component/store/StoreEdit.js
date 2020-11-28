import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  ImageField,
  DateInput,
  RadioButtonGroupInput,
  ReferenceInput,
  // SelectInput,
} from "react-admin";
import { Card } from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";
const StoreEdit = (props) => {
  return (
    <Edit title="Edit a Event" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />

        <TextInput source="title" />
        <TextInput source="name" />
        <TextInput source="url" />
        <TextInput source="Tracking Link" />
        <TextInput source="metatitle" />
        <TextInput source="metaKeywords" />
        <TextInput source="metaDisc" />
        <RichTextInput source="Description" />
        <Card className="Rasdio" style={{ width: "20%" }}>
          {/* <RadioButtonGroupInput
            source="SelectNetwork"
            choices={[
              { id: "programming", name: "Paid On Result" },
              { id: "photography", name: "ClickWise" },
            ]}
          /> */}
          <ReferenceInput
            label="Networks"
            source="SelectNetwork"
            reference="networks"
          >
            <RadioButtonGroupInput optionText="name" />
          </ReferenceInput>
        </Card>
        <DateInput source="leftTime" />
        {/* <ImageInput source="image" label="desc" accept="">
          <ImageField source="image" src="url" title="desc" />
        </ImageInput> */}

        <TextInput source="image" label="Enter Url" />
        <span>OR</span>
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

        <BooleanInput source="featured" />
        <BooleanInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export default StoreEdit;
