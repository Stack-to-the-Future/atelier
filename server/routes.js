const router = require('express').Router();
const productsController = require('./controllers/productController');
const reviewsController = require('./controllers/reviewsController');
const questionsController = require('./controllers/questionsController');

router.get('/qa/questions', questionsController.getQuestions);
router.get('/qa/questions/:id/answers', questionsController.getQuestionAnswers);
router.post('/qa/questions', questionsController.addQuestion);
router.post('/qa/questions/:id/answers', questionsController.addAnswer);
router.put('/qa/questions/:id/helpful', questionsController.addQuestionHelpful);
router.put('/qa/question/:id/report', questionsController.reportQuestion);
router.put('/qa/answers/:id/helpful', questionsController.addAnswerHelpful);
router.put('/qa/answers/:id/report', questionsController.reportAnswer);

router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getProduct);
router.get('/products/:id/styles', productsController.getProductStyles);
router.get('/products/:id/related', productsController.getRelatedProducts);

router.get('/reviews/meta/:id', reviewsController.getMetadata);

module.exports = router;
