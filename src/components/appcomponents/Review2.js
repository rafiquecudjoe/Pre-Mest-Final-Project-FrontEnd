import Reviewcss from "../../Reviews/Review.module.css"

const Review2 = () => {

    return (
      
        <div className={Reviewcss.reviewcard2}>
          <div className={Reviewcss.img2}>
          
          </div>
          <div className={Reviewcss.text2}>
            <em className="rtext">
              "Express Deliveries shipping rates <br />
              are really competitive, sending
              <br />
              out the huge volumes we do
              <br />
              and it saves us about one
              <br />
              minute per order, which is huge!"
              <br />
            </em>

            <p className="name"> John Mensah</p>
          </div>
        </div>
        
    )
}


export default Review2 
