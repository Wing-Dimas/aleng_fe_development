import axios from "axios";
import Cookies from "js-cookie";
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

const storeUser = (set) => ({
  user: null || [],
  fetchUser: async (url, token) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ user: response?.data });
    } catch (err) {
      Cookies.remove("token");
    }
  },
});
const useUserStore = create(
  persist(devtools(storeUser), {
    name: "user-storage",
    storage: createJSONStorage(() => localStorage),
  })
);
export { useUserStore };
