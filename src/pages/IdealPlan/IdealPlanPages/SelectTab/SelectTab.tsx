import { FC, useEffect, useId, useState } from "react";
import Toolbar from "../../../../components/Toolbar";
import { RoutePageNameEnum } from "../../../../routes/Routes.types";
import NextButton from "../../IdealPlanComponents/NextButton/NextButton";
import { data } from "./SelectTab.data";
import "../../IdealPlan.style.scss";
import "./SelectTab.style.scss";

const SelectTab: FC = () => {
  const [_activeButton, _setActiveButton] = useState(false);
  const [_value, _setValue] = useState<string>();
  const [_pageName, _setPageName] = useState<RoutePageNameEnum>(
    RoutePageNameEnum.PlanoIdeal
  );
  const _selectId = useId();
  useEffect(() => {
    _setActiveButton(_value !== "" && _value !== undefined);
  }, [_value]);
  return (
    <>
      <Toolbar pageName={_pageName} link='/RadioButtonsTab' />
      <section className="container">
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consect adipiscing elit?
          </p>
        </div>
        <div className="inputBox">
          <select
            value={_value}
            id={_selectId}
            className="inputBox__select"
            onChange={e => _setValue(e.target.value)}
          >
            <option value=""></option>
            {data.map(item => (
              <option value={item.id}>{item.description}</option>
            ))}
          </select>
        </div>
        <NextButton active={_activeButton} link='/ResultsTab' />
      </section>
    </>
  );
};

export default SelectTab;