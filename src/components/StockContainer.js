import React from "react";
import Stock from "./Stock";

function StockContainer({stockData, handlePortfolio}) {
  const stockList = stockData.map((stock) => {
    return <Stock key={stock.id} stock={stock} handlePortfolio={handlePortfolio}/>
  })
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {stockList}
    </div>
  );
}

export default StockContainer;
