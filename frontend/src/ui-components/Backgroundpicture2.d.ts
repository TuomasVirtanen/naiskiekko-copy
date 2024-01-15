/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Backgroundpicture2OverridesProps = {
    Backgroundpicture2?: PrimitiveOverrideProps<ViewProps>;
    "image 40"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Backgroundpicture2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Backgroundpicture2OverridesProps | undefined | null;
}>;
export default function Backgroundpicture2(props: Backgroundpicture2Props): React.ReactElement;
