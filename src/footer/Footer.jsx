import React from "react";
import "./footer.css";
import footerLogo from "../images/footerLogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

function Footer() {
    return (
        <div className="footer-container">
            <div className="logo-section">
                <div className="logo-container">
                    <img src={footerLogo} alt="logo" />
                </div>
                <div className="details">
                    <span>
                        Copyright
                        <span>
                            <CopyrightIcon className="copy-right" />
                        </span>{" "}
                        2020 Nexcent ltd.
                    </span>
                    <br />
                    <span>All rights reserved </span>
                </div>
                <div className="icons">
                    <div className="InstaClass">
                        <InstagramIcon className="icon" />
                    </div>
                    <div className="InstaClass">
                        <LanguageIcon className="icon" />
                    </div>
                    <div className="InstaClass">
                        <TwitterIcon className="icon" />
                    </div>
                    <div className="InstaClass">
                        <YouTubeIcon className="icon" />
                    </div>
                </div>
            </div>
            <div className="sections-grid">
                <div className="sections company">
                    <h1>Company</h1>
                    <h3>About us</h3>
                    <h3>Blog</h3>
                    <h3>Contact us</h3>
                    <h3>Pricing</h3>
                    <h3>Testimonials</h3>
                </div>

                <div className="sections support">
                    <h1>Support</h1>
                    <h3>Help Center</h3>
                    <h3>Terms of service</h3>
                    <h3>Legal</h3>
                    <h3>Privacy policy</h3>
                    <h3>Status</h3>
                </div>

                <div className="sections stay-up-to-date">
                    <h1>Stay up to date</h1>
                    <div className="input-container">
                        <input type="text" name="" id="" placeholder="Your email address" />
                        <span className="near-me-icon"><NearMeOutlinedIcon /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;