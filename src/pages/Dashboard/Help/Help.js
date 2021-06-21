import React from 'react'

import Helpcss from "./Help.module.css"
import FAQ from "../../LandingPage/F.A.Q/FAQ"


function Help() {

  

    return (
        <div className={Helpcss.main}>
            <div className={Helpcss.uppertext}>

            </div>
            <div className={Helpcss.lowertext}>
                <FAQ/>

            </div>

            

            
        </div>
    )
}

export default Help
