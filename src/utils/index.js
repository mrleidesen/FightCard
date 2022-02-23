import { isNumber } from "./number";

export const maxHealth = 100;

export function damageByEnemy(state, amount) {
  if (!isNumber(amount)) {
    return;
  }

  state.value = Math.max(0, state.value - amount);
}

export function healSelf(state, amount) {
  if (!isNumber(amount)) {
    return;
  }

  state.value = Math.min(maxHealth, state.value + amount);
}
