import React from 'react'
import "./marketing.css"

const MarketingContent = () => {
    return (
        <div className='marketingContainer'>
            <div className='marketing'>
                <h2>Caring is the new Marketing</h2>
                <p> The Nexcent blog is the best place to read about the latest membership insights,<br />
                    trends and more. See who's
                    joining the community, read about how our community <br />
                    are increasing their membership income and lot's more.</p>
            </div>

            <div className='marketingImage'>
                <div className='allImageOfMarketing'>
                    <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-276748,resizemode-75,msid-100708018/top-trending-products/electronics/laptops/best-8-gb-graphics-card-laptops-in-india-for-unparalleled-gaming-performance/best-8-gb-graphics-card-laptops.jpg" alt="" />
                    <div className='headingOfImage'>
                        <p>Creating Streamlined <br /> Safegaurding Proccess with <br /> OneRen</p>
                        <button>Readmore</button>
                    </div>
                </div>
                <div className='allImageOfMarketing'>
                    <img src="https://thumbs.dreamstime.com/b/hands-computer-desk-using-laptop-rustic-wood-background-cup-tea-book-globe-glasses-53253551.jpg" alt="" />
                    <div className='headingOfImage'>
                        <p>What are your safegaurding <br /> responsibilities and how can <br /> you manage them?</p>
                        <button>Readmore</button>
                    </div>
                </div>
                <div className='allImageOfMarketing'>
                    <img src="https://thumbs.dreamstime.com/b/hands-computer-desk-using-laptop-rustic-wood-background-cup-tea-book-globe-glasses-53253551.jpg" alt="" />
                    <div className='headingOfImage'>
                        <p>Revamping the Membership <br /> Model with Triathlon <br /> Australia</p>
                        <button>Readmore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketingContent
