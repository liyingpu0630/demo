/**
 * Created by wb-lyp261378 on 2017/2/10.
 */
import React from 'react';
import styles from './MainLayout.css'; //引入css样式为styles，这里就可以通过styles.XXX设置样式
import Header from './Header';
function MainLayout({children, location}) {
  return (
    <div className={styles.normal}>
      <Header location={location}/>
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  )
}
export default MainLayout;
