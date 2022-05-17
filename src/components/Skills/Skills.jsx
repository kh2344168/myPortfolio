import React,{useState , useEffect ,useContext } from 'react'
import "./Skills.css"
import {BsFillPatchCheckFill} from "react-icons/bs"
import { useInView } from 'react-intersection-observer'
import {activeNavecontext} from "../../App"

const Skills = () => {
  
const [acimationactive , setactive]= useState("noactive");
const [ref , inview] = useInView()
const [refTwo , inviewTwo] = useInView()
const active = useContext(activeNavecontext);

  useEffect(()=>{

    if((inview === true || inviewTwo === true )){
      setactive("active")
      active.setActiveNav("#Skills")
    }else{
      setactive("noactive")
    }
})



  
  return (
    <section ref={ref} id='Skills'>
        <h5>wht skills i have</h5>
        <h2>my skills</h2>
        <div  className='container experience_container'>
          <div className="experience_frontend">
            <h3>frontend development</h3>
            <div  className={"experience_content " + acimationactive }>
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
                <article  className='experience_details'>
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
        <div ref={refTwo}></div>
    </section >
  )
}

export default Skills