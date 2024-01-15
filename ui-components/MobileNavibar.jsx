/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function MobileNavibar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="393px"
      height="80px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MobileNavibar")}
      {...rest}
    >
      <View
        width="393px"
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
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(144,202,249,1)"
        {...getOverrideProps(overrides, "Rectangle 92")}
      ></View>
      <View
        width="48px"
        height="48px"
        {...getOverrideProps(overrides, "Icons/List icon")}
      ></View>
    </View>
  );
}
