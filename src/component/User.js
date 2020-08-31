import React, { Component } from 'react';
import '../assets/style.scss';
import { connect } from 'react-redux';

class User extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="user">
                <div className="container">
                    <div className="user__loguser">
                        <h2>Профиль</h2>
                        <p>Вас зовут: <span>{user.name}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
})
  
// const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps)(User);