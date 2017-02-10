import React from 'react';
import {connect} from  'dva';
import {Table, Pagination, Popconfirm, Button} from 'antd';
import {routerRedux} from 'dva/router'
import styles from './Users.css';
import {PAGE_SIZE} from '../../constants';
import UserModal from './UserModal';


//把dva-loading 用npm install 上，注入到Users函数中，最后即可出现加载的效果
function Users({dispatch, list:dataSource, loadding, total, page:current}) {
  function deleteHandler(id) {
    // console.warn(`TODO:${id}`)
    dispatch({
      type: 'users/remove',
      payload: id
    })
  };
  function pageChangeHandler(id) {
    dispatch(routerRedux.push({
      pathname:'/users',
      query:{page}
    }))
  }
  function editHandler(id, values) {
    dispatch({
      type: 'users/patch',
      payload: {id, values}
    })
  }

  function createHandler(values) {
    dispatch({
      type: 'users/create',
      payload: values
    })
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, record) => (



        <span className={styles.operation}>
         {/* <a href="">Edit</a>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>*/}
          <UserModal record={record} onOk={editHandler.bind(null, record.id)}>
            <a >Edit</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a> Delete</a>
          </Popconfirm>
        </span>
      )
    },
  ]
  return (
    <div className={styles.normal}>
      <div>
        <div >{/*添加用户所需的按钮*/}
          <div className={styles.create}>
            <UserModal record={{}} onOk={createHandler}>
              <Button type="primary">创建新用户</Button>
            </UserModal>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loadding}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          classname="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const {list, total, page} = state.users;
  // console.log(state.loading)
  return {
    loading: state.loading.models.users,//用于添加loading效果
    list,
    total,
    page,
  }
}

export default connect(mapStateToProps)(Users);
