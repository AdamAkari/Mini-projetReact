import '../style/toggle.css'
import Sun from '../image/sun.png'
import Moon from '../image/moon.png'


function Toggle(){  

 return   ( <div className="t">
 <img src={Sun} alt="" className="t-icon" />
 <img src={Moon} alt="" className="t-icon" />
 </div>
)
}
export default Toggle