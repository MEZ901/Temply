import db from "../models/index.js";

const Test = db.Test;

export const createTest = async (req, res) => {
  try {
    const { name } = req.body;
    const test = await Test.create({ name });
    res.status(201).json(test);
  } catch (error) {
    console.error("Error creating test:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllTests = async (req, res) => {
  try {
    const test = await Test.findAll();
    res.status(200).json(test);
  } catch (error) {
    console.error("Error fetching tests:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTestById = async (req, res) => {
  try {
    const test = await Test.findByPk(req.params.id);
    if (!test) return res.status(404).json({ message: "Test not found" });
    res.status(200).json(test);
  } catch (error) {
    console.error("Error fetching test by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTest = async (req, res) => {
  try {
    const { name } = req.body;
    const test = await Test.findByPk(req.params.id);
    if (!test) return res.status(404).json({ message: "Test not found" });
    test.name = name;
    await test.save();
    res.status(200).json(test);
  } catch (error) {
    console.error("Error updating test:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTest = async (req, res) => {
  try {
    const test = await Test.findByPk(req.params.id);
    if (!test) return res.status(404).json({ message: "Test not found" });
    await test.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting test:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
