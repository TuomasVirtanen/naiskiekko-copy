/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ButtonProps } from "./Button";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdminNavbarOverridesProps = {
    AdminNavbar?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 141"?: PrimitiveOverrideProps<ViewProps>;
    Logo3712314?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 84"?: PrimitiveOverrideProps<ViewProps>;
    Logo3712316?: PrimitiveOverrideProps<TextProps>;
    Button?: ButtonProps;
} & EscapeHatchProps;
export declare type AdminNavbarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AdminNavbarOverridesProps | undefined | null;
}>;
export default function AdminNavbar(props: AdminNavbarProps): React.ReactElement;
