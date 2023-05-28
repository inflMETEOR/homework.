import React  from "react";
import css from "../../CSS/ToDo.module.css"
const edit = false
const Item = ({item}) =>{

    const { name,
    color,
    checked,
    edit,
    id} = item
    return( 
     <div>
       {edit ? (
        <>Edit Form</>
       ): (
        <div>
            <input 
            type="checkbox" 
            className={css.itemCheckbox}
            checked ={checked}
            onChange={() => {

            }}
            />
            <div className={css.itemDetails}>
                <p className={css.itemName}>{name}</p>
                <div className={`${css.itemColor} ${css[color]} `} ></div>
            </div>
            <button className={css.itemEditButton}
            onClick={() => {

            }}>
            Edit
            </button>
        </div>
       )} 
     </div>
    )
}

export default Item