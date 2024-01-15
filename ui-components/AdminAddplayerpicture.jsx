/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
// import { Button as ButtonCustom } from "./Button";
export default function AdminAddplayerpicture(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="184px"
      height="273px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AdminAddplayerpicture")}
      {...rest}
    >
      <Icon
        width="180px"
        height="200px"
        viewBox={{ minX: 0, minY: 0, width: 180, height: 200 }}
        paths={[
          {
            d: "M0 5C0 2.23857 2.23858 0 5 0L175 0C177.761 0 180 2.23858 180 5L180 195C180 197.761 177.761 200 175 200L5 200C2.23858 200 0 197.761 0 195L0 5Z",
            fill: "rgba(215,215,215,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8.42%"
        bottom="18.32%"
        left="1.09%"
        right="1.09%"
        {...getOverrideProps(overrides, "Rectangle 140")}
      ></Icon>
      <Text
        fontFamily="Roboto"
        fontSize="15px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="17.578125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="93.41%"
        left="5.98%"
        right="43.48%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Pelaajan kuva"
        {...getOverrideProps(overrides, "Pelaajan kuva")}
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
        top="85.35%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="5px"
        padding="10px 14px 10px 14px"
        backgroundColor="rgba(13,71,161,1)"
        property="Default"
        {...getOverrideProps(overrides, "Button")}
      ></ButtonCustom>
      <View
        width="32px"
        height="32px"
        {...getOverrideProps(overrides, "Icons/Camera")}
      ></View>
    </View>
  );
}
