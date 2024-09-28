
import './App.css'
import {Ingredient} from "./type"
import burgerImage from "./assets/burger.jpg";
import stripsImage from "./assets/strips.jpg";
import freeImage from "./assets/free.png";
import colaImage from "./assets/cola.jpg";
import  teaImage from "./assets/tea.jpg";
import  coffeeImage from "./assets/coffee.jpg";


const App = () => {

  const INGREDIENTS: Ingredient[] = [
    {name: 'Burger', price: 80, image: burgerImage},
    {name: 'Strips', price: 50, image: stripsImage },
    {name: 'Free', price: 60, image: freeImage},
    {name: 'Cola', price: 40, image: colaImage},
    {name: 'Tea', price: 40, image: teaImage},
    {name: 'Coffee', price: 100, image: coffeeImage},
  ];


  const AddIngredient = (name: string) => {
    console.log(name);
  }


  return (
      <>
        <div>
          {INGREDIENTS.map(ingredient => (
              <div key={ingredient.name}>
                <button style={{display: "flex", alignItems: "center"}} onClick={() => AddIngredient(ingredient.name)}
                        type='button'><img width={50} src={ingredient.image}
                                           alt={ingredient.name}/>
                  {ingredient.name}
                  price:  {ingredient.price} KGS
                </button>
              </div>
          ))}
        </div>
      </>
  )

};

export default App
