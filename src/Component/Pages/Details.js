import React,{Component} from "react";
import { InfoConsumer } from "../contex";
import styled from "styled-components";
import Reviews from "../Reviews";
import ReviewCard from "../ReviewCard";
import { reviews } from "../../data";


class Details extends Component {
  render(){
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
            <HeaderDetails className="conteiner-fluid align-items-center" >
              <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
              <h4 className="display-5">{headerSubTitle}</h4>
              <p>{headerText}</p>

              {/* social Icons */}
              <div className="container mt-5" >
                <div className="row justify-contenet-center">
                  <div className="col-2">
                  
                    <i class="fab fa-facebook-f"></i>
                  </div>
                  <div className="col-2">
                  
                    <i class="fab fa-twitter"></i>
                  </div>
                  <div className="col-2">
                  
                    <i class="fab fa-google-plus"></i>
                  </div>
                  <div className="col-2">
                  
                    <i class="fab fa-reddit"></i>
                  </div>
                  <div className="col-2">
                  
                    <i class="fab fa-whatsapp"></i>
                  </div>
                  <div className="col-2">
                  
                    <i class="fab fa-telegram"></i>
                  </div>
                </div>
              </div>
            </HeaderDetails>


{/* Nav Link */}
<div className="container">
 
  <ul className="nav nav-tabs">
  
  {/* About Place Link */}   
    <li className="nav-item">
      <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">About</a>
    </li>
{/* Reviews Link */}   
<li className="nav-item">
      <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Rewiews</a>
    </li>
{/* Map Link */}   
<li className="nav-item">
      <a href="#maps" className="nav-link" role="tab" data-toggle="tab">Map</a>
    </li>

<div className="tab-content mb-5">
{/* Tab Pane */}
<div id="aboutPlace" className="tab-pane in active text-center mt5" role="tabpanel">
<h2 className="mb-3">{title}</h2>
<p>{description}</p>
<img src={img} alt={title} className="img-thumbnail img-fluid" />
</div>
{/* Reviews */}
<div className="tab-pane" id="reviews" role="tabpanel">
                  {/* <Reviews/> */}
                  </div>
{/* map */}
<div className="tab-pane" id="maps" role="tabpanel">
  <iframe src={maps} style={{border:'0',height:'28.125rem',width:'100%',frameboarder:'0'}} />
</div>



</div>
  </ul>

</div>


          </React.Fragment>
        );
      }}
    </InfoConsumer>
  );
}}

export default Details;

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 70vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;

  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--maindark);
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--maindark);
  }

  i{
    font-size:1.875rem;
    color:var(--mainDark);
    
  }

  i:hover{
    color:var(--mainBlue);
    cursor:pointer;
  }

  .nav-item{
    height:18.75rem;

  }

  @media(max-width:760px){
    h1,h2{
      color:var(--mainWhite);
    }
  }
`;
