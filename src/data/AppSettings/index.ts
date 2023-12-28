/**
 * Owner: Rishabh Anand
 * Desc: Data - App Settings
 **/

/* Types */
import { ThemeModesTypes } from "types/index";

export interface AppSettingsType {
  enableThemes: boolean;
  preferredThemeMode: ThemeModesTypes;
  enableAudio: boolean;
}

const AppSettings: AppSettingsType = {
  enableThemes: true,
  preferredThemeMode: ThemeModesTypes.DARK,
  enableAudio: true,
};

export default AppSettings;
