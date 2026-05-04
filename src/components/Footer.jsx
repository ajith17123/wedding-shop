import '../assets/style/Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';


function Footer () {
    return (

        <footer className='foot-sec py-5'>
             <div className='container'>
                <div className='row'>
                    
                 <div className='col-md-3 col-12'>
                     <h6 className='foot-title'>Subscribe And Get Special Offers</h6>
                     <form>
                        <input type="text" className='form-control form-search' />
                        <button className='foot-but' type='button'>subscribe</button>
                     </form>
                     <div className='payment'>
                         <h6 className='foot-para'>Payment Accepted.</h6>
                          <button className='pay-butt' type='button'>Gpay</button>
                          <button className='pay-butt' type='button'>Phonepe</button>
                          <button className='pay-butt' type='button'>Paytm</button>
                     </div>
                 </div>

                 <div className='col-md-3 col-12'>
                    <h6 className='foot-title'>Tailoring Unit</h6>
                    <ul className='foot-text'>
                        <li className='foot-list'>Blouse Stitching</li>
                         <li className='foot-list'>Lehenga Stitching</li>
                         <li className='foot-list'>Coat Stitching</li>
                         <li className='foot-list'>Shirt Stitching</li>
                    </ul>
                 </div>

                 <div className='col-md-2 col-12'>
                   <h6 className='foot-title'>customer service</h6>
                    <ul className='foot-text'>
                        <li className='foot-list'>Client Testimonials</li>
                         <li className='foot-list'>FAQs</li>
                         <li className='foot-list'>Mail Us</li>
                    </ul>
                 </div>

                 <div className='col-md-2 col-12'>
                     <h6 className='foot-title'>policies</h6>
                    <ul className='foot-text'>
                        <li className='foot-list'>Privacy Policy</li>
                         <li className='foot-list'>Returns And Exchange</li>
                         <li className='foot-list'>Shopping Policy</li>
                    </ul>
                 </div>

                   <div className='col-md-2 col-12'>
                     <h6 className='foot-title'>company info</h6>
                    <ul className='foot-text'>
                        <li className='foot-list'>contact us</li>
                         <li className='foot-list'>Our Blog</li>
                         <li className='foot-list'>Site map</li>
                    </ul>
                 </div>

                   <hr />

                   <div className='text-center foot-bottom'>
                      <p className='foot-copy'>
                        &copy; All Rights Reserved. Designed with Fashion.
                      </p>
                   </div>

                </div>
             </div>
        </footer>

    )
}

export default Footer;