import ListGroup from 'react-bootstrap/ListGroup';
import './App.css'
import { ImageList } from '@mui/material';



function App() {
 
  return (
    <div>

    <div className='container'>
      <nav className="navbar navbar-expand-lg nav1">
   
     <div className="div1"><a className="navbar-brand a2 ms-3" href="#">C</a></div>
     <div className="container-fluid">
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link a1 tag" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link tag" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link tag" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link tag" href="#">Contact</a>
            </li>
           
          
          </ul>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Cart(0)</a>
                </li>
            </ul>
           </div>
          
        </div>
      
     </div>
  </nav> 
  {/* First section  */}
 <div className='div2'>
    <div className="parallax-container">
          <div className="parallax-section parallax-section1"></div>
          <div className="content">
            <h1 className='heading1'>COTTON</h1>
            <p className='para1'>FLOWER SHOP</p>
          </div>
        </div> 
 </div>

{/* Fresh Seasonal */}

<div className='div3 mt-5 p-5'>
<h1 className='heading2'>Fresh, Seasonal, Beautiful</h1>
<p className='para2'>Order Now and Get Same-Day-Delivery</p>
</div>

{/* 3 cards and shop all button  */}

<div>
  <div className="row">
    <div className="col-lg-4 g-4">
  <img src="https://static.wixstatic.com/media/c837a6_3603ffd76bd043fc906f2235bec309f7~mv2.jpg/v1/fill/w_356,h_475,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_3603ffd76bd043fc906f2235bec309f7~mv2.jpg" alt="" />
  <div className='div5'>
  <p className='para4 ms-2'>VDAY 10% OFF</p>
  </div>

<div className='div6'>
  <h5 className='heading3 mt-4'>I'm a product</h5>
  <p className='para3'><span>$75.00</span> $67.50</p>
</div>
</div>
    
    <div className="col-lg-4 g-4">
<img src="https://static.wixstatic.com/media/c837a6_0c12b986083f43068e9fd609017c2aeb~mv2.jpg/v1/fill/w_356,h_475,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0c12b986083f43068e9fd609017c2aeb~mv2.jpg" alt="" />
<div className='div5'>
<p className='para4 ms-2'>VDAY 10% OFF</p>
</div>
<div className='div6'>
  <h5 className='heading3 mt-4'>I'm a product</h5>
  <p className='para3'><span>$75.00</span> $67.50</p>
</div>
    </div>

    <div className="col-lg-4 g-4">
<img src="https://static.wixstatic.com/media/c837a6_d7cac48ffbd549029aae49a90c6a6874~mv2.jpg/v1/fill/w_356,h_475,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_d7cac48ffbd549029aae49a90c6a6874~mv2.jpg" alt="" />
<div className='div5'>
<p className='para4 ms-2'>VDAY 10% OFF</p>
</div>
<div className='div6'>
  <h5 className='heading3 mt-4'>I'm a product</h5>
  <p className='para3'><span>$75.00</span> $67.50</p>
</div>
    </div>
  </div>
 <div className='div7 p-5'> <button type="button" className='butt1'>Shop All</button></div>
</div>

{/*  */}

<div className='div2'>
<div class="parallax-container">
          <div class="parallax-section parallax-section2"></div>
          <div class="content">
            <h1 className='heading4'>10% Off Selected Flowers for Valentine's Day</h1>
            <p className='para5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum tenetur, recusandae facilis delectus cum exercitationem rerum ex quo doloremque aut accusamus? Odit dolor harum perferendis inventore vero repellat deleniti id?</p>

            <div className='div7 p-5'> <button type="button" className='butt2'>Order Now</button></div>
          </div>
        </div> 
</div>
 {/* footer */}
 
 
 <div className='container'>
   <div className="row p-5 row1">
  
    <div className="col-lg-3 p-5  border border-light " >
  <div className="d1 ms-4">
  <h1 className='p-3' style={{color:'white'}}>C</h1>
  </div>
  <h6 className='head1'>Flower Shop</h6>

    </div>
    <div className="col-lg-3 p-5  border border-light">
  <h3 className='head1'>Quick Menu</h3>
 <a href=''> Home</a> <br />
 <a href=''> Shop</a> <br />
  <a href="">About</a> <br />
  <a href="">Contact </a>
    </div>
    <div className="col-lg-3 p-5   border border-light">
  <h3 className='head1'>Policy</h3>
  <a href=''> Shipping & Returns</a> <br />
 <a href=''> Store Policy</a> <br />
  <a href="">Payment Methods</a> <br />
  <a href="">FAQ</a>
  
    </div>
    <div className="col-lg-3 p-5  border border-light">
    <h3 className='head1'>Address</h3>
  
  <p>
    500 Terry Francine Street
    San Francisco, CA 94158
  </p>
  
  <p>Follow  <i class="fa-brands fa-facebook-f"></i>   <i class="fa-brands fa-instagram"></i></p>
    </div>
   </div>
  
 </div>
    
 










    </div>
    </div>
  )
}

export default App
