import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UsersComponent from '../components/Users/Users'

function Users() {
  return (
    <div className={styles.normal}>
      {/*Route Component: Users*/}
      <UsersComponent/>
    </div>
  );
}

/*function mapStateToProps() {
  return {};
}*/

export default connect()(Users);
