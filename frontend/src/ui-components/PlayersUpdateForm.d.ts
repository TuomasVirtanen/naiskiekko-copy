/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Players } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayersUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    playerTeam?: string;
    playerNumber?: number;
    playerPosition?: string;
    playerPhoto?: string;
    playerShoots?: string;
    birthYear?: string;
    linkToEliteProspects?: string;
    linkToTeamSite?: string;
};
export declare type PlayersUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    playerTeam?: ValidationFunction<string>;
    playerNumber?: ValidationFunction<number>;
    playerPosition?: ValidationFunction<string>;
    playerPhoto?: ValidationFunction<string>;
    playerShoots?: ValidationFunction<string>;
    birthYear?: ValidationFunction<string>;
    linkToEliteProspects?: ValidationFunction<string>;
    linkToTeamSite?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayersUpdateFormOverridesProps = {
    PlayersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    playerTeam?: PrimitiveOverrideProps<TextFieldProps>;
    playerNumber?: PrimitiveOverrideProps<TextFieldProps>;
    playerPosition?: PrimitiveOverrideProps<TextFieldProps>;
    playerPhoto?: PrimitiveOverrideProps<TextFieldProps>;
    playerShoots?: PrimitiveOverrideProps<TextFieldProps>;
    birthYear?: PrimitiveOverrideProps<TextFieldProps>;
    linkToEliteProspects?: PrimitiveOverrideProps<TextFieldProps>;
    linkToTeamSite?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayersUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlayersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    players?: Players;
    onSubmit?: (fields: PlayersUpdateFormInputValues) => PlayersUpdateFormInputValues;
    onSuccess?: (fields: PlayersUpdateFormInputValues) => void;
    onError?: (fields: PlayersUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PlayersUpdateFormInputValues) => PlayersUpdateFormInputValues;
    onValidate?: PlayersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlayersUpdateForm(props: PlayersUpdateFormProps): React.ReactElement;
