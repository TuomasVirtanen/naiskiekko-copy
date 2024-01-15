/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MobileNewsOverridesProps = {
    MobileNews?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 143"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 144"?: PrimitiveOverrideProps<ImageProps>;
    "pp.kk.vvvv"?: PrimitiveOverrideProps<TextProps>;
    "Esimerkki uutinen 1"?: PrimitiveOverrideProps<TextProps>;
    Tag?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 149"?: PrimitiveOverrideProps<ViewProps>;
    "#Tag"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MobileNewsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MobileNewsOverridesProps | undefined | null;
}>;
export default function MobileNews(props: MobileNewsProps): React.ReactElement;
