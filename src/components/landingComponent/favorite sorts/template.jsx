import React from "react";
import "./template.css"
const template = () =>{
    return(
        <div className="template">
            <ul>
                <li className="favorite">محبوب ترین دسته بندی ها
                    <h1>گستره وسیعی از محبوب ترین دوره ها</h1>
                </li>
            </ul>

                <img src="images/Rectangle 14.png"></img>

                <div className="box">
                    <span>امنیت شبکه</span>
                    <img src="images/Security Shield.png"></img>
                </div>

                <div className="box">
                    <span>بازی سازی</span>
                    <img src="images/Game Controller.png"></img>
                </div>

                <div className="box">
                    <span>تحلیل داده</span>
                    <img src="images/Pie Chart.png"></img>
                </div>

                <div className="box">
                    <span>طراحی صفحات وب</span>
                    <img src="images/Windows 10.png"></img>
                </div>

        </div>
        
    )
}

export default template;