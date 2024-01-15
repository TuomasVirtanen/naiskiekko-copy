/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function MobileWebsiteheader(props) {
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
      padding="8px 30px 8px 30px"
      backgroundColor="rgba(13,71,161,1)"
      {...getOverrideProps(overrides, "MobileWebsiteheader")}
      {...rest}
    >
      <Text
        fontFamily="Montserrat"
        fontSize="14px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="17.06599998474121px"
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
