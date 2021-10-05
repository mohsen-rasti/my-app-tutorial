import React from "react";
import { Link } from 'react-router-dom';


function Contacts() {
  return (
    <section classname="my-5 py-5">
      <div className="container">
        <div className="well well-sm">
          <h3>
            <strong>Our Location</strong>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <iframe
            src=""
            style={{
              border: 0,
              width: "100%",
              height: "315px",
              frameborder: "0",
            }}
            allowFullScreen
          >
            {" "}
            address google
          </iframe>

          <div className="col-md-5">
            <h4>
              <strong>contact</strong>
            </h4>
            <form>
              <div className="form-group">
                {" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />{" "}
              </div>
              <div className="form-group">
                {" "}
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                {" "}
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>

              <textarea className="form-control" cols="30" rows="3" placeholder="Message"></textarea>
                          <Link className="btn btn-outline-primary text-uppercase">
                              <i className="fa-paper-plane-o" aria-hidden="true"> </i>
                              <i className="fab fa-telegram-plane">&nbsp;Send </i>
            
                          </Link>
                      </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
