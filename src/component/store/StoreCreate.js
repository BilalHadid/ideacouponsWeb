import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
  ImageField,
  RadioButtonGroupInput,
  DateInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { Card } from "@material-ui/core";
import RichTextInput from "ra-input-rich-text";
import "../user.css";

const StoreCreate = (props) => {
  return (
    <Create title="Create a Event" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="name" />
        <TextInput source="url" />
        <TextInput source="Tracking Link" />
        <TextInput source="metatitle" />
        <TextInput source="metaKeywords" />
        <TextInput source="metaDisc" />
        <RichTextInput source="Description" />
        <Card className="Rasdio">
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
            <SelectInput optionText="name" />
          </ReferenceInput>
        </Card>
        <DateInput source="leftTime" />
        {/* <ImageInput source="image" label="desc" accept="">
          <ImageField source="image" src="url" title="desc" />
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

        <BooleanInput source="featured" />
        <BooleanInput source="status" />
      </SimpleForm>
    </Create>
  );
};

export default StoreCreate;
