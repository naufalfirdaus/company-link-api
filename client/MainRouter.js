import React from 'react'
import { Switch, Route} from "react-router-dom";
import landing from './views/landings'
import detail from './views/detail'
import login from './views/user/userLogin'
import signup from './views/user/userRegister'
import PrivateRoute from './auth/PrivateRoute'
import userDetail from './views/user/userDetail';
import userUpdate from'./views/user/userUpdate';
import userUpdatePass from './views/user/userUpdatePass';
import { Helmet } from "react-helmet";
import News from './components/layout/News'
import NewsD from './components/layout/NewsDetail'
import page404 from './views/page404';
import icon from "./assets/images/logo.svg";
const MainRouter = () => {
  return (
  <>
    <Helmet>
    <link rel="shortcut icon" href={icon} />
    </Helmet>
    <Switch>
    <Route exact path ="/signup/" component={signup}/>
    <Route exact path ="/signin/" component={login}/>
    <Route exact path ="/" component={landing}/>
    <PrivateRoute exact path ="/profile/" component={userDetail}/>
    <PrivateRoute exact path ="/user_update/" component={userUpdate}/>
    <PrivateRoute exact path ="/user_update_pass/" component={userUpdatePass}/>
    <PrivateRoute exact path ="/detail/:id" component={detail}/>
    <Route exact component={page404}/>
    </Switch>
  </>
  )
}

export default MainRouter