import React from "react";

function Categories({items, onClickItem}){
    const [selectItem, setSelectItem] = React.useState();
    return(
        <div className="categories">
            <ul>
                <li className={selectItem === null ? 'active':''} onClick={() => setSelectItem(null)}>Все</li>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={selectItem === index ? 'active':''}
                            key={index}
                            onClick={() => setSelectItem(index)}
                        >
                            {name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;