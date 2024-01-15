/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Newscard(props) {
  const { posts, overrides, ...rest } = props;
  return (
    <View
      width="665px"
      height="485px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      borderRadius="5px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Newscard")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="665px"
        height="485px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Image19470")}
      >
        <Image
          width="100%"
          height="100%"
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
          objectFit="cover"
          src="http://loremflickr.com/640/480"
          {...getOverrideProps(overrides, "Image19128")}
        ></Image>
        <View
          width="665px"
          height="485px"
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
          backgroundImage="linear-gradient(-90deg, rgba(255,255,255,0), rgba(0,0,0,0.8))"
          {...getOverrideProps(overrides, "Linear gradient")}
        ></View>
      </View>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        borderRadius="5px"
        padding="4px 13px 4px 13px"
        backgroundColor="rgba(144,202,249,1)"
        {...getOverrideProps(overrides, "Header")}
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
          children="UUTISET"
          {...getOverrideProps(overrides, "UUTISET")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="445px"
        height="187px"
        justifyContent="flex-end"
        alignItems="center"
        position="absolute"
        top="52.16%"
        bottom="9.28%"
        left="calc(50% - 222.5px - 0px)"
        padding="0px 20px 0px 20px"
        {...getOverrideProps(overrides, "News text")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="20px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="415px"
          height="95px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={posts?.title}
          {...getOverrideProps(
            overrides,
            "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
          )}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="20px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="291.47px"
          height="28.05px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={posts?.updatedAt}
          {...getOverrideProps(overrides, "date (day.month.year)")}
        ></Text>
      </Flex>
    </View>
  );
}
