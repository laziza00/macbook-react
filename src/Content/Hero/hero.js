import './hero.css'
import heroImgGold from '../../images/macbookAir.webp'
import heroImgSilver from '../../images/macGrey1.jpg'
import heroImgGray from '../../images/macGrey2.jpg'

function Hero () {
    return (
        <div className="hero mac">
        <div className="container">
          <div className="mac__big-box">
          <div className="mac__img-box">
            <ul className="mac__slider-box">
                <li className='mac__item'>
                    <img className='mac__img' src={heroImgGold} ></img>
                </li>
                <li className='mac__item'>
                    <img className='mac__img' src={heroImgSilver} ></img>
                </li>
                <li className='mac__item'>
                    <img className='mac__img' src={heroImgGray} ></img>
                </li>
              </ul>
              <div className="mac__slider-btn">
                  <button className='mac__img-btn'>
                      <img className='mac__img-inner' src={heroImgGold}>

                      </img>
                  </button>
                  <button className='mac__img-btn'>
                      <img className='mac__img-inner' src={heroImgGold}>

                      </img>
                  </button>
                  <button className='mac__img-btn'>
                      <img className='mac__img-inner' src={heroImgGold}>
                      </img>
                  </button>
                  <button className='mac__img-btn'>
                      <img className='mac__img-inner' src={heroImgGold}>
                      </img>
                  </button>
                  <button className='mac__img-btn'>
                      <img className='mac__img-inner' src={heroImgGold}>
                      </img>
                  </button>
            </div>
            <button className="mac__full-btn" >
              <i className='bx bx-fullscreen'></i>
            </button>
          </div>
          <div className="mac__info">
            <div className="mac__info-desc">
              <h2 className="mac__title">MacBook Air 13-inch M1/16/256 Gold</h2>
                <button className="mac__btn">
                  <i className='bx bx-log-in'></i>
                </button>
            </div>
          
              <h3 className="mac__ram">ram</h3>
              <div className="mac__ram-box" >
        
              </div>
              <h3 className="mac__ram">hotira hajmi</h3>
              <div className="mac__ram-hotira" >
              </div>
              <h3 className="mac__ram">ranglar</h3>
              <div className="mac__ram-color" >
                <button className="mac__ram-btn color">
                  <span className="color1"></span> Gold
                </button>
                <button className="mac__ram-btn color">
                  <span className="color1"></span> Silver
                </button>
                <button className="mac__ram-btn color">
                  <span className="color1"></span> Cosmic Gray
                </button>
              </div>
              <div className="macaddbox add">
              <div className="addBox">
                <div className="add-btn-box">
                    <button className="minusBtn">
                        <i className='bx bx-minus'></i>
                    </button>
                    <input className="numberInput" type="number" value="1"/>
                    <button className="plusBtn">
                        <i className='bx bx-plus'></i>
                    </button>
                </div>
            </div>
          </div>
              <div className='mac__price-inner'>
                <p className="mac__price">12 497 000 so'm</p>
                <p className="mac__price  mac__price2">14 621 000 so'm</p>
                <button className="mac__price-btn btn-primary">Savatchaga qo'shish</button>
                <button className=" mac__price-btn btn no-active">Taqqoslash</button>
              </div>
            
          </div>
        </div>
    </div>
</div>
        
    )
}
export default Hero;