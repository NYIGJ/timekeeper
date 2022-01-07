export const state = () => ({
  activeTabIndex: 0,
  tabs: [
    {
      id: 'instruments',
      label: '1',
      title: 'Tab 1 Title',
      darkColor: 'yellow-600',
      lightColor: 'yellow-200',
    },
    {
      id: 'upgrades',
      label: '2',
      title: 'Tab 2 Title',
      darkColor: 'blue-600',
      lightColor: 'blue-200',
    },
    {
      id: 'fathertime',
      label: '3',
      title: 'Tab 3 Title',
      darkColor: 'violet-600',
      lightColor: 'violet-200',
    },
    {
      id: 'timemachine',
      label: '4',
      title: 'Tab 4 Title',
      darkColor: 'lime-600',
      lightColor: 'lime-200',
    },
    {
      id: 'achievements',
      label: '5',
      title: 'Tab 5 Title',
      darkColor: 'orange-600',
      lightColor: 'orange-200',
    },
    {
      id: 'prestige',
      label: '6',
      title: 'Tab 6 Title',
      darkColor: 'teal-600',
      lightColor: 'teal-200',
    },
  ],
})

export const getters = {
  activeTab: (state) => {
    return state.tabs[state.activeTabIndex]
  },
  activeColorClasses: (state) => (index) => {
    const { darkColor, lightColor } = state.tabs[index]
    return `bg-${lightColor} text-${darkColor}`
  },
  inactiveColorClasses: (state) => (index) => {
    const { darkColor, lightColor } = state.tabs[index]
    return `bg-${darkColor} text-${lightColor}`
  },
  activeTabColorClasses: (state, getters) => {
    return getters.activeColorClasses(state.activeTabIndex)
  },
}

export const mutations = {
  setActiveTab: (state, index) => {
    state.activeTabIndex = index
  },
}
