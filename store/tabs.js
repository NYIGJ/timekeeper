import Vue from 'vue'

export const state = () => ({
  tabs: [
    {
      route: '/',
      label: 'fas fa-clock',
      title: 'Timekeeping Instruments',
      darkColor: 'amber-900',
      color: 'amber-400',
      lightColor: 'amber-200',
      unlocked: true,
    },
    {
      route: '/apprentices',
      label: 'fas fa-user-friends',
      title: 'Apprentices',
      darkColor: 'rose-900',
      color: 'rose-400',
      lightColor: 'rose-200',
      unlocked: false,
    },
    {
      route: '/missions',
      label: 'fas fa-th-list',
      title: 'Missions',
      darkColor: 'sky-900',
      color: 'sky-400',
      lightColor: 'sky-200',
      unlocked: false,
    },
    {
      route: '/timemachine',
      label: 'fas fa-fast-forward',
      title: 'Time Machine',
      darkColor: 'lime-900',
      color: 'lime-400',
      lightColor: 'lime-200',
      unlocked: false,
    },
    {
      route: '/timemagic',
      label: 'fas fa-eye',
      title: 'Time Magic',
      darkColor: 'violet-900',
      color: 'violet-400',
      lightColor: 'violet-200',
      unlocked: false,
    },
    {
      route: '/wisdom',
      label: 'fas fa-book-open',
      title: 'Wisdom',
      darkColor: 'teal-900',
      color: 'teal-400',
      lightColor: 'teal-100',
      unlocked: false,
    },
  ],
})

export const getters = {
  activeTab(state) {
    return state.tabs.find(
      // eslint-disable-next-line no-undef
      (tab) => tab.route === $nuxt.$route.path
    )
  },
  isTabUnlocked: (state) => (title) => {
    return state.tabs.find((t) => t.title === title).unlocked
  },
}

export const mutations = {
  unlockTab: (state, title) => {
    const index = state.tabs.findIndex((t) => t.title === title)
    Vue.set(state.tabs[index], 'unlocked', true)
  },
}
