import React from 'react'
import {Switch, Route} from 'react-router'

import Home from './home/Home'

import Tech from './../technology/Tech'

const Routes = () => (
    <Switch style={{overflow: 'auto'}}>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />

        <Route exact path='/technology' component={Tech} />
        <Route exact path='/design' component={() => <h2>design page</h2>} />
        <Route exact path='/culture' component={() => <h2>culture page</h2>} />
        <Route exact path='/business' component={() => <h2>business page</h2>} />
        <Route exact path='/politics' component={() => <h2>politics page</h2>} />
        <Route exact path='/opinion' component={() => <h2>opinion page</h2>} />
        <Route exact path='/science' component={() => <h2>science page</h2>} />
        <Route exact path='/health' component={() => <h2>health page</h2>} />
        <Route exact path='/style' component={() => <h2>style page</h2>} />
        <Route exact path='/travel' component={() => <h2>travel page</h2>} />

        {/* Catch : Not found */}
        <Route path="/" component={() => <h2>not found page</h2>} />
    </Switch>
)

export default Routes