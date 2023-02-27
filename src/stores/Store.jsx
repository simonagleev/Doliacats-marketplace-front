import { create } from "zustand";

const useStore = create((set) => ({
    collectionsArray: [],

    // Here we need to get(fetch) the data for collections from whatever source we choose (database, smartcontract, ...)
    fetchCollections: async () => {
        const response = await fetch("/src/mock/collections.json")
        const collections = await response.json()
        set(() => ({ collectionsArray: collections }))
    },
}))

export default useStore