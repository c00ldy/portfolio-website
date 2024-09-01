import React from 'react'
import Newabout from "../assets/about.jpg"
import { motion } from "framer-motion"
import { DiClojureAlt } from 'react-icons/di'

function About() {
    return (
        <div className='border-b border-neutral-900 pb-4' >
            <h1 className='my-20 text-center text-4xl' >About <span className='text-neutral-500'>"c0ldy"</span></h1>
            <div className='flex flex-wrap' >
                <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration:0.5}} className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center' >
                        <img className='rounded-2xl' src={Newabout} alt="justcontainer" />
                    </div>
                </motion.div>
                <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0 , x:100}} transition={{duration:0.5}} className='w-full lg:w-1/2' >
                    <div className='flex justify-center lg:justify-start' >
                        <p className='my-2 max-w-xl py-6' >I'm a passionate tech enthusiast with a strong foundation in web development and UI/UX design, honed through over three years of experience. Currently pursuing a Bachelor of Engineering in Information Technology, I've led UI/UX teams, contributed to projects like dark web monitoring tools, and am exploring the field of cybersecurity through my internship as a Threat Analyst at BrandSek. With skills in HTML, CSS, JavaScript, React, and a keen interest in continuous learning, I'm committed to bridging the gap between design and technology while seeking new challenges and opportunities for growth.</p>
                    </div>
                    </motion.div>
            </div>
        </div>
    )
}

export default About
