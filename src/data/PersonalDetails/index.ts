/*
 * @Owner: Rishabh Anand
 * @Desc: Data - Personal Details
 */

export interface PersonalDetailsType {
  name: string;
  youInSteps: [string, number][];
}

const PersonalDetails: PersonalDetailsType = {
  name: "Rishabh Anand",
  youInSteps: [
    ["Full Stack Developer ⚛️", 2500],
    ["Software Engineer - II 🧑🏻‍💻", 2500],
    ["Defense Expert", 2500],
    ["Anime Lover", 1000],
    ["Indian 🕉️", 2500],
  ],
};

export default PersonalDetails;
