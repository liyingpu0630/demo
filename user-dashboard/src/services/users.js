/**
 * Created by wb-lyp261378 on 2017/2/9.
 */
import request from '../utils/request';
import {PAGE_SIZE} from '../constants';

export function fetch({page}) {//这里发送请求，拿到数据
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`)
}
export function removed(id){
  return request(`/api/users/${id}`,{
    method:'DELETE'
  })
}
export  function patch(id,values) {
  return request((`/api/users/${id}`),{
    method:'PATCH',
    body:JSON.stringify(values)
  })
}
export function create(values) {
  return request(`/api/users`,{
    method:'POST',
    body:JSON.stringify(values)
  })
}
