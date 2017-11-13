import * as types from './mutation-types'
import { HTTP } from '../helpers/http'

export const toggleDrawer = ({ commit }) => {
  commit(types.SET_DRAWER, err => { console.log(err) })
}

export const getNews = ({ commit, dispatch }, payload) => {
  let data = {skip: 0, pageNumber: 1}
  if (payload.pageNumber > 1) {
    data.pageNumber = payload.pageNumber
    data.skip = payload.limit * data.pageNumber
  }
  const route = `${payload.slug}?limit=25&skip=${data.skip}`
  HTTP
  .get(route)
  .then(response => {
    data.limit = response.data._sys.limit
    data.items = response.data.data
    data.category = response.data.category[0]
    data.skip = response.data._sys.skip
    data.length = Math.ceil(response.data._sys.total / data.limit)

    dispatch('pageNumber', data.pageNumber)
    commit(types.SET_NEWS, data, err => { console.log(err) })
  })
  .catch(e => {
    console.log(e)
  })
}

export const pageNumber = ({commit}, payload) => {
  commit(types.SET_PAGE_NUMBER, payload, err => { console.log(err) })
}
