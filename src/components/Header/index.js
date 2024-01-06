import { Link,withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import './index.css'

const Header=()=>(
    <div className="app-container">
        <img src="https://doographics.com/assets/dg/images/home/DooGraphics-Logo.png" alt='website-logo' className="website-logo-image"/>
        <ul type='none' className="nav-container">
            <li className="nav-items">
                <Link to="/" className="link-text">Home</Link>
            </li>
            <li className="nav-items">
                <Link to="/products" className="link-text">
                    Products
                </Link>
            </li>
            <li className="nav-items">
                <Link to="/cart" className="link-text">
                    Cart
                </Link>
            </li>
        </ul>
    </div>
)

export default withRouter(Header)