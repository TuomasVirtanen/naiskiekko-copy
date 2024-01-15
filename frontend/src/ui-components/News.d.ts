/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewsOverridesProps = {
    News?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 80"?: PrimitiveOverrideProps<ViewProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    date?: PrimitiveOverrideProps<TextProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NewsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NewsOverridesProps | undefined | null;
}>;
export default function News(props: NewsProps): React.ReactElement;
