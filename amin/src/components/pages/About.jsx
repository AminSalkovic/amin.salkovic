import React from 'react'
import * as MdIcons from 'react-icons/md'
import * as TbIcons from 'react-icons/tb'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import './About.css'

const About = () => {

  return (
    <div className='about'>
       
       <div className="about-me">
       <h5><MdIcons.MdArrowBackIosNew className='tag'/> h2 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
        <h1>Me,My self and I</h1>
      <h5><MdIcons.MdArrowBackIosNew className='tag'/> /h2 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
      <h5><MdIcons.MdArrowBackIosNew className='tag'/> p <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
        <p >I'am Front-End developer experienced with <br />
           React JS. I build websites and applications. <br />
            I like to learn new things.
        </p>
      <h5><MdIcons.MdArrowBackIosNew className='tag'/> /p <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
      <h5><MdIcons.MdArrowBackIosNew className='tag'/> h2 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
      <h1 >Education</h1>
      <h5><MdIcons.MdArrowBackIosNew className='tag'/> /h2 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
      <h5><MdIcons.MdArrowBackIosNew className='tag'/> h3 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
        <h2>International University of Novi Pazar</h2>
     <h5><MdIcons.MdArrowBackIosNew className='tag'/> /h3 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
     <h5><MdIcons.MdArrowBackIosNew className='tag'/> p <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
       <p >
        The IT study program provides the latest  professional <br />
        and scientific knowledge in the fields of : programming <br />
        and programming languages , databases and <br />
        information systems , computer networks web design <br />
        and internet programming.
        </p>
      <h5><MdIcons.MdArrowBackIosNew className='tag'/> /p <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
      <h5><MdIcons.MdArrowBackIosNew className='tag'/> h2 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
       
       </div>
       <div className="education">
         <div className="international-picture">
                <div className="images">
              <div className="front">
                  <img src="./images/internationallogo.jpg" alt="" />
              </div>
              <div className="back">
                   <img src="./images/internationalUniversity.jpg" alt="" />
              </div>
                  </div> 
              </div>
       </div>
       <div className="school-of-code">
              <h1>School of code</h1>
            <h5><MdIcons.MdArrowBackIosNew className='tag'/> /h2 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
            <h5><MdIcons.MdArrowBackIosNew className='tag'/> h3 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
                    <h2 >Organizer Centar NIT</h2>
            <h5><MdIcons.MdArrowBackIosNew className='tag'/> /h3 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
            <h5><MdIcons.MdArrowBackIosNew className='tag'/> p <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
                    <p > At the code school, students <br />
                      learn how to build applications and websites. <br />
                      I got certification of frontend skills.</p>
            <h5><MdIcons.MdArrowBackIosNew className='tag'/> /p <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
            <h5><MdIcons.MdArrowBackIosNew className='tag'/> /h3 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
                    <h1 >Skils</h1>
            <h5><MdIcons.MdArrowBackIosNew className='tag'/> p <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
            <h5><MdIcons.MdArrowBackIosNew className='tag'/> /h3 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
                    <p >I mastered the frontend techniques and <br />
                        technologies .I have more than 10   <br />
                      websites and application behind me. <br />
                      So I have experience in frontend.
                    </p>
            <h5><MdIcons.MdArrowBackIosNew className='tag'/> p <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5> 
       </div>
       <div className="skills">
       <div className="icons">
                  <div className="react">
                    <span><FaIcons.FaReact className='React'/></span>
                  </div>
                  <div className="javascript">
                    <span><TbIcons.TbBrandJavascript  className='JavaScript'/></span>
                  </div>
                  <div className="html">  
                    <span><AiIcons.AiOutlineHtml5  className='Html'/></span>
                  </div>
                  <div className="css">
                    <span><TbIcons.TbBrandCss3  className='Css'/></span>
                  </div>
                </div>
       </div>
    
    </div>
  )
}

export default About