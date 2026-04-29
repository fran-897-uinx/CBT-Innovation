import { create } from 'zustand';

export const useNotificationStore = create((set) => ({
  notifications: [],
  
  addNotification: (notification) => set((state) => ({ 
    notifications: [notification, ...state.notifications] 
  })),
  removeNotification: (id) => set((state) => ({ 
    notifications: state.notifications.filter((n) => n.id !== id) 
  })),
  clearAll: () => set({ notifications: [] }),
}));