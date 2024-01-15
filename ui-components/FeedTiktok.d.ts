/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedTiktokOverridesProps = {
    FeedTiktok?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 148"?: PrimitiveOverrideProps<ViewProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Icons/CaretLeft"?: PrimitiveOverrideProps<ViewProps>;
    "Icons/CaretRight"?: PrimitiveOverrideProps<ViewProps>;
    "image 58"?: PrimitiveOverrideProps<ImageProps>;
    "image 77"?: PrimitiveOverrideProps<ImageProps>;
    "1200px-TikTok_logo 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type FeedTiktokProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeedTiktokOverridesProps | undefined | null;
}>;
export default function FeedTiktok(props: FeedTiktokProps): React.ReactElement;
