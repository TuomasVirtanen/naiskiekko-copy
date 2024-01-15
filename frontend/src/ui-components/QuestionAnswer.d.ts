/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionAnswerOverridesProps = {
    QuestionAnswer?: PrimitiveOverrideProps<ViewProps>;
    "Line 44"?: PrimitiveOverrideProps<IconProps>;
    Answer?: PrimitiveOverrideProps<FlexProps>;
    "Suosittelemme lapsen olevan v\u00E4hint\u00E4\u00E4n 12-vuotias jos haluaa osallistua kerhotoimintaan, juniori kerhotoimintaan voi koitenkin osallistua jo 8. ik\u00E4vuodesta alkaen."?: PrimitiveOverrideProps<TextProps>;
    Question?: PrimitiveOverrideProps<FlexProps>;
    "Kuinka vanha pit\u00E4\u00E4 olla jos haluaa osallistua j\u00E4\u00E4kiekko joukkueen kerhotoimintaan"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type QuestionAnswerProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: QuestionAnswerOverridesProps | undefined | null;
}>;
export default function QuestionAnswer(props: QuestionAnswerProps): React.ReactElement;
