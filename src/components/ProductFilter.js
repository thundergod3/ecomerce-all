import React from "react";

const ProductFilter = props => {
  const { count, sort, size, handleChangeSort, handleChangeSize } = props;

  return (
    <div className="row">
      <div className="col-md-4">{count} products found</div>
      <div className="col-md-4">
        <label>
          Order by
          <select
            className="form-control"
            onChange={e => handleChangeSort(e)}
          >
            <option value="">Select</option>
            <option value="lowest">Lowest to highest</option>
            <option value="highest">Highest to lowest</option>
          </select>
        </label>
      </div>
      <div className="col-md-4">
        <label>
          Filter size
          <select
            className="form-control"
            onChange={e => handleChangeSize(e)}
          >
            <option value="">All</option>
            <option value="sx">SX</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default ProductFilter;
