import pic from  './WhatsApp Image 2025-02-16 at 7.07.30 AM (1).jpeg'

export function Home(){

    return(
           <div className = "text">
               <div className ="box">
                       <div id ="img">
                        <img id = "pic" src = {pic} alt ="My profile"/>
                        </div>
       
                       <div id ="content">
                       <h2>Hello It's Me</h2>
                       <h1>Vanampally Manasa</h1>
                       <p>A full-stack web developer skilled in both front-end and back-end development. I love building dynamic, responsive, and user-focused web applications using tools like React and Django.
                       </p>
                       <button><a href ="manasa(resume1).pdf"   download>Download Resume</a></button>
                      </div>
       
                     </div>
       
               </div>
    )
}