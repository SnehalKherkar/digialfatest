import React,{useState} from 'react'
import "./headers.css"
import logo from "../images/digialphalogo.png"

const Headers = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            <div className="navbar">
                <div className="logo"><img src={logo} alt="" /></div>
                <div className="togglebutton" onClick={handleToggle}>
                    ☰
                </div>
                <div className={`navTags ${isNavOpen ? 'open' : ''}`}>
                    <p>Home</p>
                    <p>Service</p>
                    <p>Feature</p>
                    <p>Product</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>
                <div className='loginbutton'>
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>


        </div>
    )
}

export default Headers
