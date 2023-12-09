
import Title from "../UI/Title"
import SubscribeForm from "../UI/Form/SubscribeForm";

import React from 'react';




const Subscribe: React.FC = () => {
    
    return (
        <section className="bg-gray-f3f3f3 pb-12">
            <Title text="Subscribe to Our Newsletter"></Title>
            <div className="md:container md:mx-auto  py-4 items-center">
                <SubscribeForm></SubscribeForm>

            </div>
        </section>
    )
}

export default Subscribe