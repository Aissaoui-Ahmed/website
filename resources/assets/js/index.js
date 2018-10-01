import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import {AppContainer} from 'react-hot-loader'
import {MuiThemeProvider, createMuiTheme, createGenerateClassName, jssPreset} from '@material-ui/core/styles'

import rtl from 'jss-rtl'
import JssProvider from 'react-jss/lib/JssProvider'

import App from './App'

const theme = createMuiTheme({
    direction: 'rtl',
})

ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <Route component={App} />
            </MuiThemeProvider>
        </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
)

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept();
}