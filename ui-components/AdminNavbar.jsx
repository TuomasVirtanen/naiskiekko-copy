/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
// import { Button as ButtonCustom } from "./Button";
export default function AdminNavbar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1728px"
      height="122px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AdminNavbar")}
      {...rest}
    >
      <View
        width="1728px"
        height="122px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 141")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="80px"
        height="80px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="13.93%"
        bottom="20.49%"
        left="0.98%"
        right="94.39%"
        {...getOverrideProps(overrides, "Logo3712314")}
      >
        <View
          width="80px"
          height="80px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(229,229,229,1)"
          {...getOverrideProps(overrides, "Rectangle 84")}
        ></View>
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
          position="absolute"
          top="37.5%"
          bottom="37.5%"
          left="23.75%"
          right="25%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Logo"
          {...getOverrideProps(overrides, "Logo3712316")}
        ></Text>
      </View>
      <ButtonCustom
        display="flex"
        gap="4px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="33.61%"
        bottom="33.61%"
        left="86.98%"
        right="3.53%"
        borderRadius="5px"
        padding="10px 14px 10px 14px"
        backgroundColor="rgba(13,71,161,1)"
        property="Default"
        {...getOverrideProps(overrides, "Button")}
      ></ButtonCustom>
    </View>
  );
}
