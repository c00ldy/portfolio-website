import React from 'react'
import profilepic from "../assets/coldyphoto.jpg"
import { delay, motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})


function Coldy() {
    return (
        <div className='border-b border-neutral-800 pb-4 lg:mb-35' >
            <div className='flex flex-wrap' >
                <div className=' w-ful lg:w-1/2' >
                    <div className='flex flex-col items-center lg:items-start' >
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl' >Dhruval Mevada</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl text-transparent' >Threat analyst</motion.span>
                        <motion.p variants={container(0.7)} initial="hidden" animate="visible" className='my-2 py-2 max-w-xl font-light tracking-tighter '>I'm currently a Forth-year BE.IT student with experience in web development, freelancing, and expertise in UI/UX design. I've had the opportunity to lead the UI/UX team in the GDSC club. I also have a keen interest in cybersecurity and am actively looking for opportunities and mentors to explore this field further.</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8' >
                    <div className='flex justify-center' >
                        <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className='rounded-2xl' src={profilepic} alt="profilepicture" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Coldy;
