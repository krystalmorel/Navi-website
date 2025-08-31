import React from 'react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaInstagram, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import logo from '../../assets/footerimg.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="LENAV Logo" />
            <div>
              <h2>LENAV</h2>
              <p>Estudio Legal</p>
            </div>
          </div>
          <p className="footer-name">
            Leidy Margaret de la Cruz <br />
            <span>Consultora Legal | CEO</span>
          </p>
        </div>


        <div className="footer-divider"></div>

        <div className="footer-right">
          <p><FaPhone /> 809-682-8790</p>
          <p><FaWhatsapp /> +1 829-886-3131</p>
          <p><FaEnvelope /> leidy.delacruz@lenavlegal.com</p>
          <p><FaInstagram /> @lenavlegal</p>
          <p><FaGlobe /> www.lenavlegal.com</p>
          <p><FaMapMarkerAlt /> 
            C/Salvador Estrella Shadalá núm. 26, esq. c/ Santiago, Plaza Bambú, 
            bloque 2, 1er. nivel, local 105, Gazcue, Distrito Nacional, 
            Santo Domingo, Rep. Dom.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
