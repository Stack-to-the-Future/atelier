import React, {} from 'react';

const ComparingModal = ({ compaired, products, setShowModal }) => {
  // const [modalStatus, setModalStatus] = useState(false);
  console.log('');
  return (
    <div className="product-modal">
      <h3>Comparing</h3>
      <button className="close-modal" type="button" onClick={() => { setShowModal(false); }}> X </button>
      <table className="table-modal">
        <thead>
          <tr>
            <th>{products[2].name}</th>
            <th>{'    VS   '}</th>
            <th>{compaired.name}</th>
          </tr>
        </thead>
        <br />
        <tbody>
          <tr>
            <td>{products[2].category}</td>
            <td> category </td>
            <td>
              {compaired.category}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparingModal;
