import Reviewcss from "./Review.module.css";

const Reviews = () => {
  return (
    <div className={Reviewcss.main}>
          <div className={Reviewcss.maintext}>
              <h1>Customer Stories<br/></h1> 
              <p>Hundreds of Kumasi businesses are using Express Delivery</p>
      </div>
      <div className={Reviewcss.mainreview}>
              <div className={Reviewcss.reviewcard1}>
              <div className={Reviewcss.img1}></div>
                  <div className={Reviewcss.text1}>
                      <p>
                      "What works for us is that it's <br/>
                      simple, it's integrated into our<br/>
                       systems and it's digital, it's<br/>
                        reliable and the value  <br/>
                         proposition stacks up."  <br />
                      
                          
                      </p>
                      <p className="name">
                              Samuel Kwofie
                          </p>
                      
          </div>
        
        </div>
        <div className={Reviewcss.reviewcard2}>
        <div className={Reviewcss.img2}></div>
                  <div className={Reviewcss.text2}>
                      <p className="rtext">
                          "Express Deliveries shipping rates <br />
                      are
                      really competitive, sending<br/>
                       out the huge volumes we do<br/>
                       and it saves us about one<br/>
                       minute per order, which is huge!"<br />
                          
                        
                      </p>

                      <p className="name"> John Mensah</p>
                      
                      
                      
                      

                      
          </div>
        </div>
        <div className={Reviewcss.reviewcard3}>
        <div className={Reviewcss.img3}></div>
                  <div className={Reviewcss.text3}>

                      <p>
                      "Expess Delivery streamlines the<br/>
                      whole delivery experience.<br/>
                       The dashboard makes <br/>
                        tracking my deliveries easy,<br/>
                         and in the first few months<br/>
                         I saved over $1000. It has bee<br/>
                          so good for our business!"<br />
                         

                      </p>
                      <p className="name">
                              Felix Kwofie
                          </p>
                    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
