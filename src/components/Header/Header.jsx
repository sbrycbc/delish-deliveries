import React, {useRef, useEffect} from 'react';
import { Container} from 'reactstrap';
import logo from '../../assets/images/sbry.png';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';

import '../../styles/header.css';

const nav_links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods'
  },
  {
    display: 'Warenkorb',
    path: '/cart'
  },
  {
    display: 'ÜberUns',
    path: '/überuns'
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity );
  const dispatch = useDispatch()


  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  const toggleCart = () => {
          dispatch(cartUiActions.toggle())
  }

  useEffect(() => {

      const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);


    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} 
            style={{width:'50px'}} alt=' logo' />
            <h5>DelishDeliveries</h5>
          </div>
      
{/* ==================  menu ================= */}

        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="menu d-flex align-items-center gap-5">
            {
              nav_links.map((item,index)=>(
                <NavLink to={item.path} key={index} 
                  className={navClass => navClass.isActive ? 'active_menu' : ' '}>
                  {item.display}
                </NavLink>
              ))
            }
          </div>
        </div>

{/* ================ nav right icons ============ */}
         <div className="nav_right d-flex align-items-center gap-4">
          <span className="cart_icon" onClick={toggleCart}>
            <i className="ri-shopping-basket-fill"></i>
            <span className="cart_badge">{totalQuantity}</span>
          </span>

          <span className="user">
            <Link to='/login'><i className="ri-user-5-line"></i></Link>
          </span>

          <span className="mobile_menu" onClick={toggleMenu}>
            <i className="ri-menu-add-fill"></i>
          </span>
         </div>

        </div>
      </Container>
    </header>
  )
}

export default Header;