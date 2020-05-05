import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './scss/app.scss'
import * as ServiceWorker from '../dist/worker'

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)

ServiceWorker.register()
