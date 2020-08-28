import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
    render() {
        const { user } = this.props;
        return (
            <div>
              <h2>Профиль</h2>
              <p>Вас зовут: {user.name}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
})
  
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);