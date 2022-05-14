import React,{useState , useEffect} from 'react'
import "./Experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs"
import { useInView } from 'react-intersection-observer'

const Experience = () => {
const [active , setactive]= useState("noactive");
const [ref , inview] = useInView()

  useEffect(()=>{

    if(inview == true){
      setactive("active")
    }else{
      setactive("noactive")
    }
  
  })



  
  return (
    <section id='experience'>
        <h5>wht skills i have</h5>
        <h2>my experience</h2>
        <div ref={ref} className='container experience_container'>
          <div className="experience_frontend">
            <h3>frontend development</h3>
            <div  className={"experience_content " + active }>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div className='ex_text'>
                    <h4>HTML</h4>
                    <span><small className='text-light'></small></span>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div className='ex_text'>
                    <h4>css</h4>
                    <span><small className='text-light'></small></span>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div className='ex_text'>
                    <h4>javascript</h4>
                    <span><small className='text-light'></small></span>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div className='ex_text'>
                    <h4>bootstrap</h4>
                    <span><small className='text-light'></small></span>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div className='ex_text'>
                    <h4>jquery</h4>
                    <span><small className='text-light'></small></span>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details_icon"/>
                  <div className='ex_text'>
                    <h4>react</h4>
                    <span><small className='text-light'></small></span>
                  </div>
                </article>
            </div>
          </div>
          {/*==================== END FRONTEND ============================ */}
        </div>
    </section>
  )
}

export default Experience
