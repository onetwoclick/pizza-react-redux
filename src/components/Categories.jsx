import React from "react";

function Categories({items, onClickItem}){
    const [selectItem, setSelectItem] = React.useState();
    const onSelectItem = (index) => {
        setSelectItem(index);
    }

    return(
        <div className="categories">
            <ul>
                <li className={selectItem === null ? 'active':''} onClick={() => onSelectItem(null)}>Все</li>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={selectItem === index ? 'active':''}
                            key={index}
                            onClick={() => onSelectItem(index)}
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