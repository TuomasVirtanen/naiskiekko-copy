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
export default function PlayersUpdateForm(props) {
  const {
    id: idProp,
    players: playersModelProp,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstName: "",
    lastName: "",
    playerTeam: "",
    playerNumber: "",
    playerPosition: "",
    playerPhoto: "",
    playerShoots: "",
    birthYear: "",
    linkToEliteProspects: "",
    linkToTeamSite: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [playerTeam, setPlayerTeam] = React.useState(initialValues.playerTeam);
  const [playerNumber, setPlayerNumber] = React.useState(
    initialValues.playerNumber
  );
  const [playerPosition, setPlayerPosition] = React.useState(
    initialValues.playerPosition
  );
  const [playerPhoto, setPlayerPhoto] = React.useState(
    initialValues.playerPhoto
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
    const cleanValues = playersRecord
      ? { ...initialValues, ...playersRecord }
      : initialValues;
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setPlayerTeam(cleanValues.playerTeam);
    setPlayerNumber(cleanValues.playerNumber);
    setPlayerPosition(cleanValues.playerPosition);
    setPlayerPhoto(cleanValues.playerPhoto);
    setPlayerShoots(cleanValues.playerShoots);
    setBirthYear(cleanValues.birthYear);
    setLinkToEliteProspects(cleanValues.linkToEliteProspects);
    setLinkToTeamSite(cleanValues.linkToTeamSite);
    setErrors({});
  };
  const [playersRecord, setPlayersRecord] = React.useState(playersModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Players, idProp)
        : playersModelProp;
      setPlayersRecord(record);
    };
    queryData();
  }, [idProp, playersModelProp]);
  React.useEffect(resetStateValues, [playersRecord]);
  const validations = {
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    playerTeam: [{ type: "Required" }],
    playerNumber: [],
    playerPosition: [],
    playerPhoto: [],
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
          playerTeam,
          playerNumber,
          playerPosition,
          playerPhoto,
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
          await DataStore.save(
            Players.copyOf(playersRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PlayersUpdateForm")}
      {...rest}
    >
      <TextField
        label="Etunimi"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              playerTeam,
              playerNumber,
              playerPosition,
              playerPhoto,
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
        label="Sukunimi"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              playerTeam,
              playerNumber,
              playerPosition,
              playerPhoto,
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
        label="Tiimi"
        isRequired={true}
        isReadOnly={false}
        value={playerTeam}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              playerTeam: value,
              playerNumber,
              playerPosition,
              playerPhoto,
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
        label="Pelinumero"
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
              playerTeam,
              playerNumber: value,
              playerPosition,
              playerPhoto,
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
        label="Pelipaikka"
        isRequired={false}
        isReadOnly={false}
        value={playerPosition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              playerTeam,
              playerNumber,
              playerPosition: value,
              playerPhoto,
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
        label="Kuva"
        isRequired={false}
        isReadOnly={false}
        value={playerPhoto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              playerTeam,
              playerNumber,
              playerPosition,
              playerPhoto: value,
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
              playerTeam,
              playerNumber,
              playerPosition,
              playerPhoto,
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
              playerTeam,
              playerNumber,
              playerPosition,
              playerPhoto,
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
              playerTeam,
              playerNumber,
              playerPosition,
              playerPhoto,
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
              playerTeam,
              playerNumber,
              playerPosition,
              playerPhoto,
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
          children="Palauta"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || playersModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Peruuta"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Valmis"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || playersModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
