import { Home } from './home'
import {About} from './about'
import { Certificate } from './certificate'
import { Contact } from './contact'
import  {Projects} from './projects'
import { Skills } from './skills'
import { Navibar } from './navibar'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 


 export function Routes1(){

    return(
        <>
        <BrowserRouter>
           <Navibar/>
           <Routes >
           <Route path = "/home" element ={<Home/>}/>
            <Route path = "/about" element ={<About/>}/>
            <Route path = "/certificate" element ={<Certificate/>}/>
            <Route path = "/contact" element ={<Contact/>}/>
            <Route path = "/projects" element ={<Projects/>}/>
            <Route path = "/skills" element ={<Skills/>}/>
           </Routes>
        </BrowserRouter>
        </>
    )
}