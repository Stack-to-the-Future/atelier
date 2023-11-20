import React, { useState /* useEffect */ } from 'react';
import Card from './Card.jsx';

const Carousel = ({ relatedProducts, photo }) => {
  const length = 3;
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState([...relatedProducts.slice(0, length)]);

  const scroll = (direction) => {
    const newIndex = index + direction;
    if (newIndex < 0) {
      setIndex(relatedProducts.length - 1);
    } else if (newIndex >= relatedProducts.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }

    let copy = relatedProducts.slice(index, index + length);
    if (copy.length < length) {
      copy = copy.concat(relatedProducts.slice(0, length - copy.length));
    }
    setDisplayed([...copy]);
  };

  return (
    <>
      <button onClick={() => scroll(-1)}><h4>◀︎ BACK</h4></button>
        <ul>
          {
            displayed.map((product, idx) => (
              <li key={idx}>
                <Card product={product} photo={photo}/>
                </li>
            ))
          }
        </ul>
        <button onClick={() => scroll(+1)}><h4>NEXT ▶︎</h4></button>
    </>
  );
};

export default Carousel;

/*
const numToDisplay = 3;

// the is the current index of the products array
const [startIndex, setStartIndex] = useState(0);
const [cards, setCards] = useState([]);

const toDisplay = (direction) => {
  // direction should come from buttons
  // if the left button is clicked direction should be -1
  // if the right button is clicked direction should be 1

  // use the direction to adjust startIndex
  // this ^  should move the start index to the left or to the right.
  // if it goes to -1 set it to the far right side of products
  // if it goes to products.length set it to the far left of the array

  // create a results arr set to products.slice
  // start the slice at startIndex
  // end slice at startIndex + numToDisplay

  // if results array length is less than numToDisplay
  // add more products into results
  // example....
  // numToDisplay = 3
  // startIndex = 3
  // products = [ item0, item1, item2, item3, item4, item5];
  //results = products.slice(startIndex, startIndex + numToDisplay)
  // at this point results = [item4, item5]
  // results.length == 2.... but we need it to be 3 (to match what we want to display)
  // so add from the front of products
  // find a way to add numToDisplay - results.length items from products

  // setCards(results)
}

return (
 <button onClick={() => toDisplay(-1)}> LEFT </button>
{
   cards.map((card) => <Card />);
}
<button onClick={() => toDisplay(1)}> RIGHT </button>
)
*/
