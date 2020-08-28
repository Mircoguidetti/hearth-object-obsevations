import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import React, {Suspense} from 'react';

import Page from './components/page.jsx'
import { hot } from 'react-hot-loader/root'

const App = () => (
    <div className='main'>
        <Suspense fallback={null}>
        <BrowserRouter>
            <Switch>
            
                <Route exact path="/" component={Page} />
            </Switch>
            </BrowserRouter>
          </Suspense>
          
    </div>
);

export default hot(App)