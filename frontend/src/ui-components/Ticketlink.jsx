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
export default function Ticketlink(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="452px"
      height="185px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Ticketlink")}
      {...rest}
    >
      <View
        width="452px"
        height="185px"
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
        {...getOverrideProps(overrides, "Rectangle 96")}
      ></View>
      <View
        width="452px"
        height="87px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="52.97%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(13,71,161,1)"
        {...getOverrideProps(overrides, "Rectangle 97")}
      ></View>
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
        position="absolute"
        top="17.84%"
        bottom="69.19%"
        left="32px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Osto liput otteluihin"
        {...getOverrideProps(overrides, "Osto liput otteluihin")}
      ></Text>
      <ButtonCustom
        display="flex"
        gap="4px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="59.46%"
        bottom="12.43%"
        left="32.3%"
        right="32.3%"
        borderRadius="5px"
        padding="10px 14px 10px 14px"
        backgroundColor="rgba(13,71,161,1)"
        property="Default"
        {...getOverrideProps(overrides, "Button")}
      ></ButtonCustom>
    </View>
  );
}
