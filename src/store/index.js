import { logs } from "./log";
import { formatDate } from "@/utils/date";
import { getRandomNumber } from "@/utils/number";

export const generatePlayer = (name, maxHP = 100, maxMP = 50) => {
  return {
    name: name || "无名小卒",
    maxHP,
    hp: maxHP,
    maxMP,
    mp: maxMP,
  };
};

/**
 * 生成技能
 * @param {string} name
 * @param {'atk' | 'heal' | 'healMp' | 'skill'} type
 * @param {[number, number]} options
 * @param {number} cost
 * @returns
 */
export const generateSkill = (name, type, options, cost = 0) => {
  return {
    name,
    type,
    value: {
      min: options[0],
      max: options[1],
    },
    cost,
  };
};

export const doAction = (from, to, skill) => {
  const value = getRandomNumber(skill.value.min, skill.value.max);

  if (skill.type === "atk") {
    to.hp = Math.max(0, to.hp - value);
    logs.push({
      date: formatDate(new Date()),
      text: `${from.name}对${to.name}使用 ${skill.name} ，造成了${value}点伤害`,
    });
  }

  if (skill.type === "heal") {
    if (from.mp < skill.cost) {
      return;
    }
    from.hp = Math.min(from.maxHP, from.hp + value);
    from.mp = Math.max(0, from.mp - skill.cost);
    logs.push({
      date: formatDate(new Date()),
      text: `${from.name}使用了 ${skill.name}，恢复了${value}点生命值`,
    });
  }

  if (skill.type === "skill") {
    if (from.mp < skill.cost) {
      return;
    }
    to.hp = Math.max(0, to.hp - value);
    from.mp = Math.max(0, from.mp - skill.cost);
    logs.push({
      date: formatDate(new Date()),
      text: `${from.name}对${to.name}使用 ${skill.name} ，造成了${value}点伤害`,
    });
  }

  if (skill.type === "healMp") {
    from.mp = Math.min(from.maxMP, from.mp + value);
    logs.push({
      date: formatDate(new Date()),
      text: `${from.name}使用了 ${skill.name}，恢复了${value}点魔力值`,
    });
  }
};
