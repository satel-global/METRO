export type ThemeDirection = "ltr" | "rtl";
export type FontFamily =
  | `'Inter', sans-serif`
  | `'Poppins', sans-serif`
  | `'Roboto', sans-serif`
  | `'Public Sans', sans-serif`;
export type PresetColor =
  | "default"
  | "theme1"
  | "theme2"
  | "theme3"
  | "theme4"
  | "theme5"
  | "theme6"
  | "theme7"
  | "theme8";

// ==============================|| CONFIG TYPES  ||============================== //

export type CustomizationActionProps = {
  type: string;
  payload?: CustomizationProps;
};

export type DefaultConfigProps = {
  defaultPath: string;
  fontFamily: FontFamily;
  miniDrawer: boolean;
  container: boolean;
  presetColor: PresetColor;
  themeDirection: ThemeDirection;
  title: string;
  title_split: string;
  background_url: string;
  description: string;
  logo: string | null;
  api: string;
  languages: string[];
  googleAnalytics?: {
    measurementId: string;
  };
  emojiEndpoint?: string;
};

export type CustomizationProps = {
  defaultPath: string;
  fontFamily: FontFamily;
  miniDrawer: boolean;
  container: boolean;
  presetColor: PresetColor;
  themeDirection: ThemeDirection;
  onChangeContainer: VoidFunction;
  onChangePresetColor: (theme: PresetColor) => void;
  onChangeDirection: (direction: ThemeDirection) => void;
  onChangeMiniDrawer: (miniDrawer: boolean) => void;
  onChangeFontFamily: (fontFamily: FontFamily) => void;
};
