import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComparingModal = ({ compaired, products, setModalStatus }) => {
  const [mainProductFeatures, setMainProductFeatures] = useState([]);
  const [compairedProductFeatures, setCompairedProductFeatures] = useState([]);
  const [combinedFeatures, setCombinedFeatures] = useState([]);

  // when modal mounts
  useEffect(() => {
    const getProductsFeatures = () => {
      const options = { headers: { Authorization: process.env.TOKEN } };
      axios.get(`${process.env.URL}/products/${products[2].id}`, options).then((data) => {
        const { features } = data.data;
        const temp = features;
        setMainProductFeatures([...temp]);
        return axios.get(`${process.env.URL}/products/${compaired.id}`, options);
      }).then((response) => {
        const { features } = response.data;
        const temp = features;
        setCompairedProductFeatures([...temp]);
      }).catch((err) => console.error(err));
    };

    getProductsFeatures();
  }, []);

  // combine both products features arrays
  const combination = [...mainProductFeatures, ...compairedProductFeatures];
  const filteredCombination = combination.filter((prod, idx) => combination.indexOf(prod) === idx);

  useEffect(() => {
    setCombinedFeatures([...filteredCombination]);
  }, [mainProductFeatures, compairedProductFeatures]);

  return (
    <div className="product-modal">
      <h3>Comparing</h3>
      <button className="close-modal" type="button" onClick={() => { setModalStatus({ name: '' }); }}> X </button>
      <div className="modal">
        <table className="table-modal">
          <thead>
            <tr>
              <th>{products[2].name}</th>
              <th>{'   VS   '}</th>
              <th>{compaired.name}</th>
            </tr>
          </thead>

          <tbody>
            <tr style={{ border: 0.5 }}>
              <td>{products[2].category}</td>
              <td> category </td>
              <td>
                {compaired.category}
              </td>
            </tr>

            <tr>
              <td>
                $
                {products[2].default_price}
              </td>
              <td> Price </td>
              <td>
                $
                {compaired.default_price}
              </td>
            </tr>

            {/* <tr>
              <td>{products[2].reviews}</td>
              <td> Reviews </td>
              <td>
                {compaired.reviews}
              </td>
            </tr> */}

            {combinedFeatures.map((detail) => {
              const mTemp = mainProductFeatures.filter((item) => item.feature === detail.feature);
              const cTemp = compairedProductFeatures.filter((x) => (x.feature === detail.feature));
              return (
                <tr key={detail.value + detail.id}>
                  <td>{mTemp[0] ? mTemp[0].value : '-' }</td>
                  <td>{detail.feature}</td>
                  <td>{cTemp[0] ? cTemp[0].value : '-' }</td>
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
