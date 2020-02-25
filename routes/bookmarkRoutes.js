const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  getAllBookmarks,
  createBookmark,
  getBookmark,
  deleteBookmark,
  setUserQuestionId,
  hasPermission,
  setUserId,
  checkIfQuestionExist
} = require('./../controllers/bookmarkController');

const { protect } = require('./../controllers/authController');

router.use(protect);
router.get('/me', protect, setUserId, getAllBookmarks);
router
  .route('/')
  .get(getAllBookmarks)
  .post(setUserQuestionId, checkIfQuestionExist, createBookmark);

router
  .route('/:id')
  .get(getBookmark)
  .delete(hasPermission, deleteBookmark);

module.exports = router;
