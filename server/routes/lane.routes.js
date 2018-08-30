import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();
// Get all lanes
router.route('/lanes').get(LaneController.getLanes);

// Add new lane
router.route('/lanes').post(LaneController.addLane);

// Delete a lane by laneId
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

// Update lane name
router.route('/lanes/:laneId').put(LaneController.editLane);

export default router;
