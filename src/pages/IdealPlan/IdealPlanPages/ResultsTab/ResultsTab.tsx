import { FC, useState } from "react";
import Toolbar from "../../../../components/Toolbar";
import { RoutePageNameEnum } from "../../../../routes/Routes.types";
import "../../IdealPlan.style.scss";
import Card from "./Card/Card";
import { data } from './ResultsTab.data';
import "./ResultsTab.style.scss";

const ResultsTab: FC = () => {
  const [_activeButton, _setActiveButton] = useState(false);
  const [_pageName, _setPageName] = useState<RoutePageNameEnum>(
    RoutePageNameEnum.PlanoIdeal
  );
  return (
    <>
      <Toolbar pageName={_pageName} link='/SelectTab' />
      <section className="containerResults">
        <div className="description">
          <p>
            Esses são os planos de consórcio que mais combinam com você, aproveite {':)'}
          </p>
        </div>
        <div className="resultCards">
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default ResultsTab;