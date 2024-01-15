/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PelaajainfoOverridesProps = {
    Pelaajainfo?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 91"?: PrimitiveOverrideProps<ViewProps>;
    "Card Image"?: PrimitiveOverrideProps<FlexProps>;
    "Player Image"?: PrimitiveOverrideProps<ImageProps>;
    "Joukkuenimi Hy\u00F6kk\u00E4\u00E4j\u00E4 Pelaajanumero: 7 Syntym\u00E4vuosi 1985 Lue lis\u00E4\u00E4: Linkki"?: PrimitiveOverrideProps<TextProps>;
    "Maija Meik\u00E4l\u00E4inen"?: PrimitiveOverrideProps<TextProps>;
    "Icons/X"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PelaajainfoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PelaajainfoOverridesProps | undefined | null;
}>;
export default function Pelaajainfo(props: PelaajainfoProps): React.ReactElement;
