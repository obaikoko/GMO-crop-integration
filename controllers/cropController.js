import asyncHandler from '../middleware/asyncHandler.js';
import Crop from '../models/cropModel.js';

// @desc GET ALL GMO CROPS
// @route GET /api/crops
// @access  Public
const getCrops = asyncHandler(async (req, res) => {
  const crop = await Crop.find({});
  if (crop.length === 0) {
    res.status(404);
    throw new Error('No Crop Found!');
  } else {
    res.status(200);
    res.json(crop);
  }
});

// @desc GET SPECIFIC GMO CROP
// @route GET /api/crops/:id
// @access  Public
const getCropById = asyncHandler(async (req, res) => {
  const crop = await Crop.findById(req.params.id);
  if (crop) {
    res.status(200);
    res.json(crop);
  } else {
    res.status(404);
    throw new Error('Crop cannot be found');
  }
});

// @desc POST  GMO CROP
// @route POST /api/crops/
// @access  Public
const addCrop = asyncHandler(async (req, res) => {
  const {
    name,
    characteristics,
    benefits,
    risk,
    cultivationPractices,
    regulations,
  } = req.body;
  const crop = await Crop.create({
    name,
    characteristics,
    benefits,
    risk,
    cultivationPractices,
    regulations,
  });

  if (crop) {
    res.status(200);
    res.json(crop);
  } else {
    res.status(400);
    throw new Error('Unable to add Crop');
  }
});

export { getCrops, getCropById, addCrop };
