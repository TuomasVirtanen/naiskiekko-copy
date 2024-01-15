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
export declare type AdminAlarmpopupOverridesProps = {
    AdminAlarmpopup?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 68"?: PrimitiveOverrideProps<ViewProps>;
    "Haluatko varmasti perua tekem\u00E4si muutokset?"?: PrimitiveOverrideProps<TextProps>;
    Button1581165?: ButtonProps;
    Button1581188?: ButtonProps;
} & EscapeHatchProps;
export declare type AdminAlarmpopupProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AdminAlarmpopupOverridesProps | undefined | null;
}>;
export default function AdminAlarmpopup(props: AdminAlarmpopupProps): React.ReactElement;
