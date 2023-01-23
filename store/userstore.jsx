import axios from "axios";
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

const storeUser = (set) => ({
  user: null || [],
  fetchUser: async (url, token) => {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    set({ user: response?.data });
  },
});
const useUserStore = create(
  persist(devtools(storeUser), {
    name: "user-storage",
    storage: createJSONStorage(() => localStorage),
  })
);
export { useUserStore };
