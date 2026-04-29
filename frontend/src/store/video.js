import { create } from 'zustand';

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