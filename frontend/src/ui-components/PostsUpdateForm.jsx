/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Posts } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PostsUpdateForm(props) {
  const {
    id: idProp,
    posts: postsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    tag: "",
    title: "",
    text: "",
    image: "",
    lead: "",
    writer: "",
  };
  const [tag, setTag] = React.useState(initialValues.tag);
  const [title, setTitle] = React.useState(initialValues.title);
  const [text, setText] = React.useState(initialValues.text);
  const [image, setImage] = React.useState(initialValues.image);
  const [lead, setLead] = React.useState(initialValues.lead);
  const [writer, setWriter] = React.useState(initialValues.writer);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = postsRecord
      ? { ...initialValues, ...postsRecord }
      : initialValues;
    setTag(cleanValues.tag);
    setTitle(cleanValues.title);
    setText(cleanValues.text);
    setImage(cleanValues.image);
    setLead(cleanValues.lead);
    setWriter(cleanValues.writer);
    setErrors({});
  };
  const [postsRecord, setPostsRecord] = React.useState(postsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Posts, idProp)
        : postsModelProp;
      setPostsRecord(record);
    };
    queryData();
  }, [idProp, postsModelProp]);
  React.useEffect(resetStateValues, [postsRecord]);
  const validations = {
    tag: [],
    title: [{ type: "Required" }],
    text: [{ type: "Required" }],
    image: [],
    lead: [],
    writer: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          tag,
          title,
          text,
          image,
          lead,
          writer,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Posts.copyOf(postsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PostsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Tag"
        isRequired={false}
        isReadOnly={false}
        value={tag}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag: value,
              title,
              text,
              image,
              lead,
              writer,
            };
            const result = onChange(modelFields);
            value = result?.tag ?? value;
          }
          if (errors.tag?.hasError) {
            runValidationTasks("tag", value);
          }
          setTag(value);
        }}
        onBlur={() => runValidationTasks("tag", tag)}
        errorMessage={errors.tag?.errorMessage}
        hasError={errors.tag?.hasError}
        {...getOverrideProps(overrides, "tag")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              title: value,
              text,
              image,
              lead,
              writer,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Text"
        isRequired={true}
        isReadOnly={false}
        value={text}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              title,
              text: value,
              image,
              lead,
              writer,
            };
            const result = onChange(modelFields);
            value = result?.text ?? value;
          }
          if (errors.text?.hasError) {
            runValidationTasks("text", value);
          }
          setText(value);
        }}
        onBlur={() => runValidationTasks("text", text)}
        errorMessage={errors.text?.errorMessage}
        hasError={errors.text?.hasError}
        {...getOverrideProps(overrides, "text")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              title,
              text,
              image: value,
              lead,
              writer,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Lead"
        isRequired={false}
        isReadOnly={false}
        value={lead}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              title,
              text,
              image,
              lead: value,
              writer,
            };
            const result = onChange(modelFields);
            value = result?.lead ?? value;
          }
          if (errors.lead?.hasError) {
            runValidationTasks("lead", value);
          }
          setLead(value);
        }}
        onBlur={() => runValidationTasks("lead", lead)}
        errorMessage={errors.lead?.errorMessage}
        hasError={errors.lead?.hasError}
        {...getOverrideProps(overrides, "lead")}
      ></TextField>
      <TextField
        label="Writer"
        isRequired={true}
        isReadOnly={false}
        value={writer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tag,
              title,
              text,
              image,
              lead,
              writer: value,
            };
            const result = onChange(modelFields);
            value = result?.writer ?? value;
          }
          if (errors.writer?.hasError) {
            runValidationTasks("writer", value);
          }
          setWriter(value);
        }}
        onBlur={() => runValidationTasks("writer", writer)}
        errorMessage={errors.writer?.errorMessage}
        hasError={errors.writer?.hasError}
        {...getOverrideProps(overrides, "writer")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || postsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || postsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
