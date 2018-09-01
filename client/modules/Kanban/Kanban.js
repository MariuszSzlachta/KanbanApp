import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { compose } from 'redux';

const Kanban = (props) => (
  <div className={styles.Kanban}>
    <Lanes lanes={props.lanes} />
    <button
      className={styles.AddLane}
      onClick={() => props.createLane({
        name: 'Click and type new name',
      })}
    >New list...</button>
  </div>
);

Kanban.need = [() => { return fetchLanes(); }];

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes),
});

const mapDispatchToProps = {
  createLane: createLaneRequest,
  fetchLanes,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
)(Kanban);
