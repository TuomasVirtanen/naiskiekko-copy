/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobiilipelaajakorttiOverridesProps = {
    Mobiilipelaajakortti?: PrimitiveOverrideProps<ViewProps>;
    "Card Image"?: PrimitiveOverrideProps<FlexProps>;
    "Player Image"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 2"?: PrimitiveOverrideProps<ViewProps>;
    Name2011154?: PrimitiveOverrideProps<TextProps>;
    Role?: PrimitiveOverrideProps<TextProps>;
    "image 42"?: PrimitiveOverrideProps<ImageProps>;
    Name2011155?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MobiilipelaajakorttiProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MobiilipelaajakorttiOverridesProps | undefined | null;
}>;
export default function Mobiilipelaajakortti(props: MobiilipelaajakorttiProps): React.ReactElement;
