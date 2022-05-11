import './header.css'

function Header () {
    return (
     
        <div className="header">
        <div className="container">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item mac__logo">MacBro</li>
            <li className="header__item">mac </li>
            <li className="header__item">iphone bro</li>
            <li className="header__item">ipad bro</li>
            <li className="header__item">airpods bro</li>
            <li className="header__item">watchbro</li>
            <li className="header__item">smartfonlar
            <i className='bx bxs-chevron-down' ></i>
            </li>
            <li className="header__item">aksesuarlar
            <i className='bx bxs-chevron-down' ></i></li>
            <li className="header__item">
                <i className='bx bxs-shopping-bag' ></i></li>
            <li className="header__item">
                <i className='bx bx-search-alt-2' ></i></li>
            <li className="header__item">
              <i className='bx bx-log-in'></i>
            </li>
            <li className="header__item">
              <select className="header__select" name="lang" id="lang">
                <option className="option" value="uzbek">uz</option>
                <option className="option" value="uzbek">ru</option>
                <option className="option" value="uzbek">eng</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    )
}

export default Header;