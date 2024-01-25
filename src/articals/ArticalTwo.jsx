import React from 'react'
import articalTwo from "../images/articalTwoImg.png"
import "./articalTwo.css"

const ArticalTwo = () => {

    return (
        <div>
            <div>
                <div className="articalTwo-grid-container">
                    <div className="articalTwo-grid-item">
                        <div className='articalTwoDivHeadings'>
                            <h2>How to design your site footer like we did</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempore, magnam alias omnis nobis dicta inventore animi ipsam perspiciatis laboriosam totam deserunt voluptas sint blanditiis fugiat, atque laudantium unde et!
                                Accusamus quasi repellendus quod totam officia possimus doloribus molestias perferendis magni minus aperiam voluptatum adipisci non quae molestiae, dicta deleniti repudiandae, veniam ratione voluptate doloremque! Libero assumenda rem qui aliquid.</p>
                        </div>
                        <div className='articalTwoLearnMore'>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="articalTwo-grid-item">

                        <div className='articaloneDivImg'>
                            <img src={articalTwo} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ArticalTwo
