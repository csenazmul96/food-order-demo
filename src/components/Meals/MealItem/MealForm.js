import classes from './MealForm.module.css'
import Input from "../../UI/Input";

const MealForm = (props) =>{
    return (
        <form className={classes.form}>
        <Input label="Qty" input={{id:'qty', type:'number', defaultValue: '1', min: '1', max: '5', step: '1', }} />
        <button>+ Add</button>
        </form>
    )
}
export default MealForm
