/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedTwitterOverridesProps = {
    FeedTwitter?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 147"?: PrimitiveOverrideProps<ViewProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Icons/CaretLeft"?: PrimitiveOverrideProps<ViewProps>;
    "Icons/CaretRight"?: PrimitiveOverrideProps<ViewProps>;
    "image 59"?: PrimitiveOverrideProps<ImageProps>;
    "image 74"?: PrimitiveOverrideProps<ImageProps>;
    "kuva-removebg-preview 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type FeedTwitterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeedTwitterOverridesProps | undefined | null;
}>;
export default function FeedTwitter(props: FeedTwitterProps): React.ReactElement;
