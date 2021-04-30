import Express404css from "./Express404.module.css"
import image from "./15.png"
import Button from "../../components/appcomponents/button"

const Express404 = () => {
    return (
        <div className={Express404css.main}>
            <div className={Express404css.barner}>
            <h3>Contact Us</h3>
                <h3>Help</h3>
                
                
            </div>
            <div className={Express404css.content}>
                <div className={Express404css.leftdiv}>
                    <h3 style={{marginBottom:"30px",fontWeight:"100px",fontSize:"50px"}}>I have bad<br/> news for you</h3>
                    <p>The page you are looking for might be<br /> removed or is temporily Unavailable</p>
                    <Button text="Come Home" style={{height:"40px",width:"120px"}}/>
                    
                </div>
                <div className={Express404css.rightdiv}>
                    <img src={image} alt="image" height="100%" width="100%"/>
                </div>
            </div>
            

        </div>
        
    )
}


export default Express404