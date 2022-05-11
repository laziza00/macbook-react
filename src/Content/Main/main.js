import './main.css'
import slide1 from '../../images/slide1.webp'
import slide2 from '../../images/slide6.webp'
import slide3 from '../../images/slide7.webp'
import slide4 from '../../images/slide4.webp'
import slide5 from '../../images/slide5.webp'
import slide6 from '../../images/slide6.webp'
import slide7 from '../../images/slide7.webp'
import slide8 from '../../images/slide3.webp'
import slide9 from '../../images/slide9.webp'


function Main() {
    return (
        <div className="tahlil">
  <div className="container">
    <div className="tahlil__btn-box">
      <button className="tahlil__btn btn1"> Tahlil</button>
      <button className="tahlil__btn btn2">Texnik hususiyatlar</button>
    </div>
    <div className="tahlil__text-box">
      <p className="tahlil__text text1">Eng ingichka va yengil Apple noutbuki endi M1 chipi tufayli yanada kuchliroq ishlaydi. 8 yadroli protsessor sizning vazifalaringizni katta tezlik blan amalga oshiradi. 8 yadroli GPU-ning to'liq quvvatidan foydalanib, grafikani talab qiladigan dasturlar va o'yinlarning keyingi darajasiga chiqing. Mashinani o'rganish uchun 16 yadroli Neural Engine yordamida operatsiyalarini tezlashtiradi va 18 soatgacha zaryad olmasdan ishlaydi. MacBook Air hali ham ixcham, lekin hozir u ancha kuchliroq.</p>
      <p className="tahlil__text text2">Ekran: 13,3 "(2560x1600) <br/>

        Matritsa: IPS<br/>
        
        Protsessor: Apple M1 (8x3200 MGts)<br/>
        
        Video karta: Apple grafikasi 8 yadroli, Apple grafikasi 7 yadroli<br/>
        
        Ulagichlar: Mikrofon / naushniklar kombinatsiyasi, Thunderbolt / USB 4 x 2<br/>
        
        USB Type-C funktsiyasi: Quvvatni etkazib berish, Thunderbolt 3, Thunderbolt 4<br/>
        
        Simsiz interfeyslar: Wi-Fi 802.11ax, Bluetooth 5.0<br/>
        
        Batareya quvvati: 49,9 Wh<br/>
        
        Ish vaqti: 18 soat<br/>
        
        Operatsion tizim: macOS<br/>
        
        Hajmi: 304.1x212.4x16.1 mm<br/>
        
        Og'irligi: 1,29 kg<br/>
        
        </p>

        <h2 className="tahlil__title" >O'xshash mahsulotlar</h2>
        <div className="tahlil__slide-box" >
          <button className="tahlil__btn-slide left">
            <i className='bx bx-chevron-left'></i>
          </button>
          <button className="tahlil__btn-slide right">
            <i className='bx bx-chevron-right'></i>
          </button>
          <ul className="tahlil__list" >
            <li className="tahlil__item">
              <img className="tahlil__img" src={slide1} alt="img"/>
            </li>
            <li className="tahlil__item">
              <img className="tahlil__img" src={slide2} alt="img"/>
            </li>
            <li className="tahlil__item">
              <img className="tahlil__img" src={slide3} alt="img"/>
            </li>
            <li className="tahlil__item">
              <img className="tahlil__img" src={slide4} alt="img"/>
            </li>
            <li className="tahlil__item">
              <img className="tahlil__img" src={slide5} alt="img"/>
            </li>
            <li className="tahlil__item">
              <img className="tahlil__img" src={slide6} alt="img"/>
            </li>
            <li className="tahlil__item">
              <img className="tahlil__img" src={slide7} alt="img"/>
            </li>
            <li className="tahlil__item">
              <img className="tahlil__img" src={slide8}alt="img"/>
            </li>
            <li className="tahlil__item">
              <img className="tahlil__img" src={slide9} alt="img"/>
            </li>
          </ul>
        </div>
    </div>
  </div>
</div>
    )
}

export default Main;