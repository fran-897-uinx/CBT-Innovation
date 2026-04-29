import { create } from 'zustand';

export const useGroupStore = create((set) => ({
  groups: [],
  activeGroup: null,
  
  setGroups: (groups) => set({ groups }),
  setActiveGroup: (activeGroup) => set({ activeGroup }),
  addGroup: (group) => set((state) => ({ 
    groups: [group, ...state.groups] 
  })),
  updateGroup: (groupId, updates) => set((state) => ({
    groups: state.groups.map((g) => 
      g.id === groupId ? { ...g, ...updates } : g
    ),
  })),
  removeGroup: (groupId) => set((state) => ({
    groups: state.groups.filter((g) => g.id !== groupId),
  })),
}));