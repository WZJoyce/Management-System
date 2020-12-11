
import './App.less';
import 'antd/dist/antd.less';
import {BrowserRouter, Route, Switch} from'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
//自定义引入npm i -S craco-less
/*
不用this了  const前面
*/
//https://ant.design/docs/react/use-with-create-react-app-cn 定制配置
function App() {

  return (
    <BrowserRouter>
    <Switch>{/*匹配一个*/}
    <Route path='/login' component={Login}></Route>
    <Route path='/' component={Admin}></Route>
    </Switch>
    </BrowserRouter>
  
  );
}

export default App;
