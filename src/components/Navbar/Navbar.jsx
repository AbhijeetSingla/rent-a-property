import './Navbar.css'
import logo from '../../media/icons/e_logo.svg';
function Navbar() {
    return (
        <>
            <nav className="nav-base flex">
                <a href='/' className="txt-decor-none">
                    <div className="primary-nav-logo flex">
                        <img src={logo} alt="Navbar logo" width="25px" />
                        <h3 >Estatery</h3>
                    </div>
                </a>
                <input type="checkbox" id='nav-toggle' className='nav-toggle d-none'/>
                <ul className="list-style-none flex mobile-nav">
                    <li className='active-tab'>Rent</li>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>Manage Property</li>
                    <li>Resources</li>
                </ul>
                <label htmlFor='nav-toggle' className='mobile-nav-button'><span className='d-none'>Menu</span></label>
            </nav>

        </>
    );
  }
  
export default Navbar;