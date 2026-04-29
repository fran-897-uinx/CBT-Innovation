import { create } from 'zustand';

export const useCourseStore = create((set) => ({
  courses: [],
  wishlist: [],
  filters: {},
  
  setCourses: (courses) => set({ courses }),
  setWishlist: (wishlist) => set({ wishlist }),
  setFilters: (filters) => set({ filters }),
  
  addToWishlist: (course) => set((state) => {
    const exists = state.wishlist.some((c) => c.id === course.id);
    if (exists) return state;
    return { wishlist: [...state.wishlist, course] };
  }),
  
  removeFromWishlist: (courseId) => set((state) => ({ 
    wishlist: state.wishlist.filter((c) => c.id !== courseId) 
  })),
  
  isInWishlist: (courseId) => {
    return (state) => state.wishlist.some((c) => c.id === courseId);
  },
  
  clearFilters: () => set({ filters: {} }),
}));