/*
 * Owner: Rishabh Anand
 * Desc: Data - Work Experiences - Type
 */

export interface WorkExperiencesDataType {
  position: string;
  name: string;
  link: string;
  logo: any;
  from: string;
  to?: string;
  descriptions?: (string | string[])[];
  skills?: string[];
}
