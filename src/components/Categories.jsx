import React from "react";
import PropTypes from "prop-types";
import Index from "./PizzaBlock";

function Categories({items, onClickCategory, activeCategory}){

    return(
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active':''} onClick={() => onClickCategory(null)}>Все</li>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={activeCategory === index ? 'active':''}
                            key={index}
                            onClick={() => onClickCategory(index)}
                        >
                            {name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

Categories.propTypes = {
  items: PropTypes.array.isRequired,
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  onClickCategory: PropTypes.func.isRequired
}

Categories.degaulProps = {
  items: [],
  activeCategory: null
}

export default Categories;