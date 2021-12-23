import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexContainer from '../containers/IndexContainer';
import WelcomeContainer from '../containers/WelcomeContainer';
// import RFCContainer from '../containers/RFCContainer';
// import ApiContainer from '../containers/ApiContainer';
// import DomicilioContainer from '../containers/DomicilioContainer';

const App = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <IndexContainer />
                </Route>
                <Route exact path="/welcome">
                    <WelcomeContainer />
                </Route>
                {/* <Route exact path="/rfc">
                    <RFCContainer />
                </Route>
                <Route exact path="/api">
                    <ApiContainer />
                </Route>
                <Route exact path="/domicilio">
                    <DomicilioContainer />
                </Route> */}
                <Route>
                    <div className="container mt-5 text-center">
                        <h1>404 Not found</h1>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;