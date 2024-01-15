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
export declare type TabletHamburgermenuOverridesProps = {
    TabletHamburgermenu?: PrimitiveOverrideProps<FlexProps>;
    Button5844173?: ButtonProps;
    Button5844146?: ButtonProps;
    Button5844155?: ButtonProps;
    Button5844164?: ButtonProps;
    Button5844182?: ButtonProps;
} & EscapeHatchProps;
export declare type TabletHamburgermenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TabletHamburgermenuOverridesProps | undefined | null;
}>;
export default function TabletHamburgermenu(props: TabletHamburgermenuProps): React.ReactElement;
