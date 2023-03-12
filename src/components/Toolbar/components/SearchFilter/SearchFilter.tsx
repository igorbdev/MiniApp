import React, { FC, useState } from "react";

import icon_search from "../../../../assets/icons/icon_search.svg";
import icon_filter from "../../../../assets/icons/icon_filter.svg";

import "./SearchFilter.style.scss";

const SearchFilter: FC = () => {
  const [_a, _setA] = useState<boolean>(false);
  return (
    <div className="SearchFilter">
      <div className="search-container">
        <div className="input-group">
          <input type="text" placeholder="Buscar" />
          <button
            className="toolbar-btn btn-group"
            onClick={() => {
              alert("pesquisar");
            }}
          >
            <img src={icon_search} alt="Menu" />
          </button>
        </div>
      </div>
      <div className="filter-container">
        <button
          className="toolbar-btn back-button"
          onClick={() => {
            alert("filtrar");
          }}
        >
          <img src={icon_filter} alt="Menu" />
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
