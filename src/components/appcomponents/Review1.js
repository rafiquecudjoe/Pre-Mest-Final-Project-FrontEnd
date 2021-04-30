import Reviewcss from "../../Reviews/Review.module.css"

const Review1 = () => {

    return (
        <div className={Reviewcss.reviewcard1}>
<div className={Reviewcss.img1}>
</div>
<div className={Reviewcss.text1}>
  <em>
    "What works for us is that it's <br />
    simple, it's integrated into our
    <br />
    systems and it's digital, it's
    <br />
    reliable and the value <br />
    proposition stacks up." <br />
  </em>
  <p className="name">Samuel Kwofie</p>
</div>
</div>
        
    )
}


export default Review1 

