/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
import { ButtonProps } from "./Button";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileHamburgermenuOverridesProps = {
    MobileHamburgermenu?: PrimitiveOverrideProps<FlexProps>;
    Button5844091?: ButtonProps;
    Button5844100?: ButtonProps;
    Button5844109?: ButtonProps;
    Button5844118?: ButtonProps;
    Button5844127?: ButtonProps;
} & EscapeHatchProps;
export declare type MobileHamburgermenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MobileHamburgermenuOverridesProps | undefined | null;
}>;
export default function MobileHamburgermenu(props: MobileHamburgermenuProps): React.ReactElement;
