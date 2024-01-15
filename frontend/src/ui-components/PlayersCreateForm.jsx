/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Players } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PlayersCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstName: "",
    lastName: "",
    playerPhoto: "",
    playerNumber: "",
    playerTeam: "",
    playerPosition: "",
    playerShoots: "",
    birthYear: "",
    linkToEliteProspects: "",
    linkToTeamSite: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [playerPhoto, setPlayerPhoto] = React.useState(
    initialValues.playerPhoto
  );
  const [playerNumber, setPlayerNumber] = React.useState(
    initialValues.playerNumber
  );
  const [playerTeam, setPlayerTeam] = React.useState(initialValues.playerTeam);
  const [playerPosition, setPlayerPosition] = React.useState(
    initialValues.playerPosition
  );
  const [playerShoots, setPlayerShoots] = React.useState(
    initialValues.playerShoots
  );
  const [birthYear, setBirthYear] = React.useState(initialValues.birthYear);
  const [linkToEliteProspects, setLinkToEliteProspects] = React.useState(
    initialValues.linkToEliteProspects
  );
  const [linkToTeamSite, setLinkToTeamSite] = React.useState(
    initialValues.linkToTeamSite
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setPlayerPhoto(initialValues.playerPhoto);
    setPlayerNumber(initialValues.playerNumber);
    setPlayerTeam(initialValues.playerTeam);
    setPlayerPosition(initialValues.playerPosition);
    setPlayerShoots(initialValues.playerShoots);
    setBirthYear(initialValues.birthYear);
    setLinkToEliteProspects(initialValues.linkToEliteProspects);
    setLinkToTeamSite(initialValues.linkToTeamSite);
    setErrors({});
  };
  const validations = {
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    playerPhoto: [],
    playerNumber: [],
    playerTeam: [{ type: "Required" }],
    playerPosition: [],
    playerShoots: [],
    birthYear: [],
    linkToEliteProspects: [],
    linkToTeamSite: [],
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
          firstName,
          lastName,
          playerPhoto,
          playerNumber,
          playerTeam,
          playerPosition,
          playerShoots,
          birthYear,
          linkToEliteProspects,
          linkToTeamSite,
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
          await DataStore.save(new Players(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlayersCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              playerPhoto,
              playerNumber,
              playerTeam,
              playerPosition,
              playerShoots,
              birthYear,
              linkToEliteProspects,
              linkToTeamSite,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              playerPhoto,
              playerNumber,
              playerTeam,
              playerPosition,
              playerShoots,
              birthYear,
              linkToEliteProspects,
              linkToTeamSite,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Player photo"
        isRequired={false}
        isReadOnly={false}
        value={playerPhoto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              playerPhoto: value,
              playerNumber,
              playerTeam,
              playerPosition,
              playerShoots,
              birthYear,
              linkToEliteProspects,
              linkToTeamSite,
            };
            const result = onChange(modelFields);
            value = result?.playerPhoto ?? value;
          }
          if (errors.playerPhoto?.hasError) {
            runValidationTasks("playerPhoto", value);
          }
          setPlayerPhoto(value);
        }}
        onBlur={() => runValidationTasks("playerPhoto", playerPhoto)}
        errorMessage={errors.playerPhoto?.errorMessage}
        hasError={errors.playerPhoto?.hasError}
        {...getOverrideProps(overrides, "playerPhoto")}
      ></TextField>
      <TextField
        label="Player number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={playerNumber}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              playerPhoto,
              playerNumber: value,
              playerTeam,
              playerPosition,
              playerShoots,
              birthYear,
              linkToEliteProspects,
              linkToTeamSite,
            };
            const result = onChange(modelFields);
            value = result?.playerNumber ?? value;
          }
          if (errors.playerNumber?.hasError) {
            runValidationTasks("playerNumber", value);
          }
          setPlayerNumber(value);
        }}
        onBlur={() => runValidationTasks("playerNumber", playerNumber)}
        errorMessage={errors.playerNumber?.errorMessage}
        hasError={errors.playerNumber?.hasError}
        {...getOverrideProps(overrides, "playerNumber")}
      ></TextField>
      <TextField
        label="Player team"
        isRequired={true}
        isReadOnly={false}
        value={playerTeam}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              playerPhoto,
              playerNumber,
              playerTeam: value,
              playerPosition,
              playerShoots,
              birthYear,
              linkToEliteProspects,
              linkToTeamSite,
            };
            const result = onChange(modelFields);
            value = result?.playerTeam ?? value;
          }
          if (errors.playerTeam?.hasError) {
            runValidationTasks("playerTeam", value);
          }
          setPlayerTeam(value);
        }}
        onBlur={() => runValidationTasks("playerTeam", playerTeam)}
        errorMessage={errors.playerTeam?.errorMessage}
        hasError={errors.playerTeam?.hasError}
        {...getOverrideProps(overrides, "playerTeam")}
      ></TextField>
      <TextField
        label="Player position"
        isRequired={false}
        isReadOnly={false}
        value={playerPosition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              playerPhoto,
              playerNumber,
              playerTeam,
              playerPosition: value,
              playerShoots,
              birthYear,
              linkToEliteProspects,
              linkToTeamSite,
            };
            const result = onChange(modelFields);
            value = result?.playerPosition ?? value;
          }
          if (errors.playerPosition?.hasError) {
            runValidationTasks("playerPosition", value);
          }
          setPlayerPosition(value);
        }}
        onBlur={() => runValidationTasks("playerPosition", playerPosition)}
        errorMessage={errors.playerPosition?.errorMessage}
        hasError={errors.playerPosition?.hasError}
        {...getOverrideProps(overrides, "playerPosition")}
      ></TextField>
      <TextField
        label="Player shoots"
        isRequired={false}
        isReadOnly={false}
        value={playerShoots}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              playerPhoto,
              playerNumber,
              playerTeam,
              playerPosition,
              playerShoots: value,
              birthYear,
              linkToEliteProspects,
              linkToTeamSite,
            };
            const result = onChange(modelFields);
            value = result?.playerShoots ?? value;
          }
          if (errors.playerShoots?.hasError) {
            runValidationTasks("playerShoots", value);
          }
          setPlayerShoots(value);
        }}
        onBlur={() => runValidationTasks("playerShoots", playerShoots)}
        errorMessage={errors.playerShoots?.errorMessage}
        hasError={errors.playerShoots?.hasError}
        {...getOverrideProps(overrides, "playerShoots")}
      ></TextField>
      <TextField
        label="Birth year"
        isRequired={false}
        isReadOnly={false}
        value={birthYear}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              playerPhoto,
              playerNumber,
              playerTeam,
              playerPosition,
              playerShoots,
              birthYear: value,
              linkToEliteProspects,
              linkToTeamSite,
            };
            const result = onChange(modelFields);
            value = result?.birthYear ?? value;
          }
          if (errors.birthYear?.hasError) {
            runValidationTasks("birthYear", value);
          }
          setBirthYear(value);
        }}
        onBlur={() => runValidationTasks("birthYear", birthYear)}
        errorMessage={errors.birthYear?.errorMessage}
        hasError={errors.birthYear?.hasError}
        {...getOverrideProps(overrides, "birthYear")}
      ></TextField>
      <TextField
        label="Link to elite prospects"
        isRequired={false}
        isReadOnly={false}
        value={linkToEliteProspects}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              playerPhoto,
              playerNumber,
              playerTeam,
              playerPosition,
              playerShoots,
              birthYear,
              linkToEliteProspects: value,
              linkToTeamSite,
            };
            const result = onChange(modelFields);
            value = result?.linkToEliteProspects ?? value;
          }
          if (errors.linkToEliteProspects?.hasError) {
            runValidationTasks("linkToEliteProspects", value);
          }
          setLinkToEliteProspects(value);
        }}
        onBlur={() =>
          runValidationTasks("linkToEliteProspects", linkToEliteProspects)
        }
        errorMessage={errors.linkToEliteProspects?.errorMessage}
        hasError={errors.linkToEliteProspects?.hasError}
        {...getOverrideProps(overrides, "linkToEliteProspects")}
      ></TextField>
      <TextField
        label="Link to team site"
        isRequired={false}
        isReadOnly={false}
        value={linkToTeamSite}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              playerPhoto,
              playerNumber,
              playerTeam,
              playerPosition,
              playerShoots,
              birthYear,
              linkToEliteProspects,
              linkToTeamSite: value,
            };
            const result = onChange(modelFields);
            value = result?.linkToTeamSite ?? value;
          }
          if (errors.linkToTeamSite?.hasError) {
            runValidationTasks("linkToTeamSite", value);
          }
          setLinkToTeamSite(value);
        }}
        onBlur={() => runValidationTasks("linkToTeamSite", linkToTeamSite)}
        errorMessage={errors.linkToTeamSite?.errorMessage}
        hasError={errors.linkToTeamSite?.hasError}
        {...getOverrideProps(overrides, "linkToTeamSite")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
