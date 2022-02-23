import { formatDate } from "@/utils/date";
import { reactive } from "vue";

export const logs = reactive([]);

export function addLog(from, to, type, typeName, value) {
  if (type === "atk") {
    logs.push({
      date: formatDate(new Date()),
      text: `${from}对${to}使用 ${typeName} ，造成了${value}点伤害`,
    });
  }

  if (type === "heal") {
    logs.push({
      date: formatDate(new Date()),
      text: `${from}使用了 ${typeName}，恢复了${value}点生命值`,
    });
  }

  if (type === "draw") {
    logs.push({
      date: formatDate(new Date()),
      text: `${from}使用${typeName}抽取了${value}张卡`,
    });
  }

  if (type === "drop") {
    logs.push({
      date: formatDate(new Date()),
      text: `${from}使用${typeName}丢弃了${to}手牌${value}张卡`,
    });
  }
}

export function clearLogs() {
  logs.splice(0, logs.length);
}
