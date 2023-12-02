import React, { useState, useEffect } from 'react';
import productAPIFunctions from '../lib/productAPIFunctions.js';
import RelatedProductsList from './RelatedProductsSubFolder/RelatedProductsList.jsx';
import OutfitList from './RelatedProductsSubFolder/OutfitList.jsx';
import './RelatedProductsSubFolder/RelPro.css';

const RelatedProducts = ({
  products, current, handleModalStatus, handleCompaired,
  getMainProduct, ratings, handleProducts,
}) => {
  const [relatedProductsId, setRelatedProductsId] = useState([
    40348,
    40352,
    40350,
    40345,
    40344,
  ]);

  const addMissingProducts = () => {
    const missingProds = products.map((prod) => prod.id);
    const newProductsId = relatedProductsId.filter((i) => {
      console.log('related..', relatedProductsId, 'missing...', missingProds, 'i::', i);
      return !missingProds.includes(i);
    });

    const promises = newProductsId.map((id) => {
      if (!missingProds.includes(id)) {
        return productAPIFunctions.getProduct(id)
          .then((data) => {
            const temp = data.data;
            return temp;
          });
      }
      return Promise.resolve(id);
    });

    Promise.all(promises)
      .then((results) => {
        handleProducts(results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (current) {
      productAPIFunctions.getRelatedProducts(current.id)
        .then((response) => {
          const arr = response.data;
          setRelatedProductsId(arr);
        })
        .catch((err) => console.error(err));
    }
  }, [current]);

  useEffect(() => {
    addMissingProducts();
  }, [relatedProductsId]);

  console.log('prods..', products);
  return (
    <div id="relpro">
      <p id="rel-prod-title">RELATED PRODUCTS</p>
      <RelatedProductsList
        handleModalStatus={handleModalStatus}
        handleCompaired={handleCompaired}
        products={products}
        getMainProduct={getMainProduct}
        relatedProductsId={relatedProductsId}
        current={current}
        ratings={ratings}
      />
      <br />
      <p id="outFit-prod-title">YOUR OUTFIT</p>
      <OutfitList
        handleModalStatus={handleModalStatus}
        handleCompaired={handleCompaired}
        current={current}
        getMainProduct={getMainProduct}
        ratings={ratings}
      />
    </div>
  );
};

export default RelatedProducts;
