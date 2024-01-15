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
export declare type TicketlinkOverridesProps = {
    Ticketlink?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 96"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 97"?: PrimitiveOverrideProps<ViewProps>;
    "Osto liput otteluihin"?: PrimitiveOverrideProps<TextProps>;
    Button?: ButtonProps;
} & EscapeHatchProps;
export declare type TicketlinkProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TicketlinkOverridesProps | undefined | null;
}>;
export default function Ticketlink(props: TicketlinkProps): React.ReactElement;
