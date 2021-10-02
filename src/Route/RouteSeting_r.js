import { Switch, Route } from "react-router-dom";
import React from 'react';
import Seting_r from '../Compoment/Layout_Seting/Seting_r';

function RouteSeting_r(props) {
    return (
        <div>
 <Switch>
          <Route path="/setting/privacy"><Seting_r /></Route>
            {/* <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
          <Route path="/settings?tab=notifications"></Route>
            <Route path="/"></Route>
          <Route path="/settings?tab=account"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
          <Route to="/settings?tab=security"></Route>
            <Route path="/adpreferences/advertisers/"></Route>
            <Route path="/"></Route>
            <Route path="/"></Route>
          <Route path="/support/?ref=settings"></Route> */}
          <Route path="/"><Seting_r /></Route>
        </Switch>         
        </div>
    );
}

export default RouteSeting_r;