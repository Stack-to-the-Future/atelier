import React, {} from 'react';

const ComparingModal = ({ product, products }) => {
  // const [modalStatus, setModalStatus] = useState(false);
  console.log('');
  return (
    <div>
      <h3>Comparing</h3>
      <table className="product-modal">

        <tr>
          <th>{product.name}</th>
          <th>{ ' Feature' }</th>
          <th>{products[0].name}</th>
        </tr>

        <tr>
          <td>{product.category}</td>
          <td>Category</td>
          <td>{products[0].category}</td>
        </tr>

      </table>
    </div>
  );
};

export default ComparingModal;
