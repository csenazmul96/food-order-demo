import classes from './MealsList.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const list = [
    {
        id: 1,
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 2,
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 3,
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 4,
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvalilableMeals = ()=>{
    const mealLIst = list.map((meal=><MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} id={meal.id} />))
    return (
        <section className={classes.meals}>
            <Card>
            <ul>
                {mealLIst}
            </ul>
            </Card>
        </section>
    )
}
export default AvalilableMeals
