import pic from './IMG_20250427_122616.jpg'
import './certificate.css'
export function Certificate(){

    return(
           <div id ="certificate"> 
           <h1 id = "cer">My Certificates</h1>
           <div id ="certificatebox">
           <img id = "certificatepic" src ={pic} alt = "certificate"/>
           <p id ="p">Successfully earned a Web Development Certificate, demonstrating proficiency in HTML, CSS, JavaScript, and React (April 2025).</p>
         </div>        
           </div>
    )
}