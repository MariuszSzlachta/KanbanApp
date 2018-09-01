import React, { PropTypes } from 'react';
import NotesContainer from '../Note/NoteContainer';
import Edit from '../../components/Edit';

import styles from './Lane.css';

const Lane = (props) => {
  const { connectDropTarget, lane, laneNotes, updateLane, addNote, deleteLane, editLane } = props;
  const laneId = lane.id;

  return connectDropTarget(
    <div className={styles.Lane}>
      <div className={styles.LaneHeader}>
        <Edit
          className={styles.LaneName}
          editing={lane.editing}
          value={lane.name}
          onValueClick={() => editLane(lane.id)}
          onUpdate={name => updateLane({ ...lane, name, editing: false })}
        />
        <div className={styles.LaneDelete}>
          <button onClick={() => deleteLane(laneId)}>×</button>
        </div>
        <div className={styles.LaneAddNote}>
          <button onClick={() => addNote({ task: 'New note' }, laneId)}>Add note</button>
        </div>

      </div>
      <NotesContainer
        notes={laneNotes}
        laneId={laneId}
      />
    </div>
  );
};

Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
  editLane: PropTypes.func,
  connectDropTarget: PropTypes.any,
};

export default Lane;
