import React, { Component } from 'react';
import '../assets/style.scss';
import { connect } from 'react-redux';
import Board from './Board';
import Card from './Card';

class Admin extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="admin">
              <h2>Профиль</h2>
              <p>Вас зовут: {user.name}</p>
              <Board id="board-1" className="board">
                  <Card id="card-1" className="card" draggable="true">
                      <p>STO</p>
                  </Card>
              </Board>
              <Board id="board-2" className="board">
                  <Card id="card-2" className="card" draggable="true">
                      <p>IVC</p>
                  </Card>
              </Board>
              {/* {this.props.userList.map(item => (
                  <li>{item.name}</li>
              ))} */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    userList: state.userList
})
  
// const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps)(Admin);