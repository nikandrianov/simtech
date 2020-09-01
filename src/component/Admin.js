import React, { Component } from 'react';
import '../assets/style.scss';
import { connect } from 'react-redux';
import Table from './Table';

class Admin extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="admin">
                <div className="container">
                    <div className="admin__loguser">
                        <h2>Профиль</h2>
                        <p>Вас зовут: <span>{user.name}</span></p>
                    </div>
                    <Table />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
})
  
// const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps)(Admin);