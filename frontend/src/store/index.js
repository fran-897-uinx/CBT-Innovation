import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_THEME } from '../theme/theme.constants';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setLoading: (isLoading) => set({ isLoading }),
      logout: () => set({ user: null, isAuthenticated: false }),
      updateUser: (updates) => set((state) => ({ 
        user: state.user ? { ...state.user, ...updates } : null 
      })),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: DEFAULT_THEME,
      setTheme: (theme) => set({ theme }),
      toggleMode: () => set((state) => ({ 
        theme: { ...state.theme, mode: state.theme.mode === 'light' ? 'dark' : 'light' }
      })),
      toggleBackground: () => set((state) => ({ 
        theme: { ...state.theme, background: state.theme.background === 'solid' ? 'gradient' : 'solid' }
      })),
    }),
    {
      name: 'theme-storage',
    }
  )
);

export const useUIStore = create((set) => ({
  sidebarOpen: true,
  collapsed: false,
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  setCollapsed: (collapsed) => set({ collapsed }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}));

export const useChatStore = create((set) => ({
  chats: [],
  activeChat: null,
  messages: {},
  
  setChats: (chats) => set({ chats }),
  setActiveChat: (activeChat) => set({ activeChat }),
  addChat: (chat) => set((state) => ({ 
    chats: [chat, ...state.chats] 
  })),
  addMessage: (chatId, message) => set((state) => ({
    messages: {
      ...state.messages,
      [chatId]: [...(state.messages[chatId] || []), message],
    },
  })),
  clearMessages: (chatId) => set((state) => ({
    messages: { ...state.messages, [chatId]: [] },
  })),
}));

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

export const useVideoStore = create((set) => ({
  videoSessions: [],
  activeSession: null,
  isInCall: false,
  micOn: true,
  videoOn: true,
  screenSharing: false,
  
  setVideoSessions: (videoSessions) => set({ videoSessions }),
  setActiveSession: (activeSession) => set({ activeSession }),
  setIsInCall: (isInCall) => set({ isInCall }),
  toggleMic: () => set((state) => ({ micOn: !state.micOn })),
  toggleVideo: () => set((state) => ({ videoOn: !state.videoOn })),
  toggleScreenShare: () => set((state) => ({ 
    screenSharing: !state.screenSharing 
  })),
  addVideoSession: (session) => set((state) => ({ 
    videoSessions: [session, ...state.videoSessions] 
  })),
}));

export const useCourseStore = create((set) => ({
  courses: [],
  wishlist: [],
  filters: {},
  
  setCourses: (courses) => set({ courses }),
  setWishlist: (wishlist) => set({ wishlist }),
  setFilters: (filters) => set({ filters }),
  addToWishlist: (course) => set((state) => ({ 
    wishlist: [...state.wishlist, course] 
  })),
  removeFromWishlist: (courseId) => set((state) => ({ 
    wishlist: state.wishlist.filter((c) => c.id !== courseId) 
  })),
  clearFilters: () => set({ filters: {} }),
}));

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