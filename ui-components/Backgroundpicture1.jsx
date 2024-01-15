/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, View } from "@aws-amplify/ui-react";
export default function Backgroundpicture1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1728px"
      height="653px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Backgroundpicture1")}
      {...rest}
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
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image 6")}
      ></Image>
      <Icon
        width="1728px"
        height="653px"
        viewBox={{ minX: 0, minY: 0, width: 1728, height: 653 }}
        paths={[
          {
            d: "M0 0L1728 0L1728 653L0 653L0 0Z",
            fill: "rgba(229,229,229,0.5)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 23")}
      ></Icon>
    </View>
  );
}
