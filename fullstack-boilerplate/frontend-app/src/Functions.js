import React, {useState} from 'react';

const Parent = props => {
  const [foodItems, setFoodItems] = useState(
  [
    'Guacamole',
    'Beef',
    'Bean'
  ]);

  const addBanana = () => {
    setFoodItems([...foodItems,  'Banana']);
  };

  return (
    <div className='parent-component'>
      <h3>List of Foods:</h3>
      <FoodList foods={foodItems} />
      <button onClick={ e => addBanana() }>Add Banana</button>
    </div>
  )
};

const FoodList = props => {
  return (
    <div className="food-list">
      {Object.values(props.foods).map((food, index) => {
        return <p key={`food-${ index }`}>{food}</p>;
      })}
    </div>
  )
}

export default Parent;
