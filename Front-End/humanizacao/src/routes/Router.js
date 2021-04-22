import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from '../pages/HomePage/Home'
import Categories from '../pages/CategoriesPage/Categories'
import Login from '../pages/LoginPage/Login'
import SignUp from '../pages/SignUpPage/SignUp'
import NgoRegistration from '../pages/NgoRegistrationPage/NgoRegistration'
import Admin from '../pages/AdminPage/Admin'
import ErrorPage from '../pages/ErrorPage'

export default function Router() {
    return (
    <BrowserRouter>
        <CssBaseline />
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/ngo/categories">
                <Categories/>
            </Route>
            <Route exact path="/users/login">
                <Login/>
            </Route>
            <Route exact path="/users/signup">
                <SignUp/>
            </Route>
            <Route exact path="/users/admin">
                <Admin/>
            </Route>
            <Route exact path="/ngo/registration">
                <NgoRegistration/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}