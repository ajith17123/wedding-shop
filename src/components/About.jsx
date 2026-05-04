import '../assets/style/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';


function About () {
    return (

<>

{/* {aboutsection} */}

<section className='about-sec py-5'>
    <div className='container'>
        <h2 className='sec-title' data-aos="fade-down">Who We Are</h2>
        <div className='row align-items-center justify-content-center'>
           
          <div className='col-lg-3 col-md-4' data-aos="fade-right">
            <img src={about1} alt="about" className='img-fluid side-img' />
          </div>

          <div className='col-lg-6 col-md-4 text-center' data-aos="zoom-in">
             <p className='about-para'>
                     At Velvet Rooms, we believe your home should tell your story. 
                     We are dedicated to bringing you the finest selection of home decor 
                     and furnishings that blend timeless elegance with modern comfort.
             </p>
          </div>

          <div className='col-lg-3 col-md-4' data-aos="fade-right">
            <img src={about2} alt="about" className='img-fluid side-img' />
          </div>

        </div>
    </div>
</section>

{/* {faqsection} */}

<section className='faqsection py-5'>
  <div className='container'>
      <h3 className='sec-title mb-4' data-aos="fade-down">About Us - FAQ</h3>

      <div class="accordion" id="accordionPanelsStayOpenExample">

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Do you provide custom stitching and alterations?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
              <strong>Absolutely!</strong> We provide custom alterations to ensure your wedding dress fits you perfectly. After taking your measurements, we will have your dress ready according to your size within 3-5 working days.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Do you accept bulk orders for Bridesmaids or Groomsmen?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>Yes, we handle bulk orders.</strong> If you need themed outfits for family functions or friend groups, we offer them with special discounts. A "Group Discount" applies to orders of 5 items or more.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              What is your delivery timing and return policy?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
              Ready-made dresses are typically delivered within 2-4 days. Returns are accepted <strong>within 48 hours</strong> only in case of damage upon delivery. Please note that since these are wedding collections, return policies do not apply to custom-stitched dresses.
            </div>
          </div>
        </div>
      </div>
  </div>
</section>

{/* {contactsection} */}

<section className='cont-sec py-5'>
   <div className='container'>
      <div className='row g-4'>
        
     <div className='col-md-4' data-aos="flip-left">
         <a href="https://wa.me/+91-9563587452" target="_blank" rel="noreferrer" className='text-decoration-none'>
                <div className='c-card p-4 shadow-sm whatsapp-card'>
                        <i className="bi bi-whatsapp display-4"></i>
                        <h5 className='mt-3'>WhatsApp</h5>
                        <p>Chat with us for quick help</p>
                </div>
         </a>
     </div>

     <div className='col-md-4' data-aos="flip-left" data-aos-delay="200">
                            <a href="mailto:info@velvetrooms.com" className='text-decoration-none'>
                                <div className='c-card p-4 shadow-sm mail-card'>
                                    <i className="bi bi-envelope-at display-4"></i>
                                    <h5 className='mt-3'>Email</h5>
                                    <p>Send us your inquiries</p>
                                </div>
                            </a>
                        </div>

        <div className='col-md-4' data-aos="flip-left" data-aos-delay="400">
                            <a href="tel:+911234567890" className='text-decoration-none'>
                                <div className='c-card p-4 shadow-sm call-card'>
                                    <i className="bi bi-telephone-outbound display-4"></i>
                                    <h5 className='mt-3'>Call Us</h5>
                                    <p>Direct support via phone</p>
                                </div>
                            </a>
                        </div>


      </div>
   </div>
</section>

{/* {mapsection} */}

<section className='map-sec py-5'>
   <div className='col-12'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15701.328330752528!2d78.1189283!3d9.9252007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7299a0e240!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714850000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
    </div>
</section>

</>

    )
}

export default About;