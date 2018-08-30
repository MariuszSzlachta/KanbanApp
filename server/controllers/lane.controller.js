import Lane from '../models/lane';
import Note from '../models/note';
import uuid from 'uuid';

// Get all lanes
export function getLanes(req, res) {
  Lane.find().exec((err, lanes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ lanes });
  });
}

// Add lane
export function addLane(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  }

  const newLane = new Lane(req.body);

  newLane.id = uuid();
  newLane.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(saved);
  });
}

// Delete lane by laneID
// dla każdego elementu w notes znajdź jego odpowiednik w Note i usuń
// Na końcu usuń całą kolumne (lane);

export function deleteLane(req, res) {
  Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
    if (err) {
      res.status(500).send(err);
    }

    const notes = lane.notes;
    notes.forEach(note => {
      Note.findByIdAndRemove(note._id).exec();
    });
    lane.remove(() => {
      res.status(200).end();
    });
  });
}
