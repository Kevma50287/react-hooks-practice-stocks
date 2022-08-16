import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioData, handlePortfolio}) {
  const portfolioList = portfolioData.map((stock) => {
    return <Stock key={stock.id} stock={stock} handlePortfolio={handlePortfolio}/>
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        portfolioList
      }
    </div>
  );
}

export default PortfolioContainer;
