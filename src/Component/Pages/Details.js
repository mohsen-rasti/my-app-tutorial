import React from "react";
import { InfoConsumer } from "../contex";

function Details() {
  return (
    <InfoConsumer>
      {(data) => {
        const {
          id,
          headerTitle,
          headerSubTitle,
          headerText,
          img,
          title,
          maps,
          description,
        } = data.detailInfo;
        return (
          <React.Fragment>
            <div className="conteiner-fluid align-items-center">
              <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
              <h4 className="display-f">{headerSubTitle}</h4>
              <p>{headerText}</p>
            
            {/* social Icons */}
<div className="container mt-5">
    <div className="row justify-contenet-center">

<div className="col-2">   <i class="fab fa-facebook-f" ></i></div>
<div className="col-2">   <i class="fab fa-twitter" ></i></div>
<div className="col-2">   <i class="fab fa-google" ></i></div>
<div className="col-2">   <i class="fab fa-reddit" ></i></div>
<div className="col-2">   <i class="fab fa-whatsapp" ></i></div>
<div className="col-2">   <i class="fab fa-telegram" ></i></div>

    </div>
</div>


            </div>
{/* nav Link */}

<div className="container">
    
    <div className="nav nav-tabs">
        {/* About Place Link */}
        <li className="nav-item">
            <a href="#aboutPlace" className="nav-link" role="tab" data-toggle="tab"></a>
        </li>
    </div>
</div>
          </React.Fragment>
        );
      }}
    </InfoConsumer>
  );
}

export default Details;
