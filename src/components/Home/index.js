
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { FaArrowRight } from "react-icons/fa";
import Header from '../Header'
import './index.css'

const Home=()=>(
    <div className="home-container">
        <Header/>
        <div className="hero-container">
            <img src="https://s3-alpha-sig.figma.com/img/b958/9bc0/1aa1b3314e80bff2d0c88522a5f26608?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rjtir1SqUT1ATdGzRXishuCaBFMwdE9f328CtFaXXSMkfvZBOpnlhJMFKlXtQUOPkQD8fDB6q218eA7lxbhvs460s3uw~-QpAHMfREmEalhk7o6UWr5HjTS0Jqe6~G43Cx7Z7UbJbEv7rKNP41~aZxyrz1utnwwa6uY-ffKKfIFlm~V48JTbBcdGCwgLKZAc5iOWXCdFN74Ljwrw0medUFqvovhVT5exq3lcxSNsyGsoMFVd5bdIIPcqmqtGXWdkdHIT0VihLdJ1vK7eeg6yPieGDTNLujdAYL3xfRfLab~G149dqLAXhua1zG5cKaB9mFGR4q2kh-FoQhlBgZ-MyQ__" alt="hero-section-img" className="hero-image"/>
            <div className="hero-content">
                <img src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1704534836/star_vjpysq.png" alt="star-img" className="star-image"/>
                <h1 className="head">NEW WEEK,</h1>
                <h1 className="head">NEW ARRIVALS</h1>
                <button type="button" className="shop-now-button">
                <Link to="/products" className="link-text">
                    Shop Now <FaArrowRight className='arrow-icon'/>
                </Link>    
                </button>
            </div>
        </div>
    </div>
)

export default Home