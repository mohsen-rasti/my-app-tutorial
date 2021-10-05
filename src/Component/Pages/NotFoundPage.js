import React from "react";
import { Link } from "react-router-dom";
import styled  from "styled-components";

function NotFoundPage() {
  return (
    <ComponentNotFound className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Ops!</h1>
            <h2>Error 404 Pagenot found</h2>
            <div className="error-details">
              find page sorrrrrrrrrrrrrrrrrrrrry
            </div>

            <div className="error-action">
              <Link to="/" className="btn btn-outline-primary btn-lg">
                <i className="fas fa-home" /> &nbsp;Back to home
              </Link>

              <Link className="btn btn-outline-secondary btn-lg">
                <i className="fas fa-envelope" /> &nbsp;Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ComponentNotFound>
  );
}

export default NotFoundPage;
const ComponentNotFound = styled.div`
.error-template{
    padding:40px 15px;
    text-align:center;



}

.error-action{
    margin-top:10px;
    marginbottomL15px;

}

.btn{
    margin-right: 10px;
}
`;