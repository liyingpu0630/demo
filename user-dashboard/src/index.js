/*
import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

app.model(require("./models/users"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
*/



import dva from 'dva';
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';
import { message } from 'antd';
import './index.html';
import './index.css';

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva(/*{
  // history: browserHistory,
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
}*/);
// app.model(require('./models/users')); //需在这里注册，这样model中就可以拿到state数据了

// 2. Plugins
app.use(createLoading());

// 3. Model
// Moved to router.js
app.model(require('./models/users'))
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
