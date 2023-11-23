import React, {} from 'react';

const ComparingModal = ({ product, products, setShowModal }) => {
  // const [modalStatus, setModalStatus] = useState(false);
  console.log('');
  return (
    <div className="product-modal">
      <h3>Comparing</h3>
      <button className="close-modal" type="button" onClick={() => { setShowModal(false); }}> X </button>
      <table className="table-modal">
        <thead>
          <tr>
            <th>Related-Product</th>
            <th>Feature</th>
            <th>Main Product</th>
          </tr>
        </thead>
        <br />
        <tbody>
          <tr>
            <td>relPro-feature</td>
            <td>  </td>
            <td>
              main-prod feature
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparingModal;
