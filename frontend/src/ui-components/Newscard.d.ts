/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Posts } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewscardOverridesProps = {
    Newscard?: PrimitiveOverrideProps<ViewProps>;
    Image19470?: PrimitiveOverrideProps<ViewProps>;
    Image19128?: PrimitiveOverrideProps<ImageProps>;
    "Linear gradient"?: PrimitiveOverrideProps<ViewProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    UUTISET?: PrimitiveOverrideProps<TextProps>;
    "News text"?: PrimitiveOverrideProps<FlexProps>;
    "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."?: PrimitiveOverrideProps<TextProps>;
    "date (day.month.year)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NewscardProps = React.PropsWithChildren<Partial<ViewProps> & {
    posts?: Posts;
} & {
    overrides?: NewscardOverridesProps | undefined | null;
}>;
export default function Newscard(props: NewscardProps): React.ReactElement;
