/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Pelaajainfo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="621px"
      height="407px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Pelaajainfo")}
      {...rest}
    >
      <View
        width="621px"
        height="407px"
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
        backgroundColor="rgba(13,71,161,1)"
        {...getOverrideProps(overrides, "Rectangle 91")}
      ></View>
      <Flex
        gap="0"
        direction="column"
        width="318px"
        height="380px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="3.44%"
        bottom="3.19%"
        left="2.25%"
        right="46.54%"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Image")}
      >
        <Image
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "Player Image")}
        ></Image>
      </Flex>
      <Text
        fontFamily="Montserrat"
        fontSize="20px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="24.3799991607666px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="233px"
        height="235px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30.71%"
        bottom="11.55%"
        left="59.42%"
        right="3.06%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Joukkuenimi&#xA;&#xA;Hyökkääjä&#xA;&#xA;Pelaajanumero: 7&#xA;&#xA;Syntymävuosi 1985&#xA;&#xA;Lue lisää:&#xA;Linkki&#xA;"
        {...getOverrideProps(
          overrides,
          "Joukkuenimi Hy\u00F6kk\u00E4\u00E4j\u00E4 Pelaajanumero: 7 Syntym\u00E4vuosi 1985 Lue lis\u00E4\u00E4: Linkki"
        )}
      ></Text>
      <Text
        fontFamily="Montserrat"
        fontSize="24px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="29.256000518798828px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="224px"
        height="28.37px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="15.23%"
        bottom="77.79%"
        left="59.42%"
        right="4.51%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Maija Meikäläinen"
        {...getOverrideProps(overrides, "Maija Meik\u00E4l\u00E4inen")}
      ></Text>
      <View
        width="32px"
        height="31.31px"
        {...getOverrideProps(overrides, "Icons/X")}
      ></View>
    </View>
  );
}
