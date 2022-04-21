import React from 'react'
import { BrowserRouter, Route, Link, Switch, Redirect} from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import Gallery from './components/Gallery'
import Products from './components/Products'

 const Router = () => {
  return (

    <BrowserRouter>
        <>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/products" component={Products} />
            <Route component={PageNotFound} />
        </Switch>
        </> 
    </BrowserRouter> 
    
  )
}

export default Router
