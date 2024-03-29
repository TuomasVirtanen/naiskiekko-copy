/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ButtonOverridesProps = {
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Icons/Backarrow"?: PrimitiveOverrideProps<ViewProps>;
    "BUTTON EXAMPLE TEXT"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    property?: "Alarm" | "Default";
} & {
    overrides?: ButtonOverridesProps | undefined | null;
}>;
export default function Button(props: ButtonProps): React.ReactElement;
