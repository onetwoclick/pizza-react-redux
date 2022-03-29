import {Categories, PizzaCard, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sort = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'alphabet'},
]

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);

  const onSelectCategory = index => {
    dispatch(setCategory(index));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categories}
          onClickItem={onSelectCategory}
        />
        <SortPopup
          items={sort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
        items.map(obj => (
          <PizzaCard
            key={obj.id}
            {...obj}
          />
        ))
        }
      </div>
    </div>
  )
}

export default Home;