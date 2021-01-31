import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain } from '@fortawesome/free-solid-svg-icons'
    

    const  MainLayout = (props) => {

        return (
            <div className="blog-container">
                <div className="navbar">
                    <div className="logo">
                    <a href="/">Dr3@mEr</a>
                    </div>
                    <div className="navRight">
                        <div className="navLinks">
                        <a href="https://web.facebook.com/lost2dreamer" className="fa fa-facebook">
                        </a>
                        </div>
                        <div className="navLinks">
                           
                            <a href="https://twitter.com/lostdre29538923" className="fa fa-twitter">  </a>
                        </div>
                        <div className="navLinks">
                            <a href="https://github.com/Last-dreamer" className="fa fa-github"></a>
                        </div>
                        <div className="navLinks">
                            <a href="https://www.instagram.com/lost2dreamer/" className="fa fa-instagram"></a>
                        </div>
                    </div>
                </div>
                { props.children }

                <div className="foot">                    
                <div className="footer">
                    <h4> ©&nbsp;Dr3@mEr. 2021</h4>
                </div>
            </div>
            </div>
            
        )
    }


    export default MainLayout