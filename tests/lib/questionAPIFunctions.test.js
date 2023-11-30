const axios = require('axios');
const questionsAPIFunctions = require('../../client/src/lib/questionsAPIFunctions');

jest.mock('axios');

describe('productAPIFunctions', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call for questions properly', async () => {
    const mockParams = { product_id: 123, page: 1, count: 1000 };
    const mockQuestions = [{ id: 1, name: 'Question 1' }, { id: 2, name: 'Question 2' }];
    axios.mockResolvedValueOnce({ data: mockQuestions });

    const result = await questionsAPIFunctions.getQuestions(mockParams);

    expect(axios).toHaveBeenCalledWith({
      method: 'GET',
      url: '/qa/questions/',
      params: mockParams,
    });
    expect(result.data).toEqual(mockQuestions);
  });

  it('should call for answers properly', async () => {
    const questionId = 123;
    const mockParams = { page: 1, count: 1000 };
    const mockAnswers = [{ id: 1, name: 'Answer 1' }, { id: 2, name: 'Answer 2' }];
    axios.mockResolvedValueOnce({ data: mockAnswers });

    const result = await questionsAPIFunctions.getQuestionAnswers(questionId, mockParams);

    expect(axios).toHaveBeenCalledWith({
      method: 'GET',
      url: '/qa/questions/123/answers',
      params: mockParams,
    });
    expect(result.data).toEqual(mockAnswers);
  });

  it('should add a question properly', async () => {
    const mockProductId = 123;
    const mockBody = {
      body: 'fake', name: 'fake', email: 'fake@fake.yep', product_id: mockProductId,
    };
    const mockResponse = { status: 201, data: {} };
    axios.mockResolvedValueOnce(mockResponse);

    const result = await questionsAPIFunctions.addQuestion(mockBody);

    expect(axios).toHaveBeenCalledWith({
      method: 'POST',
      url: '/qa/questions',
      data: mockBody,
    });
    expect(result).toEqual(mockResponse);
  });

  it('should add an answer properly', async () => {
    const mockQuestionId = 123;
    const mockBody = {
      body: 'fake', name: 'fake', email: 'fake@fake.yep', photos: [1, 2, 3],
    };
    const mockResponse = { status: 201, data: {} };
    axios.mockResolvedValueOnce(mockResponse);

    const result = await questionsAPIFunctions.addAnswer(mockQuestionId, mockBody);

    expect(axios).toHaveBeenCalledWith({
      method: 'POST',
      url: '/qa/questions/123/answers',
      data: mockBody,
    });
    expect(result).toEqual(mockResponse);
  });

  it('should add question helpfulness properly', async () => {
    const mockQuestionId = 123;
    const mockResponse = { status: 201, data: {} };
    axios.mockResolvedValueOnce(mockResponse);

    const result = await questionsAPIFunctions.addQuestionHelpful(mockQuestionId);

    expect(axios).toHaveBeenCalledWith({
      method: 'PUT',
      url: '/qa/questions/123/helpful',
    });
    expect(result).toEqual(mockResponse);
  });

  it('should add answer helpfulness properly', async () => {
    const mockAnswerId = 123;
    const mockResponse = { status: 201, data: {} };
    axios.mockResolvedValueOnce(mockResponse);

    const result = await questionsAPIFunctions.addAnswerHelpful(mockAnswerId);

    expect(axios).toHaveBeenCalledWith({
      method: 'PUT',
      url: '/qa/answers/123/helpful',
    });
    expect(result).toEqual(mockResponse);
  });

  it('should report question properly', async () => {
    const mockQuestionId = 123;
    const mockResponse = { status: 204, data: {} };
    axios.mockResolvedValueOnce(mockResponse);

    const result = await questionsAPIFunctions.reportQuestion(mockQuestionId);

    expect(axios).toHaveBeenCalledWith({
      method: 'PUT',
      url: '/qa/questions/123/report',
    });
    expect(result).toEqual(mockResponse);
  });

  it('should report answer properly', async () => {
    const mockAnswerId = 123;
    const mockResponse = { status: 204, data: {} };
    axios.mockResolvedValueOnce(mockResponse);

    const result = await questionsAPIFunctions.reportAnswer(mockAnswerId);

    expect(axios).toHaveBeenCalledWith({
      method: 'PUT',
      url: '/qa/answers/123/report',
    });
    expect(result).toEqual(mockResponse);
  });
});
