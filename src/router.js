import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/home'
import  MainLayout  from "./components/layouts/MainLayout"
import Detail from './components/pages/detail';

const router = () => {
    return (
        <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/:slug" component={ Detail }/>
            </Switch>
        </MainLayout>
        </BrowserRouter>
    )
}

export default router;