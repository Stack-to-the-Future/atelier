const axios = require('axios');
const productAPIFunctions = require('../../client/src/lib/productAPIFunctions');

jest.mock('axios');

describe('productAPIFunctions', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call for products properly', async () => {
    const mockProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    axios.mockResolvedValueOnce({ data: mockProducts });

    const result = await productAPIFunctions.getProducts();

    expect(axios).toHaveBeenCalledWith({
      method: 'GET',
      url: '/products',
    });
    expect(result.data).toEqual(mockProducts);
  });

  it('should call for ratings properly', async () => {
    const productId = 123;
    const mockRatings = { rating: 4.5, reviews: 100 };
    axios.mockResolvedValueOnce({ data: mockRatings });

    const result = await productAPIFunctions.getRatings(productId);

    expect(axios).toHaveBeenCalledWith({
      method: 'GET',
      url: `/reviews/meta/${productId}`,
    });
    expect(result.data).toEqual(mockRatings);
  });

  it('should call product information properly', async () => {
    const productId = 456;
    const mockProduct = { id: productId, name: 'Product XYZ' };
    axios.mockResolvedValueOnce({ data: mockProduct });

    const result = await productAPIFunctions.getProduct(productId);

    expect(axios).toHaveBeenCalledWith({
      method: 'GET',
      url: `/products/${productId}`,
    });
    expect(result.data).toEqual(mockProduct);
  });

  it('should call for styles properly', async () => {
    const productId = 123;
    const mockStyles = { style1: 1, style2: 2 };
    axios.mockResolvedValueOnce({ data: mockStyles });

    const result = await productAPIFunctions.getStyles(productId);

    expect(axios).toHaveBeenCalledWith({
      method: 'GET',
      url: `/products/${productId}/styles`,
    });
    expect(result.data).toEqual(mockStyles);
  });

  it('should call for related products properly', async () => {
    const productId = 123;
    const mockRelatedProducts = [1, 2, 3];
    axios.mockResolvedValueOnce({ data: mockRelatedProducts });

    const result = await productAPIFunctions.getRelatedProducts(productId);

    expect(axios).toHaveBeenCalledWith({
      method: 'GET',
      url: `/products/${productId}/related`,
    });
    expect(result.data).toEqual(mockRelatedProducts);
  });
});
