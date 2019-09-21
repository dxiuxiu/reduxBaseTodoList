import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions/visibilityFilter";
import { Dispatch } from 'redux';
import Link from "../components/Link";
import { IStoreState, VisibilityFilters } from '../types'

interface IProps {
  filter: VisibilityFilters
}

const mapStateToProps = (state: IStoreState, ownProps: IProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
