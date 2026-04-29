import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_THEME } from '../theme/theme.constants';

export const useThemeStore = create(
  persist(
    (set) => {
      const normalizeTheme = (theme) => {
        if (!theme || typeof theme !== 'object') return DEFAULT_THEME;
        return {
          mode: theme.mode || DEFAULT_THEME.mode,
          background: theme.background || DEFAULT_THEME.background,
        };
      };

      return {
        theme: DEFAULT_THEME,
        
        setTheme: (theme) => set({ theme: normalizeTheme(theme) }),
        
        toggleMode: () => set((state) => ({ 
          theme: { 
            ...normalizeTheme(state.theme), 
            mode: state.theme.mode === 'light' ? 'dark' : 'light' 
          }
        })),
        
        toggleBackground: () => set((state) => ({ 
          theme: { 
            ...normalizeTheme(state.theme), 
            background: state.theme.background === 'solid' ? 'gradient' : 'solid' 
          }
        })),
      };
    },
    {
      name: 'theme-storage',
    }
  )
);