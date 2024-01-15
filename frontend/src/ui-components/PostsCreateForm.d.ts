/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostsCreateFormInputValues = {
    tag?: string;
    title?: string;
    text?: string;
    image?: string;
    lead?: string;
    writer?: string;
};
export declare type PostsCreateFormValidationValues = {
    tag?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    lead?: ValidationFunction<string>;
    writer?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostsCreateFormOverridesProps = {
    PostsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tag?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    lead?: PrimitiveOverrideProps<TextFieldProps>;
    writer?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostsCreateFormProps = React.PropsWithChildren<{
    overrides?: PostsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PostsCreateFormInputValues) => PostsCreateFormInputValues;
    onSuccess?: (fields: PostsCreateFormInputValues) => void;
    onError?: (fields: PostsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PostsCreateFormInputValues) => PostsCreateFormInputValues;
    onValidate?: PostsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PostsCreateForm(props: PostsCreateFormProps): React.ReactElement;
