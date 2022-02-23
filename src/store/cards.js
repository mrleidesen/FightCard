import { reactive } from "vue";
import shuffle from "lodash.shuffle";
import { getRandomNumber } from "@/utils/number";

const defaultCards = [
  {
    type: "atk",
    name: "毒液",
    value: {
      min: 1,
      max: 10,
    },
    max: 20,
  },
  {
    type: "atk",
    name: "冲锋",
    value: {
      min: 5,
      max: 10,
    },
    max: 20,
  },
  {
    type: "atk",
    name: "十字斩",
    value: {
      min: 10,
      max: 20,
    },
    max: 10,
  },
  {
    type: "atk",
    name: "山崩地裂",
    value: {
      min: 20,
      max: 30,
    },
    max: 6,
  },
  {
    type: "heal",
    name: "星光",
    value: {
      min: 5,
      max: 15,
    },
    max: 16,
  },
  {
    type: "heal",
    name: "神圣治疗",
    value: {
      min: 15,
      max: 25,
    },
    max: 10,
  },
  {
    type: "draw",
    name: "贪婪",
    value: {
      min: 1,
      max: 3,
    },
    max: 10,
  },
  {
    type: "drop",
    name: "强迫",
    value: {
      min: 1,
      max: 3,
    },
    max: 20,
  },
];

function generateCards() {
  const cards = [];

  for (const card of defaultCards) {
    for (let i = 0; i < card.max; i++) {
      cards.push({
        id: cards.length + 1,
        type: card.type,
        name: card.name,
        value: getRandomNumber(card.value.min, card.value.max),
      });
    }
  }

  return cards;
}

export const cards = reactive(shuffle(generateCards()));

export const userCards = reactive([]);

export const enemyCards = reactive([]);

export function drawCards(state, count = 2) {
  for (let i = 0; i < count; i++) {
    if (cards.length !== 0) {
      state.push(...cards.splice(getRandomNumber(0, cards.length - 1), 1));
    }
  }
}

export function onUseCard(state, id) {
  const index = state.findIndex((card) => card.id === id);

  if (index === -1) {
    return;
  }

  state.splice(index, 1);
}

export function resetCards() {
  cards.splice(0, cards.length);
  userCards.splice(0, userCards.length);
  enemyCards.splice(0, enemyCards.length);

  cards.push(...generateCards());
}
