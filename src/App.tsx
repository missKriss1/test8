
import './App.css'
import {Ingredient} from "./type"
import burgerImage from "./assets/burger.jpg";
import stripsImage from "./assets/strips.jpg";
import freeImage from "./assets/free.png";
import colaImage from "./assets/cola.jpg";
import  teaImage from "./assets/tea.jpg";
import  coffeeImage from "./assets/coffee.jpg";
import {useState} from "react";


const App = () => {

  const INGREDIENTS: Ingredient[] = [
    {name: 'Burger', price: 80, image: burgerImage},
    {name: 'Strips', price: 50, image: stripsImage },
    {name: 'Free', price: 60, image: freeImage},
    {name: 'Cola', price: 40, image: colaImage},
    {name: 'Tea', price: 40, image: teaImage},
    {name: 'Coffee', price: 100, image: coffeeImage},
  ];

  const [ingredients, setIngredients] = useState([
    { name: 'Burger', count: 0 },
    { name: 'Strips', count: 0 },
    { name: 'Free', count: 0 },
    { name: 'Cola', count: 0 },
    { name: 'Tea', count: 0 },
    { name: 'Coffee', count: 0 },
  ]);

  const AddIngredient = (name: string) => {
    console.log(name);
    const  newArrayToState = ingredients.map(ingred => {
      if (ingred.name === name) {
        return {
          ...ingred,
          count: ingred.count + 1
        };
      }

      return ingred;
    });

    setIngredients(newArrayToState);
  }


  const getBurgerInner = () => {
    const ingredientElements = ingredients.map(ingred => {
      if (ingred.count > 0) {
        let ingredPrice = 0;
        for (let i = 0; i < INGREDIENTS.length; i++) {
          if (INGREDIENTS[i].name === ingred.name) {
            ingredPrice = INGREDIENTS[i].price;
          }
        }

        const ingredientCost = ingredPrice * ingred.count;

        return (
            <div key={ingred.name} className="ingred">
              <h3>
                {ingred.name} (x{ingred.count}) - {ingredientCost} KGS
              <button onClick={() => removeIngredient(ingred.name)}>Remove</button>
              </h3>
            </div>
        );
      }
      return null;
    });

    if(ingredientElements.length === 0) {
      return (
          <>
            <h3>Order is empty!</h3>
            <h3>Please add some items</h3>
            <hr/>
            <h3 className="total">Total: 0 KGS</h3>
          </>
      )
    }

    let total = 0;


    for (let i = 0; i < ingredients.length; i++) {
     const ingred = ingredients[i];
     for (let j = 0; j < INGREDIENTS.length; j++) {
       if(INGREDIENTS[j].name === ingred.name && ingred.count > 0) {
         total += ingred.count * INGREDIENTS[j].price;
       }
     }
   }

    return (
        <>
          {ingredientElements}
          <hr/>
          <h3 className="total">Total: {total} KGS</h3>
        </>
    );
  };

  const removeIngredient = (name: string) => {
    const newArrayState = ingredients.map(ingred => {
      if (ingred.name === name && ingred.count > 0) {
        return {
          ...ingred,
          count: ingred.count - 1 };
      }
      return ingred;
    });

    setIngredients(newArrayState);
  };

  return (
      <>
        <div className="Conatiner">
          <div>
            <h2 style={{margin: "20px"}}> Add Items</h2>
            {INGREDIENTS.map(ingredient => (
                <div key={ingredient.name} >
                  <button className="blockIngred" onClick={() => AddIngredient(ingredient.name)}
                          type='button'><img width={100} src={ingredient.image}
                                             alt={ingredient.name}/>
                    {ingredient.name}
                    price: {ingredient.price} KGS
                  </button>
                </div>
            ))}
          </div>

          <div>
          <h2 style={{margin: "20px"}}> Order Details</h2>
          <div className="blockPay">
            {getBurgerInner()}
          </div>
          </div>


        </div>

      </>
  )

};

export default App
