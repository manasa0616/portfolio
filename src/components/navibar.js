import './navibar.css'
import { Link } from 'react-router-dom'
export function Navibar(){

    return(
        <div className = "box2">
            <h2>Portfolio</h2>
            <div  className = "nav">
                <li><Link to ="/home">HOME</Link></li>
            <li><Link to = "/about">ABOUT</Link></li>
            <li><Link to = "/skills">SKILLS</Link></li>
            <li><Link to = "/projects">PROJECTS</Link></li>
            <li><Link to = "/certificate">CERTIFICATES</Link></li>
            <li><Link to ="/contact">CONTACT</Link></li>
            </div>
        </div>
    )
}