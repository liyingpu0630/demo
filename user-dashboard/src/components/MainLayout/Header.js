/**
 * Created by wb-lyp261378 on 2017/2/10.
 */
import React from 'react';
import  {Menu, Icon} from 'antd';
import {Link} from 'dva/router';
// 用react布局静态页面 antd中是封装好的一些插件
function Header({location}) { //头部导航的布局
  return (
    <Menu mode="horizontal" theme="dark" selectedKeys={[location.pathname]}>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars"/>Users</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/"><Icon type="home"/>Home</Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown-circle"/>404</Link>
      </Menu.Item>
      <Menu.Item key="/antd">
        <a href="https://github.com/dvajs/dva" target="_blank">dva</a>
      </Menu.Item>
    </Menu>
  )

}
export default Header;
