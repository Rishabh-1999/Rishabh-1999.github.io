/*
 * @Owner: Rishabh Anand
 * @Desc: Data - Personal Details
 */

export interface PersonalDetailsType {
  name: string;
  typicalSteps: [string, number][];
}

const PersonalDetails: PersonalDetailsType = {
  name: "Rishabh Anand",
  typicalSteps: [
    ["Full Stack Developer ⚛️", 2500],
    ["Defense Expert", 2000],
    ["Anime Lover", 1000],
    ["Bharatiyan (Indian) 🕉️", 2500],
  ],
};

export default PersonalDetails;
