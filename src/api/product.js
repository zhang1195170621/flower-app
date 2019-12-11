import {
  get,
  post,
  put,
  del
} from '../utils/request'

export function products(page) {
  return get('/api/v1/admin/products', {
    page
  })
}

/**
 * 新增商品
 * @param {*} model
 */
export function createProduct(model) {
  return post('/api/v1/admin/products', model)
}

/**
 * 获取指定id的商品
 * @param {*} id
 */
export function productDetail(id) {
  return get('/api/v1/admin/products/' + id)
}

/**
 * 修改指定id的商品信息
 * @param {*} id
 * @param {*} model
 */
export function updatePrduct(id, model) {
  return put('/api/v1/admin/products/' + id, model)
}

/**
 * 根据id删除
 * @param {*} id
 */
export function delProduct(id) {
  return del('/api/v1/admin/products/' + id)
}

export function getUsers() {
  return get('/api/v1/users/info')
}