/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Websiteheader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="13px 37px 13px 37px"
      backgroundColor="rgba(13,71,161,1)"
      {...getOverrideProps(overrides, "Websiteheader")}
      {...rest}
    >
      <Text
        fontFamily="Montserrat"
        fontSize="20px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="24.3799991607666px"
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
        children="PAGE NAME"
        {...getOverrideProps(overrides, "PAGE NAME")}
      ></Text>
    </Flex>
  );
}
