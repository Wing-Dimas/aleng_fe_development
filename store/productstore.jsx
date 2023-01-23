import { create } from "zustand";
import { devtools } from "zustand/middleware";

const storeWisata = (set) => ({});
const useWisataStore = create(devtools(storeWisata));
