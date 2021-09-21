import React from 'react'
import './Content.css'
import jacket from '../../../images/jacket.png'
const Content = () => {
    return (
        <div className="content">
            <div className="box left">
                <img className="img-1" src={jacket} alt="" />
                <img className="img-2" src={jacket} alt="" />
                <img className="img-3" src={jacket} alt="" />
            </div>
            <div className="box">
                <h1>About Us</h1>
                <p>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit</p>
            </div>
        </div>
    )
}

export default Content
