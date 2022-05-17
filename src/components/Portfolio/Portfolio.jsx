import React,{useEffect ,useContext } from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/portfolio7.jpg";
import IMG2 from "../../assets/portfolio8.PNG";
import IMG3 from "../../assets/portfolio9.PNG";
import { useInView } from 'react-intersection-observer'
import {activeNavecontext} from "../../App"


const data= [
  {
    id: 1,
    image: IMG1,
    // github: "https://github.com",
    demo: "https://kh2344168.github.io/gitstatus/"
  },
  {
    id: 2,
    image: IMG2,
    // github: "https://github.com",
    demo: "https://kh2344168.github.io/elzero/"
  },
  {
    id: 3,
    image: IMG3,
    // github: "https://github.com",
    demo: "https://kh2344168.github.io/template/"
  },

]


const Protfolio = () => {

  const [ref , inview] = useInView()
  const active = useContext(activeNavecontext);
  
    useEffect(()=>{
      if(inview === true){
        active.setActiveNav("#portfolio")
      }else{

      }
  })

  


  return (
    <section ref={ref} id='portfolio'>
      <h5>my recent work</h5>
      <h2>portfolio</h2>
      <div  className='container portfolio_container'>
        {
          data.map(({id, image ,title , github ,demo}) =>{
            return (
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item_imgae">
                <img src={image} alt={title} />
              </div>
                <h3>this is a portfolio item title</h3>
                <div className="portfolio_item_cta">
                  {/* <a href={github} className='btn'>github</a> */}
                  <a href={demo} className='btn btn_primary' target="_blank"  rel="noreferrer" >liveDemo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Protfolio