/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Button(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property: "Alarm" },
      overrides: {
        "Icons/Backarrow": {},
        "BUTTON EXAMPLE TEXT": {},
        Button: { backgroundColor: "rgba(208,20,20,1)" },
      },
    },
    {
      variantValues: { property: "Default" },
      overrides: {
        "Icons/Backarrow": {},
        "BUTTON EXAMPLE TEXT": {},
        Button: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="4px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="5px"
      padding="10px 14px 10px 14px"
      backgroundColor="rgba(13,71,161,1)"
      display="flex"
      {...getOverrideProps(overrides, "Button")}
      {...rest}
    >
      <View
        width="32px"
        height="32px"
        {...getOverrideProps(overrides, "Icons/Backarrow")}
      ></View>
      <Text
        fontFamily="Montserrat"
        fontSize="16px"
        fontWeight="500"
        color="rgba(229,229,229,1)"
        lineHeight="19.503999710083008px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="BUTTON EXAMPLE TEXT"
        {...getOverrideProps(overrides, "BUTTON EXAMPLE TEXT")}
      ></Text>
    </Flex>
  );
}
