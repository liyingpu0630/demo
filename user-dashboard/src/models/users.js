import * as usersService from '../services/users'
export default {
  namespace: 'users',
  state: {//设置初始状态
    list: [],
    total: null,
     page: null
  },
  reducers: {
    /*处理同步，其中的函数接受两个参数，一个是当前state，一个是action，返回一个新的state*/
    save(state, {payload:{data:list, total,page}}){
      return {...state, list, total ,page}
    }
  },
  effects: {
    *fetch({payload:{page = 1 }}, {call, put}){
      const {data, headers}=yield call(usersService.fetch, {page});
     /* yield put({type: 'save', payload: {data, total: headers['x-total-count']}})*/
      yield put({
        type:'save',
        payload:{
          data,
          total:parseInt(headers['x-total-count'],10),
          page:parseInt(page,10)
        },
      })
    }
  },
  subscriptions: {//订阅数据源
    setup({dispatch, history}){
      return history.listen(({pathname, query}) => {
        if (pathname === '/users') {
          dispatch({type: 'fetch', payload: query})
        }
      })
    }

  },
};
