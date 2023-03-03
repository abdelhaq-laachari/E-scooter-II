const asyncHandler = require("express-async-handler");
const Scooter = require("../models/scooterModel");

// @desc    Get all scooters
// @route   GET /allScooters
// @access  Private

const getScooters = asyncHandler(async (req, res) => {
  // const scooters = await Scooter.find({ isRented: "Not Rented"});
  const scooters = await Scooter.find({});
  res.json(scooters);
});

// @desc    Create new scooter
// @route   POST /admin/scooter
// @access  Private

const createScooter = asyncHandler(async (req, res) => {
  const { latitude, longitude, company, model, battery, price } = req.body;

  if (!latitude || !longitude || !company || !model || !battery || !price) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const scooter = await Scooter.create({
    latitude,
    longitude,
    isRented: "Not Rented",
    company,
    model,
    battery,
    price,
  });

  if (scooter) {
    res.status(201).json({
      message: "Scooter created successfully",
    });
  } else {
    res.status(400);
    throw new Error("Invalid scooter data");
  }
});

// @desc    Delete scooter
// @route   DELETE /admin/scooter/:id
// @access  Private

const deleteScooter = asyncHandler(async (req, res) => {
  const scooter = await Scooter.findById(req.params.id);

  if (scooter) {
    await scooter.remove();
    res.json({ message: "Scooter removed" });
  } else {
    res.status(404);
    throw new Error("Scooter not found");
  }
});

// @desc    Rent a scooter
// @route   POST /user/rent
// @access  Private

const rentScooter = asyncHandler(async (req, res) => {
  const scooterId = req.params.id;
  if (!scooterId) {
    res.status(400);
    throw new Error("Scooter not found");
  }

  const rent = await Scooter.findByIdAndUpdate(scooterId, {
    isRented: "Rented",
  });

  const newScooter = await Scooter.findById(scooterId);

  if (rent) {
    res.status(200).json(newScooter);
  } else {
    res.status(400);
    throw new Error("Scooter not found");
  }
});

// export route file
module.exports = {
  getScooters,
  createScooter,
  deleteScooter,
  rentScooter,
};