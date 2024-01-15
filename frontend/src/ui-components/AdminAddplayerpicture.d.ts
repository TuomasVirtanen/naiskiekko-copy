/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ButtonProps } from "./Button";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdminAddplayerpictureOverridesProps = {
    AdminAddplayerpicture?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 140"?: PrimitiveOverrideProps<IconProps>;
    "Pelaajan kuva"?: PrimitiveOverrideProps<TextProps>;
    Button?: ButtonProps;
    "Icons/Camera"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type AdminAddplayerpictureProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AdminAddplayerpictureOverridesProps | undefined | null;
}>;
export default function AdminAddplayerpicture(props: AdminAddplayerpictureProps): React.ReactElement;
