import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, pushToAPI, tableStatus } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changedTableStatus: (h) => dispatch(tableStatus(h)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
