/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function QuestionAnswer(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1820px"
      height="100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "QuestionAnswer")}
      {...rest}
    >
      <Icon
        width="201px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 201, height: 1 }}
        paths={[
          {
            d: "M0 1.5L201 1.5L201 -1.5L0 -1.5L0 1.5Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 3,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="50%"
        bottom="50%"
        left="44.56%"
        right="44.4%"
        {...getOverrideProps(overrides, "Line 44")}
      ></Icon>
      <Flex
        gap="10px"
        direction="row"
        width="750px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="58.79%"
        right="0%"
        borderRadius="5px"
        padding="20px 30px 20px 30px"
        backgroundColor="rgba(13,71,161,1)"
        {...getOverrideProps(overrides, "Answer")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="19.503999710083008px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="716px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Suosittelemme lapsen olevan vähintään 12-vuotias jos haluaa osallistua kerhotoimintaan, juniori kerhotoimintaan voi koitenkin osallistua jo 8. ikävuodesta alkaen."
          {...getOverrideProps(
            overrides,
            "Suosittelemme lapsen olevan v\u00E4hint\u00E4\u00E4n 12-vuotias jos haluaa osallistua kerhotoimintaan, juniori kerhotoimintaan voi koitenkin osallistua jo 8. ik\u00E4vuodesta alkaen."
          )}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="750px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="6%"
        bottom="6%"
        left="0%"
        right="58.79%"
        borderRadius="5px"
        padding="20px 30px 20px 30px"
        backgroundColor="rgba(13,71,161,1)"
        {...getOverrideProps(overrides, "Question")}
      >
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
          width="551px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Kuinka vanha pitää olla jos haluaa osallistua jääkiekko joukkueen kerhotoimintaan"
          {...getOverrideProps(
            overrides,
            "Kuinka vanha pit\u00E4\u00E4 olla jos haluaa osallistua j\u00E4\u00E4kiekko joukkueen kerhotoimintaan"
          )}
        ></Text>
      </Flex>
    </View>
  );
}
