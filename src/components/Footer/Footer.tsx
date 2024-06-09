
import Widget1 from "./Widget1"
import Widget2 from "./Widget2"
const aboutUs = {
    title : 'ABOUT US',
    content: '<p class="mb-3 text-gray-a8a8a8 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis necvestibulum magna, et dapibus lacus. Duis nec vestibulum magna, etdapibus lacus</p>'
}
const contactInfo = {
    title : 'CONTACT INFO',
    content: '<ul class="contact-info text-gray-a8a8a8"><li><span class="contact-info-label">Address:</span>123 Street Name,City, England</li><li><span class="contact-info-label">Phone:</span><a href="tel:">(123) 456-7890</a></li><li><span class="contact-info-label">Email:</span><a href="mailto:mail@example.com">mail@example.com</a></li><li><span class="contact-info-label">Working Days/Hours:</span> Mon- Sun / 9:00 AM - 8:00 PM</li></ul>'
}
const customerService = {
    title : 'CUSTOMER SERVICE',
    content: '<ul class="links text-gray-a8a8a8"><li><a href="#">Help &amp; FAQs</a></li><li><a href="#">Order Tracking</a></li><li><a href="#">Shipping &amp; Delivery</a></li><li><a href="#">Orders History</a></li><li><a href="#">Advanced Search</a></li><li><a href="#">Corporate Sales</a></li><li><a href="#">Privacy</a></li></ul>'
}
const popularTags = [
    'Bag','Black','Blue','Clothes','Fashion','Hub','Jean','Shirt','Sports','Sweater','Winter'
]
const Footer = () => {
  return (
    

<footer className="bg-footer">
    <div className="mx-auto w-full max-w-screen-xl">
      {/* <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 max-sm:grid-cols-1">
        <Widget1 content={aboutUs}></Widget1>
        <Widget1 content={contactInfo}></Widget1>
        <Widget1 content={customerService}></Widget1>
        <Widget2 title ='POPPULAR TAGS' content={popularTags}></Widget2>
      </div> */}
      <div className="px-4 py-6 bg-footer  md:flex md:items-center md:justify-between border-t-[1px]">
        <span className="text-sm text-white  sm:text-center">© Aptech eCommerce.<a href="https://flowbite.com/">2022</a>. All Rights Reserved.
        </span>

      </div>
    </div>
</footer>

  )
}

export default Footer