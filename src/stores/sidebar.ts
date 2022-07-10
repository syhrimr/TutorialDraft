import { defineStore } from 'pinia'

export const useSidebar = defineStore({
  id: 'sidebar',
  state: () => ({
    sidebar: [
      {
        label: 'Home',
        separator: true,
        path: '/'
      },
      {
        label: 'Simple Table',
        separator: false,
        path: '/simple-table'
      },
      {
        label: 'Selection Table',
        separator: false,
        path: '/selection-table'
      },
      {
        label: 'Slot Table',
        separator: false,
        path: '/slot-table'
      }
    ]
  }),
  getters: {
    doubleCount: (state) => state.sidebar
  }
})
