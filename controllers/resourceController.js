const Resource = require("../models/resourceModel");

exports.createResource = async (req, res) => {
  try {
    const resource = await Resource.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json(resource);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllResources = async (req, res) => {
  const resources = await Resource.find();
  res.json(resources);
};

exports.getResourceById = async (req, res) => {
  const resource = await Resource.findById(req.params.id);
  if (!resource) return res.status(404).json({ message: "Resource not found" });
  res.json(resource);
};

exports.updateResource = async (req, res) => {
  const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(resource);
};

exports.deleteResource = async (req, res) => {
  await Resource.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
