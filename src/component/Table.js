import React, {Component} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { connect } from 'react-redux';
import '../assets/style.scss';
 
const SortableItem = SortableElement(({value}) => <div>{value}</div>);
 
const SortableList = SortableContainer(({items}) => {
  return (
      <div className="table">
      {items.map((value, index) => (
          <table className="table__table" key={value.id}>
              <thead>
                <tr className="table__tr">
                    <th className="table__th">ФИО</th>
                    <th className="table__th">Отдел</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table__tr">
                    <td className="table__td">
                        {value.name}
                    </td>
                    <td className="table__td">
                        <SortableItem key={`item-${value.id}`} index={index} value={value.department} />
                    </td>
                  </tr>
              </tbody>
          </table>
      ))}
      </div>
  );
});
 
class SortableComponent extends Component {
  state = {
    items: this.props.userList
    };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

const mapStateToProps = state => ({
    userList: state.userList,
})

export default connect(mapStateToProps)(SortableComponent);