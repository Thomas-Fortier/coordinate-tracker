import Coordinate from "../models/Coordinate.js";

export default class CoordinatesController {
  static async findAll(req, res, next) {
    res.status(200).json(await Coordinate.find());
  }

  static async post(req, res, next) {
    const coordinateInfo = getCoordinateInfo(req);

    let newCoordinate = new Coordinate(coordinateInfo);

    // Post coordinate
    newCoordinate.save(error => {
      if (error)
        res.status(400).json({ error, status: 'Not saved' });
    });

    res.status(200).json({ status: 'Saved' });
  }

  static async delete(req, res, next) {
    const id = req.params.id;
    
    Coordinate.findByIdAndDelete(id, error => {
      if (error)
        res.status(400).json({ error, status: 'Not deleted' });
    });

    res.status(200).json({ status: 'Deleted' });
  }
}

function getCoordinateInfo(req) {
  const x = req.body.x;
  const y = req.body.y;
  const z = req.body.z;
  const position = [ x, y, z ];

  return {
    name: req.body.name,
    position
  }
}