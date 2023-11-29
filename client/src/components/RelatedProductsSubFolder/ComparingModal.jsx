import React, { useState, useEffect } from 'react';
import productAPIFunctions from '../../lib/productAPIFunctions';
import './RelPro.css';

const ComparingModal = ({ compaired, handleModalStatus, current }) => {
  const [compairedProductFeatures, setCompairedProductFeatures] = useState([]);
  const [combinedFeatures, setCombinedFeatures] = useState([]);

  useEffect(() => {
    const getProductsFeatures = () => {
      productAPIFunctions.getProduct(compaired.id)
        .then((response) => {
          const { features } = response.data;
          const temp = features;
          setCompairedProductFeatures([...temp]);
        }).catch((err) => console.error(err));
    };

    getProductsFeatures();
  }, []);

  const combination = [current, ...compairedProductFeatures];
  const filteredCombination = combination.filter((prod, idx) => combination.indexOf(prod) === idx);

  useEffect(() => {
    setCombinedFeatures([...filteredCombination]);
  }, [compairedProductFeatures]);

  return (
    <div className="product-modal">
      <h3>Comparing</h3>
      <button className="close-modal" type="button" onClick={() => { handleModalStatus({ name: '', data: '' }); }}> X </button>
      <div className="table-modal">
        <table className="table-modal">
          <thead className="table-modal">
            <tr>
              <th className="table-modal">{current.name}</th>
              <th className="table-modal">{'   VS   '}</th>
              <th className="table-modal">{compaired.name}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{current.category}</td>
              <td> category </td>
              <td>
                {compaired.category}
              </td>
            </tr>

            <tr>
              <td>
                $
                {current.default_price}
              </td>
              <td> Price </td>
              <td>
                $
                {compaired.default_price}
              </td>
            </tr>
            {combinedFeatures.map((detail) => {
              const mTemp = [current].filter((item) => item.feature === detail.feature);
              const cTemp = compairedProductFeatures.filter((x) => (x.feature === detail.feature));
              return (
                <tr key={`${detail.value} ${compaired.id} ${compaired.price}`}>
                  <td className="table-modal">{mTemp[0] ? mTemp[0].value : '-'}</td>
                  <td className="table-modal">{detail.feature}</td>
                  <td className="table-modal">{cTemp[0] ? cTemp[0].value : '-'}</td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparingModal;
