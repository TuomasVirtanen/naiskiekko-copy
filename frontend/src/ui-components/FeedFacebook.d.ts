/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedFacebookOverridesProps = {
    FeedFacebook?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 146"?: PrimitiveOverrideProps<ViewProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Icons/CaretLeft"?: PrimitiveOverrideProps<ViewProps>;
    "Icons/CaretRight"?: PrimitiveOverrideProps<ViewProps>;
    "image 55"?: PrimitiveOverrideProps<ImageProps>;
    "image 75"?: PrimitiveOverrideProps<ImageProps>;
    "image 76"?: PrimitiveOverrideProps<ImageProps>;
    "kuva-removebg-preview(2) 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type FeedFacebookProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeedFacebookOverridesProps | undefined | null;
}>;
export default function FeedFacebook(props: FeedFacebookProps): React.ReactElement;
