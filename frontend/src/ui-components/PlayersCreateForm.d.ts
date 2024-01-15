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
export declare type PlayersCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    playerPhoto?: string;
    playerNumber?: number;
    playerTeam?: string;
    playerPosition?: string;
    playerShoots?: string;
    birthYear?: string;
    linkToEliteProspects?: string;
    linkToTeamSite?: string;
};
export declare type PlayersCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    playerPhoto?: ValidationFunction<string>;
    playerNumber?: ValidationFunction<number>;
    playerTeam?: ValidationFunction<string>;
    playerPosition?: ValidationFunction<string>;
    playerShoots?: ValidationFunction<string>;
    birthYear?: ValidationFunction<string>;
    linkToEliteProspects?: ValidationFunction<string>;
    linkToTeamSite?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayersCreateFormOverridesProps = {
    PlayersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    playerPhoto?: PrimitiveOverrideProps<TextFieldProps>;
    playerNumber?: PrimitiveOverrideProps<TextFieldProps>;
    playerTeam?: PrimitiveOverrideProps<TextFieldProps>;
    playerPosition?: PrimitiveOverrideProps<TextFieldProps>;
    playerShoots?: PrimitiveOverrideProps<TextFieldProps>;
    birthYear?: PrimitiveOverrideProps<TextFieldProps>;
    linkToEliteProspects?: PrimitiveOverrideProps<TextFieldProps>;
    linkToTeamSite?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayersCreateFormProps = React.PropsWithChildren<{
    overrides?: PlayersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlayersCreateFormInputValues) => PlayersCreateFormInputValues;
    onSuccess?: (fields: PlayersCreateFormInputValues) => void;
    onError?: (fields: PlayersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayersCreateFormInputValues) => PlayersCreateFormInputValues;
    onValidate?: PlayersCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlayersCreateForm(props: PlayersCreateFormProps): React.ReactElement;
