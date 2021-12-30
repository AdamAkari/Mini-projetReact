import '../style/contact.css'
import Phone from '../image/phone.png'
import Email from '../image/email.png'
import Address from '../image/address.png'
import image from '../image/Adam Akari.png'

function Contact (){
    
return(<div className="c">
<div className="c-bg"></div>
<div className="c-wrapper">
  <div className="c-left">
    <h1 className="c-title">Let's discuss your project</h1>
    <div className="c-info">
      <div className="c-info-item">
        <img src={Phone} alt="" className="c-icon" />
        +216 23 138 607
      </div>
      <div className="c-info-item">
        <img className="c-icon" src={Email} alt="" />
        aakari816@gmail.com
      </div>
      <div className="c-info-item">
        <img className="c-icon" src={Address} alt="" />
        51 Rue de Palestine (Lafayette)
      </div>
    </div>
    <div className="adam">
    <img src={image}/>
    </div>
  </div>
 
</div>
</div>
)
}
export default Contact