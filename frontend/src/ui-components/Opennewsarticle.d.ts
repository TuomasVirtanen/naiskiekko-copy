/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Posts } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OpennewsarticleOverridesProps = {
    Opennewsarticle?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."?: PrimitiveOverrideProps<TextProps>;
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 35"?: PrimitiveOverrideProps<ImageProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo quis imperdiet massa. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Pellentesque pulvinar pellentesque habitant morbi tristique. Sem nulla pharetra diam sit amet. Tortor condimentum lacinia quis vel eros. Varius morbi enim nunc faucibus. Nisl rhoncus mattis rhoncus urna neque. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Id porta nibh venenatis cras sed felis eget velit. Orci dapibus ultrices in iaculis nunc sed. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Eu tincidunt tortor aliquam nulla facilisi cras. Est ullamcorper eget nulla facilisi etiam. Urna duis convallis convallis tellus id. Ultricies tristique nulla aliquet enim tortor at. Quam vulputate dignissim suspendisse in. Id volutpat lacus laoreet non curabitur. Eget mi proin sed libero. Duis ut diam quam nulla porttitor massa id. Leo vel orci porta non pulvinar neque laoreet suspendisse. Dictum varius duis at consectetur. At tellus at urna condimentum mattis pellentesque id nibh. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Facilisis leo vel fringilla est ullamcorper eget. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Purus semper eget duis at tellus at. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Eu feugiat pretium nibh ipsum. At tempor commodo ullamcorper a lacus. Quis varius quam quisque id diam vel quam elementum pulvinar. Nibh tortor id aliquet lectus proin nibh nisl."?: PrimitiveOverrideProps<TextProps>;
    "WRITER\u2019S NAME"?: PrimitiveOverrideProps<TextProps>;
    "DATE(day.month.year)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type OpennewsarticleProps = React.PropsWithChildren<Partial<ViewProps> & {
    posts?: Posts;
} & {
    overrides?: OpennewsarticleOverridesProps | undefined | null;
}>;
export default function Opennewsarticle(props: OpennewsarticleProps): React.ReactElement;
