import { create } from 'zustand';

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