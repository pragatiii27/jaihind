import { create } from 'zustand';

export interface UserProfile {
  name: string;
  email: string;
  initials: string;
}

interface AuthStore {
  user: UserProfile | null;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  login: (email: string, name?: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  login: (email, name) => {
    const userName = name || email.split('@')[0] || 'User';
    const initials = userName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    set({
      user: {
        name: userName,
        email,
        initials
      },
      isModalOpen: false
    });
  },
  logout: () => set({ user: null })
}));
