import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new note
router.route('/notes').post(NoteController.addNote);

// Delete note
router.route('/notes/:noteId').delete(NoteController.removeNote);

// Edit task in note
router.route('/notes/:noteId').put(NoteController.editTask);

export default router;
