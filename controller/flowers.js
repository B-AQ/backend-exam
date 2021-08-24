const axios = require("axios");
const { flowerModel } = require("../model/flowerSchema");

const getFlowers = (req, res) => {
  const url = "https://flowers-api-13.herokuapp.com/getFlowers";
  axios
    .get(url)
    .then((flower) => res.send(flower.data))
    .catch((err) => console.log(err));
};

const createFav = (req, res) => {
  const { name, photo, instructions } = req.body;
  const newFlower = new flowerModel({
    name: name,
    photo: photo,
    instructions: instructions,
  });
  newFlower.save();
};

const favFlowers = (req, res) => {
  flowerModel.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
};
const deleteFav = (req, res) => {
  const id = req.params.id;
  flowerModel.deleteOne({ _id: id }, (error, data) => {});
  flowerModel.find({}, (error, data) => {
    res.send(data);
  });
};

const updateFav = (req, res) => {
  const flowerId = req.prams.flower_id;
  const { name, photo, instructions } = req.body;

  flowerModel.findByIdAndUpdate(
    { _id: flowerId },

    {
      name: name,
      photo: photo,
    },

    { new: true },
    (err, data) => {
      res.send(data);
    }
  );
};

module.exports = { getFlowers, createFav, favFlowers, deleteFav, updateFav,};
