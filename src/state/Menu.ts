import { create } from 'zustand'

type Menu = {
  menu:boolean,
  setMenu:(menu:boolean) => void
}

export const MenuStore = create<Menu>()((set) => ({
  menu:false,
  setMenu:(menu:boolean) => set({menu})
}))

