import { reactive } from "vue";
import { generatePlayer, generateSkill } from ".";

export const player = reactive(generatePlayer("无名小卒", 200, 50));
export const defaultSkills = [
  generateSkill("普通攻击", "atk", [5, 10]),
  generateSkill("背刺", "skill", [10, 20], 5),
  generateSkill("穿透", "skill", [20, 35], 15),
  generateSkill("圣光冲击", "skill", [50, 55], 30),
  generateSkill("星光", "heal", [20, 30], 10),
  generateSkill("神圣", "heal", [30, 50], 30),
  generateSkill("魔力源泉", "healMp", [10, 30]),
];
