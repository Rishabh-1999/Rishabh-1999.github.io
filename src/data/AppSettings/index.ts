/**
 * Owner: Rishabh Anand
 * Desc: Data - App Settings
 **/

/* Types */
import { ThemeModesTypes } from "types/index";
import { AppSettingsType } from "./appSettings.type";

/* Re-Export */
export type { AppSettingsType };

const AppSettings: AppSettingsType = {
  enableThemes: true,
  prefferedThemeMode: ThemeModesTypes.DARK,
  enableAudio: true,
};

export default AppSettings;
