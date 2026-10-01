import { create } from 'zustand';
import { ComfortAnswers } from '../types/product';

interface RecommendStore {
  answers: ComfortAnswers;
  setAnswer: <K extends keyof ComfortAnswers>(key: K, value: ComfortAnswers[K]) => void;
  resetAnswers: () => void;
  hasAnsweredAtLeastThree: () => boolean;
  answeredCount: () => number;
}

export const useRecommendStore = create<RecommendStore>((set, get) => ({
  answers: {},
  setAnswer: (key, value) =>
    set((state) => ({
      answers: { ...state.answers, [key]: value }
    })),
  resetAnswers: () => set({ answers: {} }),
  hasAnsweredAtLeastThree: () => {
    return Object.keys(get().answers).length >= 3;
  },
  answeredCount: () => {
    return Object.keys(get().answers).length;
  }
}));
