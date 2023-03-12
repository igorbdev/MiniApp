import { FC, useEffect, useState } from "react";
import Toolbar from "../../components/Toolbar";
import { RoutePageNameEnum } from "../../routes/Routes.types";
import Cards from "./IdealPlanComponents/Cards/Cards";
import "./IdealPlan.style.scss";
import NextButton from "./IdealPlanComponents/NextButton/NextButton";

const PlanoIdeal: FC = () => {
  const [_pageName, _setPageName] = useState<RoutePageNameEnum>(
    RoutePageNameEnum.PlanoIdeal
  );
  const [_activeButton, _setActiveButton] = useState(false);
  const [_selectedCards, _setSelectedCards] = useState<Number[]>([]);
  useEffect(() => _setActiveButton(_selectedCards.length >= 1), [_selectedCards]);
  return (
    <>
      <Toolbar pageName={_pageName} link='/InitialMenu' />
      <section className="container">
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consecter adipiscing elit. Integer ornare nibh ut?
          </p>
        </div>
        <Cards
          selectedCards={_selectedCards}
          setSelectedCards={_setSelectedCards}
        />
        <NextButton active={_activeButton} link='/MonetaryValueTab' />
      </section>
    </>
  );
};

export default PlanoIdeal;