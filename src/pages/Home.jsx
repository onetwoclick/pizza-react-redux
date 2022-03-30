import React from "react";
import {Categories, PizzaBlock, SortPopup, LoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";


const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sort = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'name'},
]

function Home() {
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  },[]);

  const onSelectSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type));
  },[]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categories}
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          items={sort}
          activeSortBy={sortBy}
          onClickSortBy={onSelectSortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ?
        items.map(obj => (
          <PizzaBlock
            key={obj.id}
            {...obj}
          />
        ))
          : Array(12)
            .fill(0)
            .map((_, index) => <LoadingBlock key={index}/>)
        }
      </div>
    </div>
  )
}

export default Home;