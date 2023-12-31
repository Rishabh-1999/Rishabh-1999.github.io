/**
 * @Owner: Rishabh Anand
 * @Desc: Data - App Settings
 **/

/* Types */
import { ThemeModesTypes } from "types/index";

export interface AppSettingsType {
  enableThemes: boolean;
  defaultTheme: ThemeModesTypes;
  enableAudio: boolean;
}

const AppSettings: AppSettingsType = {
  enableThemes: true,
  defaultTheme: ThemeModesTypes.DARK,
  enableAudio: true,
};

export default AppSettings;
