import React from "react";
import Product from "./Product";
import { v4 as uuidv4 } from "uuid";
function Home() {
  return (
    <div className="home">
      <div className="home__row">
        <Product
          id={uuidv4()}
          title="Structure and Interpretation of Computer Programs"
          img="https://learntocodewith.me/wp-content/uploads/2020/01/Structure-and-interpretation-768x432.jpeg"
          price={12900}
          rating={4}
        />
        <Product
          id={uuidv4()}
          title=" The Clean Coder: A Code of Conduct for Professional Programmers"
          img="https://www.guru99.com/images/2/110320_0604_25BestProgr2.jpg"
          price={9999}
          rating={5}
        />
        <Product
          id={uuidv4()}
          title="Code Complete: A Practical Handbook of Software Construction"
          img="https://www.guru99.com/images/2/110320_0604_25BestProgr3.jpg"
          price={12900}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
