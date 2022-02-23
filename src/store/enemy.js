import { ref } from "vue";
import { damageByEnemy, maxHealth } from "@/utils";
import { userHealth, username } from "./user";
import { addLog } from "./log";

export const enemyname = "恐惧领主";
export const enemyHealth = ref(maxHealth);
export const enemyEffect = () => {
  const damage = 5;
  damageByEnemy(userHealth, damage);
  addLog(enemyname, username, "atk", "领主技能", damage);
};
