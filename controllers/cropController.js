import asyncHandler from '../middleware/asyncHandler.js';

// @desc GET ALL GMO CROPS
// @route GET /api/crops
// @access  Public
const getCrops = asyncHandler(async (req, res) => {
  res.json('this is get all crop route');
});

// @desc GET SPECIFIC GMO CROP
// @route GET /api/crops/:id
// @access  Public
const getCropById = asyncHandler(async (req, res) => {
  res.json('this is get specific route');
});

export { getCrops, getCropById };
