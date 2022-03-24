import {Categories, PizzaCard, SortPopup} from "../components";

const categories = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
const sort = ['популярности','цене','алфавиту']

function Home({items}){
    return(
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categories}
                    onClickItem={(name) => console.log(name)}
                />
                <SortPopup
                    items={sort}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
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