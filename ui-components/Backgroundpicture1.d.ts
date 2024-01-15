/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Backgroundpicture1OverridesProps = {
    Backgroundpicture1?: PrimitiveOverrideProps<ViewProps>;
    "image 6"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 23"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Backgroundpicture1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Backgroundpicture1OverridesProps | undefined | null;
}>;
export default function Backgroundpicture1(props: Backgroundpicture1Props): React.ReactElement;
