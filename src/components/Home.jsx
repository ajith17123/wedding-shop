import '../assets/style/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import hero from '../assets/images/heroimage.jpg';
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import coli from '../assets/images/col1.jpg';
import offer1 from '../assets/images/offer1.jpg';
import offer2 from '../assets/images/offer2.jpg';
import offer3 from '../assets/images/offer3.jpg';
import offer4 from '../assets/images/offer4.jpg';


function Home () {

  const products = [
    { 
        id: 1, 
        name: "Floral Print Kurta", 
        para: "Multi-color floral pattern kurta with traditional aesthetic.", 
        oldprice: 3999, 
        newprice: 2499, 
        img: p1 
    },
    { 
        id: 2, 
        name: "Charcoal 3-Piece Suit", 
        para: "Formal charcoal grey blazer with waistcoat and tie set.", 
        oldprice: 8500, 
        newprice: 6200, 
        img: p2 
    },
    { 
        id: 3, 
        name: "Pink Embroidery Saree", 
        para: "Pink silk saree with heavy gold zari border and embroidery.", 
        oldprice: 5500, 
        newprice: 3800, 
        img: p3 
    },
    { 
        id: 4, 
        name: "Red Bridal Banarasi", 
        para: "Classic red Banarasi saree with intricate golden weave.", 
        oldprice: 9999, 
        newprice: 7500, 
        img: p4 
    }
];

  const offers = [
        { id: 1, img: offer1 },
        { id: 2, img: offer4 },
        { id: 3, img: offer3 },
        { id: 4, img: offer2 }
    ];

    return (

<>

{/* {herosection} */}

<section className='hero-sec'>
   <div className='container'>
      <div className='row'>
         <div className='col-12'>
             <div className='hero-image' data-aos="zoom-in">
                   <img src={hero} alt="dress" className='img-fluid hero-img' />
             </div>
         </div>
      </div>
   </div>
</section>

{/* {productsection} */}

<section className='prod-sec py-5'>
  <div className='container'>
    <h2 className='section-title mb-5'>Popular Wedding Preferences.</h2>
      <div className='row g-4'>
        
        {products.map((item) => (
                            <div className='col-lg-3 col-md-6 col-12' key={item.id} data-aos="fade-up">
                                <div className='product-card'>
                                    <div className='product-img-box'>
                                        <img src={item.img} alt={item.name} className='img-fluid' />
                                    </div>
                                    <div className='product-info p-3 text-center'>
                                        <h5 className='prod-name'>{item.name}</h5>
                                        <p className='prod-para text-muted small'>{item.para}</p>
                                        <div className='price-box'>
                                            <span className='old-price text-decoration-line-through me-2'>₹{item.oldprice}</span>
                                            <span className='new-price fw-bold'>₹{item.newprice}</span>
                                        </div>
                                        <Link to="/product" className='btn btn-buy mt-3'>View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
        
      </div>
  </div>
</section>

{/* {postersection} */}

<section className='post-sec py-5'>
  <div className='container'>
     <div className='row'>
          <div className='col-12' data-aos="fade-right">
               <div className='poster-img'>
                   <img src={coli} alt="poster" className='img-fluid pos-img' />
                </div>
            </div>
     </div>
  </div>
</section>

{/* {aboutsection} */}

<section className='about-sec py-5'>
   <div className='container'>
    <h2 className='section-title'>Who We Are</h2>
       <div className='row'>
            <div className='about-t text-center'>
               <p className='about-para'>
                  "At Velvet Rooms, we believe your home should tell your story. We are dedicated to bringing you the finest selection of home decor and furnishings that blend timeless elegance with modern comfort. From hand-picked accents to bespoke tailoring, our mission is to help you create spaces that are as unique as you are. Quality, craft, and your vision are at the heart of everything we do."
               </p>
            </div>
            <button className='about-but' type='submit'>Read More About Us</button>
       </div>
   </div>
</section>

{/* {offer-section} */}

<section className='offer-sec py-5'>
   <div className='container'>
    <h2 className='section-title mb-5'>Our Exclusive Offers.</h2>
       <div className='row g-3'>
         
     {offers.map((offer) => (
                <div className='col-md-3 col-6' key={offer.id} data-aos="flip-left">
                <div className='offer-card'>
                 <img src={offer.img} alt="offer" className='img-fluid rounded offer-img' />
              </div>
          </div>
     ))}

       </div>
   </div>
</section>

{/* {statsection} */}

<section className='stat-sec'>
   <div className='container'>
       <div className='row'>
            
      <div className='col-md-3 col-6'>
                <div className='s-icon-box'>
                    <div className='s-icon mb-3'>
                        <i className="bi bi-truck"></i>
                    </div>
                    <h6 className='stat-title'>Free Shipping</h6>
                    <p className='stat-text'>Worldwide*</p>
                </div>
      </div>

      <div className='col-md-3 col-6'>
                <div className='s-icon-box'>
                    <div className='s-icon mb-3'>
                        <i className="bi bi-patch-check"></i>
                    </div>
                    <h6 className='stat-title'>Best Price</h6>
                    <p className='stat-text'>Promise</p>
                </div>
            </div>

            <div className='col-md-3 col-6'>
                <div className='s-icon-box'>
                    <div className='s-icon mb-3'>
                        <i className="bi bi-shield-lock"></i>
                    </div>
                    <h6 className='stat-title'>100% Original</h6>
                    <p className='stat-text'>Products</p>
                </div>
            </div>

            <div className='col-md-3 col-6'>
                <div className='s-icon-box'>
                    <div className='s-icon mb-3'>
                        <i className="bi bi-headset"></i>
                    </div>
                    <h6 className='stat-title'>24/7 Support</h6>
                    <p className='stat-text'>Dedicated Help</p>
                </div>
            </div>

       </div>
   </div>
</section>


</>

    )
}

export default Home;