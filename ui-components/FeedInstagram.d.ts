/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedInstagramOverridesProps = {
    FeedInstagram?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 145"?: PrimitiveOverrideProps<ViewProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Icons/CaretLeft"?: PrimitiveOverrideProps<ViewProps>;
    "Icons/CaretRight"?: PrimitiveOverrideProps<ViewProps>;
    "image 50"?: PrimitiveOverrideProps<ImageProps>;
    "image 52"?: PrimitiveOverrideProps<ImageProps>;
    "image 51"?: PrimitiveOverrideProps<ImageProps>;
    "kuva-removebg-preview(3) 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type FeedInstagramProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeedInstagramOverridesProps | undefined | null;
}>;
export default function FeedInstagram(props: FeedInstagramProps): React.ReactElement;
