import { reactive } from "vue";

export const logs = reactive([]);

export function clearLogs() {
  logs.splice(0, logs.length);
}
