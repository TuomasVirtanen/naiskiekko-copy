/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Newstag(props) {
  const { overrides, ...rest } = props;
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
      padding="4px 14px 4px 14px"
      backgroundColor="rgba(144,202,249,1)"
      {...getOverrideProps(overrides, "Newstag")}
      {...rest}
    >
      <Text
        fontFamily="Montserrat"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
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
        children="#example tag"
        {...getOverrideProps(overrides, "#example tag")}
      ></Text>
    </Flex>
  );
}
