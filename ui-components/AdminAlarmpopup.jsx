/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
// import { Button1581165 as ButtonCustom } from "./Button1581165";
export default function AdminAlarmpopup(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="560px"
      height="240px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="5px SOLID rgba(144,202,249,1)"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AdminAlarmpopup")}
      {...rest}
    >
      <View
        width="550px"
        height="230px"
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
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 68")}
      ></View>
      <Text
        fontFamily="Montserrat"
        fontSize="24px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="29.256000518798828px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22.17%"
        bottom="52.61%"
        left="22.18%"
        right="22.18%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Haluatko varmasti perua&#xA; tekemäsi muutokset?"
        {...getOverrideProps(
          overrides,
          "Haluatko varmasti perua tekem\u00E4si muutokset?"
        )}
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
        top="57.68%"
        bottom="19.71%"
        left="29.38%"
        right="56.08%"
        borderRadius="5px"
        padding="10px 14px 10px 14px"
        backgroundColor="rgba(13,71,161,1)"
        property="Default"
        {...getOverrideProps(overrides, "Button1581165")}
      ></ButtonCustom>
      <ButtonCustom
        display="flex"
        gap="4px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="57.68%"
        bottom="19.71%"
        left="50.14%"
        right="28.77%"
        borderRadius="5px"
        padding="10px 14px 10px 14px"
        backgroundColor="rgba(13,71,161,1)"
        property="Default"
        {...getOverrideProps(overrides, "Button1581188")}
      ></ButtonCustom>
    </View>
  );
}
