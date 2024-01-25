import React from 'react'
import "./aticalsOne.css"
import articalOneImg from "../images/articalOneImg.png"
const ArticalOne = () => {
    return (
        <>
            <div className="grid-container">
                <div className="grid-item">
                    <div className='articaloneDivImg'>
                        <img src={articalOneImg} alt="" />
                    </div>
                </div>
                <div className="grid-item">
                    <div className='articaloneDivHeadings'>
                        <h2>The unseen of spending three years at Pixelgrade</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempore, magnam alias omnis nobis dicta inventore animi ipsam perspiciatis laboriosam totam deserunt voluptas sint blanditiis fugiat, atque laudantium unde et!
                            Accusamus quasi repellendus quod totam officia possimus doloribus molestias perferendis magni minus aperiam voluptatum adipisci non quae molestiae, dicta deleniti repudiandae, veniam ratione voluptate doloremque! Libero assumenda rem qui aliquid.</p>
                    </div>
                    <div className='articalOneLearnMore'>
                        <button>Learn More</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ArticalOne
