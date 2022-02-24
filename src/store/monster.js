import { reactive } from "vue";
import { generatePlayer, generateSkill } from ".";

export const monster = reactive(generatePlayer("恐惧领主", 700, 0));

export const defaultSkills = [
  generateSkill("利刃", "atk", [5, 10]),
  generateSkill("冲锤", "atk", [10, 20]),
  generateSkill("山崩地裂", "atk", [20, 50]),
  generateSkill("休息", "heal", [30, 50]),
];
