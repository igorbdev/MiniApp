import {Route, Routes} from 'react-router-dom';

import Home from '../pages/Home';
import PlanoIdeal from '../pages/IdealPlan';
import CheckBoxesTab from '../pages/IdealPlan/IdealPlanPages/CheckBoxesTab/CheckBoxesTab';
import MonetaryValueTab from '../pages/IdealPlan/IdealPlanPages/MonetaryValueTab/MonetaryValueTab';
import RadioButtonsTab from '../pages/IdealPlan/IdealPlanPages/RadioButtonsTab/RadioButtonsTab';
import ResultsTab from '../pages/IdealPlan/IdealPlanPages/ResultsTab/ResultsTab';
import SelectTab from '../pages/IdealPlan/IdealPlanPages/SelectTab/SelectTab';
import InitialMenu from '../pages/InitialMenu/InitialMenu';

function RoutesPage(){
    return(
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/InitialMenu" Component={InitialMenu} />
                <Route path="/PlanoIdeal" Component={PlanoIdeal} />
                <Route path="/MonetaryValueTab" Component={MonetaryValueTab} />
                <Route path="/CheckBoxesTab" Component={CheckBoxesTab} />
                <Route path="/RadioButtonsTab" Component={RadioButtonsTab} />
                <Route path="/SelectTab" Component={SelectTab} />
                <Route path="/ResultsTab" Component={ResultsTab} />
            </Routes>
    )
}

export default RoutesPage