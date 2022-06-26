import MealsList from "./MealsList";
import MealsSummary from "./MealsSummary";
import {Fragment} from "react";

const Meals = ()=>{
    return (
        <Fragment>
            <MealsSummary />
            <MealsList/>
        </Fragment>
    )
}
export default Meals
