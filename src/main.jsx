import { Route, Switch } from "react-router-dom";
import Card from "./components/apps/card";
import Users from "./components/apps/users";

function Main() {
    return ( 
        <>
            <Switch>
                <Route exact path={'/'} component={Users}/>
                <Route exact path={'/user/:id'} component={Card}/>
            </Switch>
        </>
     );
}

export default Main;