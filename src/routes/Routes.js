import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Layout from "../componentes/layout/Layout"
import Home from "../pages/home/Home"
import ToDo from "../pages/To-Do/ToDo"
import PokeApi from '../pages/pokeApi/PokeApi'


const Routes = () => {
  return (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route path='/' element={<Home />} />
            <Route path="ToDo" element={<ToDo />}/>
            <Route path="Poke" element={<PokeApi />} />
        </Switch>
    </Layout>
    </BrowserRouter>
  )
}

export default Routes