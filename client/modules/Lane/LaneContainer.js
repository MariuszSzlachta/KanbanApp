import { connect } from 'react-redux';
import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';
import Lane from './Lane';

// ! będzie normalizacja
const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => state.notes.find(note => note.id === noteId)),
  };
};
const mapDispatchToProps = { ...laneActions, addNote: createNote };

export default connect(mapStateToProps, mapDispatchToProps)(Lane);
