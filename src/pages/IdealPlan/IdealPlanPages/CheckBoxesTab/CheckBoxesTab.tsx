import { FC, useEffect, useState } from "react";
import Toolbar from "../../../../components/Toolbar";
import { RoutePageNameEnum } from "../../../../routes/Routes.types";
import NextButton from "../../IdealPlanComponents/NextButton/NextButton";
import { checkBoxValues } from "./CheckBoxes.data";
import "../../IdealPlan.style.scss";
import "./CheckBoxesTab.style.scss";

const CheckBoxesTab: FC = () => {
  const [_activeButton, _setActiveButton] = useState(false);
  const [_selectedChecks, _setSelectedChecks] = useState<Number[]>([]);
  const [_pageName, _setPageName] = useState<RoutePageNameEnum>(
    RoutePageNameEnum.PlanoIdeal
  );
  const addSelectedChecks = (id: Number) => {
    if (_selectedChecks.indexOf(id) !== -1) {
      const updatedSelectedChecks = _selectedChecks.filter(chk => chk !== id);
      _setSelectedChecks(updatedSelectedChecks);
    } else {
      _setSelectedChecks([..._selectedChecks, id]);
    }
  };
  useEffect(() => _setActiveButton(_selectedChecks.length >= 1), [_selectedChecks]);
  return (
    <>
      <Toolbar pageName={_pageName} link='/MonetaryValueTab' />
      <section className="container">
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consect adipiscing elit?
          </p>
        </div>
        <div className="checkBoxesField">
          {checkBoxValues.map(item => (
            <div className="checkBoxesField__input" key={item.id}>
              <input
                type="checkbox"
                id={item.code}
                onClick={() => addSelectedChecks(item.id)}
              />
              <label htmlFor={item.code}>
                {item.label}
              </label>
            </div>
          ))}
        </div>
        <NextButton active={_activeButton} link='/RadioButtonsTab' />
      </section>
    </>
  );
};

export default CheckBoxesTab;