import '../assets/style/Product.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import u1 from '../assets/images/u1.jpg';
import u2 from '../assets/images/u2.jpg';
import u3 from '../assets/images/u3.jpg';
import u4 from '../assets/images/u4.jpg';
import u5 from '../assets/images/u5.jpg';
import u6 from '../assets/images/u6.jpg';
import u7 from '../assets/images/u7.jpg';
import u8 from '../assets/images/u8.jpg';
import u9 from '../assets/images/u9.jpg';
import pro from '../assets/images/pro.jpg';


function Product () {

const products = [
        { id: 1, name: "Lavender Silk Saree", para: "Elegant floral patterns with golden border", oldprice: 4500, newprice: 2999, img: u1 },
        { id: 2, name: "Royal Blue Banarasi", para: "Traditional silver zari work for grand occasions", oldprice: 5200, newprice: 3499, img: u2 },
        { id: 3, name: "Purple Bridal Leheriya", para: "Rich embroidered lehenga with sheer dupatta", oldprice: 8500, newprice: 5999, img: u3 },
        { id: 4, name: "Chevron Designer Set", para: "Modern zigzag patterns in deep purple", oldprice: 6000, newprice: 4200, img: u4 },
        { id: 5, name: "Ruby Red Bridal Lehenga", para: "Heavily embellished traditional bridal wear", oldprice: 15000, newprice: 9999, img: u5 },
        { id: 6, name: "Midnight Black Kurta", para: "Classic silk kurta with embroidered collar", oldprice: 3500, newprice: 1899, img: u6 },
        { id: 7, name: "Navy Blue Sherwani", para: "Premium velvet finish with side gold panels", oldprice: 9000, newprice: 6500, img: u7 },
        { id: 8, name: "Indo-Western Fusion", para: "Stylish asymmetric cut with ethnic motifs", oldprice: 7500, newprice: 4999, img: u8 },
        { id: 9, name: "Ivory Mirror Work Kurta", para: "Pure white silk with detailed mirror accents", oldprice: 4000, newprice: 2499, img: u9 }
    ];

    return (

<>

{/* {promotionsection} */}

<section className='promo-sec py-5'>
   <div className='container'>
       <div className='row justify-content-center'>
            <div className='col-12'>
                <div className='pro-img' data-aos="zoom-in">
                      <img src={pro} alt="image" className='img-fluid promo-image' />
                </div>
            </div>
       </div>
   </div>
</section>

{/* {productsection} */}

<section className='prod-sec py-5'>
    <div className='container'>
        <h2 className='text-center mb-5 fw-bold sec-title'>Our Exclusive Collection</h2>
       <div className='row g-4'>
           
    {products.map((item) => (
                            <div className='col-lg-4 col-md-6 col-12' key={item.id} data-aos="fade-up">
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

</>

    )
}

export default Product;