import { create } from 'zustand';

export const useUIStore = create((set) => ({
  sidebarOpen: true,
  collapsed: false,
  
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  setCollapsed: (collapsed) => set({ collapsed }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}));