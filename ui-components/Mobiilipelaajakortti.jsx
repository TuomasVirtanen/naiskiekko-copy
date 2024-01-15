/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Mobiilipelaajakortti(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="268px"
      height="392px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Mobiilipelaajakortti")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="256px"
        height="313px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="7px"
        left="6px"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Image")}
      >
        <Image
          width="256px"
          height="326px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "Player Image")}
        ></Image>
      </Flex>
      <View
        width="244px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="328px"
        left="12px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(13,71,161,1)"
          lineHeight="29.045454025268555px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Elisa Kalamäki"
          {...getOverrideProps(overrides, "Name2011154")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(144,202,249,1)"
          lineHeight="19.363636016845703px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="35px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Hyökkääjä"
          {...getOverrideProps(overrides, "Role")}
        ></Text>
        <Image
          width="25.39%"
          height="78.13%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="21.88%"
          left="72.66%"
          right="1.95%"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image 42")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(13,71,161,1)"
          lineHeight="29.045454025268555px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="42px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="30px"
          left="101px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="#17"
          {...getOverrideProps(overrides, "Name2011155")}
        ></Text>
      </View>
    </View>
  );
}
