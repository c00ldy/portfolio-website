import React from "react";


import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Navbar() {
    return (
        <>
            <nav className="mb-20 flex items-center justify-between py-6">
                <div className="flex flex-shrink-0 items-center" >
                    <a href="https://drive.google.com/file/d/1stkcWTnHSAvueL-w2V2E_hoDV3GizInV/view?usp=sharing" target="_blank"><img className="m-2 " src={logo} alt="logo" /></a>
                </div>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl" >
                    <a href="https://www.linkedin.com/in/dhruvalmevada/" target="_blank"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/ig_dhruval/" target="_blank"><FaInstagram /></a>
                    <a href="https://www.youtube.com/@c0ldy07" target="_blank"><FaYoutube /></a>
                    <a href="https://www.github.com/c00ldy" target="_blank"><FaGithub /></a>
                </div>
            </nav>
        </>
    );
}

export default Navbar
