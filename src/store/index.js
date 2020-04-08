import cookie from 'js-cookie'
import cookieKeys from '@/const/cookie-keys'

const cookiePath = process.env.COOKIE_PATH
// 最好提前在你的 store 中初始化好所有所需属性
// https://vuex.vuejs.org/zh-cn/mutations.html
export const state = () => ({
  // 这两个用于client side的使用, 又放cookie里是为了刷新时状态不丢失
  userId: '',
  token: '',
  tenantId: '',
  meta: {},
  user: {
    userId: '16e577069ac44399b73d45e2acbf3b66',
    id: '16e577069ac44399b73d45e2acbf3b66',
    tenantId: '620e80bfd862423d9299620038f94a45',
    createdBy: null,
    createdAt: 946656000000,
    updatedBy: 'mifei',
    updatedAt: 1548300528000,
    dr: 0,
    accountId: '798b9812d3f4408e83b9399d09d1758c',
    password: null,
    token: null,
    username: 'miffy',
    usernumber: null,
    nickname: '米肥',
    email: 'mi_ffy@yeah.net',
    avatar: '',
    gender: null,
    phone: '15521198999',
    status: '1',
    type: '1',
    ext1: null,
    ext2: null,
    ext3: null,
    ext4: null,
    ext5: null,
    extJson: null,
    roles: []
  },
  menuList: [],
  permission: {}
})

//  mutation 必须同步执行
export const mutations = {
  login(state, payload) {
    // 部署不一定是在根路径, 所以cookie要设置path
    cookieKeys.forEach(key => {
      state[key] = payload[key]
      cookie.set(key, payload[key], {
        path: cookiePath
      })
    })
  },

  logout(state) {
    cookieKeys.forEach(key => {
      state[key] = ''
      cookie.remove(key, {
        path: cookiePath
      })
    })
    this.$router.replace('/login')
  },

  update(state, payload) {
    Object.keys(payload).forEach(k => {
      state[k] = payload[k]
    })
  }
}

// Action 提交的是 mutation，而不是直接变更状态
// Action 可以包含任意异步操作
export const actions = {
  async login(context, payload) {
    // store 对象
    let { commit, state, dispatch } = context

    let resp = await this.$axios.$post(
      `/deepexi-tenant/api/v1/tenants/login`,
      payload
    )

    const userDetail = { ...resp.payload }
    userDetail.userId = userDetail.id
    commit('login', userDetail)

    dispatch('fetchUserAndMenuList')
  },

  async fetchUserAndMenuList({ commit }) {
    let user = await this.$axios.$get(
      `/deepexi-permission/api/v1/users/currentUser`
    )

    commit('update', { user: user.payload || {} })

    let menuResources = await this.$axios.$get(
      `/deepexi-permission/api/v2/apps/service/userResource`
    )
    if (menuResources && menuResources.payload) {
      commit('update', {
        menuList: menuResources.payload
      })
    }
  }
}
