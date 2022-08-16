import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockData, setStockData] = useState([])
  const [portfolioData, setPortfolioData] = useState([])
  const [filterType, setFilterType] = useState(null)
  const [sortType, setSortType] = useState(null)

  //fetch data
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(r => r.json())
      .then(d => setStockData(d))
  }, [])

  //portfolio handler functions
  const addPortfolio = (stock) => {
    setPortfolioData([...portfolioData, stock])
  }

  const removePortfolio = (stock) => {
    const newPortfolio = portfolioData.filter((item) => item.id !== stock.id)
    setPortfolioData(newPortfolio)
  }

  //filter by type function
  const filterByType = (data) => {
    if (filterType) {
      return data.filter((item) => item.type === filterType)
    } else {
      return data
    }
  }

  const filteredData = filterByType(stockData)

  //search function
  const sortByType = (data) => {
    if (sortType === 'Alphabetically') {
      const sorted = data.sort((a, b) => {
        const A = a.name
        const B = b.name
        return A.localeCompare(B)
      });
      return sorted
    }
    else if (sortType === 'Price'){
      const sorted = data.sort((a, b) => {
        const A = a.price
        const B = b.price
        return A - B
      });
      return sorted
    } else {
      return data
    }
  }

  const sortedData = sortByType(filteredData)


  return (
    <div>
      <SearchBar setSortType={setSortType} setFilterType={setFilterType} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockData={sortedData} handlePortfolio={addPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioData={portfolioData} handlePortfolio={removePortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
