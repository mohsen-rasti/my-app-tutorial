import React from "react";
import { InfoConsumer } from "../contex";
import Info from "../Info";


function Home() {
  return (
    <div Classname="container">
      <div className="row mt-5">
        <InfoConsumer>
          {(value) => {
            return value.info.map(item => {
                return <Info key={item.id} item={item} />;
            })
          }}
        </InfoConsumer>
      </div>
    </div>
  );
}

export default Home;
