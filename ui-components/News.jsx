/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function News(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1120px"
      height="150px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      borderRadius="5px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "News")}
      {...rest}
    >
      <View
        width="1120px"
        height="150px"
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
        {...getOverrideProps(overrides, "Rectangle 80")}
      ></View>
      <Image
        width="22.92%"
        height="85.95%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="7.03%"
        bottom="7.03%"
        left="1.18%"
        right="75.9%"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Text
        fontFamily="Montserrat"
        fontSize="20px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="99px"
        height="24.32px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="69.19%"
        bottom="14.59%"
        left="26.52%"
        right="64.64%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="12.10.2022"
        {...getOverrideProps(overrides, "date")}
      ></Text>
      <Text
        fontFamily="Montserrat"
        fontSize="20px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="797px"
        height="54.32px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="17.84%"
        bottom="45.95%"
        left="26.52%"
        right="2.32%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        {...getOverrideProps(overrides, "Text")}
      ></Text>
    </View>
  );
}
