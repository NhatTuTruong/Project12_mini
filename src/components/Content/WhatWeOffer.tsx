
import CartWWO from "../UI/Cart/CardWWO"
import Title from "../UI/Title"
import offer from "../../data/offer"
const WhatWeOffer = () => {
  return (
    <section className="bg-gray-f3f3f3 pb-12">
        <Title text="What We Offer"></Title>
        <div className="md:container md:mx-auto grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-md:grid-cols-2 py-4 items-center">
            {
                offer && offer.map((item:any,index:number) => (
                    <div key={index}>
                        <CartWWO  data={item} ></CartWWO>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default WhatWeOffer
