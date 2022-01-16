import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
    export interface DefaultTheme {
        style: string;
        bgColor: string;
        primaryColor: string;
        secondaryColor: string;
        tertiaryColor: string;
        accentColor: string;
    }
}

export const lightTheme: DefaultTheme = {
    style: "light",
    bgColor: "#ededed",
    primaryColor: "#333",
    secondaryColor: "#555",
    tertiaryColor: "#666666",
    accentColor: "#ef4a4a",
};

export const darkTheme: DefaultTheme = {
    style: "dark",
    bgColor: "#111",
    primaryColor: "#fff",
    secondaryColor: "#CACACA",
    tertiaryColor: "#e3e3e3",
    accentColor: "#4aefd5",
};