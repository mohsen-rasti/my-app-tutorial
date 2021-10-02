import React from 'react';
import "../App.css";


function Footer() {
    return (
        <>
        
<div className="main-footer">
    <div className="container">
        <div className="row">
           {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
                <h4>ارتباط با ما</h4>
                <ul className="list-unstyled">
                    <li ><a href="#"><i class="fab fa-instagram"></i> اینستاگرام</a></li>
                    <li ><a href="#"><i class="fab fa-telegram"></i> Telegram </a></li>
                    <li ><a href="#"><i class="fab fa-whatsapp"></i> WhatsApp</a></li>
                    <li ><a href="#"><i class="fas fa-phone"></i> +98 917 310 9470</a></li>
                </ul>
          </div>
           {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
                <h4>lorem20</h4>
                <ul className="list-unstyled">
                    <li>Lorem ++</li>
                    <li>Lorem ++</li>
                    <li>Lorem ++</li>
                    <li>Lorem ++</li>
                </ul>
                </div>    
           {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
                <h4>lorem20</h4>
                <ul className="list-unstyled">
                    <li>Lorem ++</li>
                    <li>Lorem ++</li>
                    <li>Lorem ++</li>
                    <li>Lorem ++</li>
                </ul>
                </div>    
           {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
                <h4>lorem20</h4>
                <ul className="list-unstyled">
                    <li>Lorem ++</li>
                    <li>Lorem ++</li>
                    <li>Lorem ++</li>
                    <li>Lorem ++</li>
                </ul>
                </div>    
        </div>
        {/* footer bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center"  >
           &copy;{new Date().getFullYear()} city guide All right resived
          </p>
        </div>
    </div>
</div>
        </>
    )
}

export default Footer
