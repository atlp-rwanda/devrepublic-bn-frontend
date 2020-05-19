import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import RequesterDashboard from './RequesterDashboard';
import ManagerDashboard from './ManagerDashboard';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '',
      token: '',
    };
  }

  componentDidMount() {
    const { token } = queryString.parse(this.props.location.search);
    const localStorageToken = localStorage.getItem('token');
    const userToken = localStorageToken || token;
    const { role } = jwtDecode(userToken);
    this.setState({ role, token: userToken });
  }

  checkRole = (role) => {
    const { token } = this.state;
    switch (role) {
      case 'requester':
        return <RequesterDashboard token={token} />;
      case 'manager':
        return <ManagerDashboard token={token} />;
      default:
        return null;
    }
  }

  render() {
    const { role } = this.state;
    return (
      <>
        { this.checkRole(role) }
      </>
    );
  }
}

export default Dashboard;

Dashboard.propTypes = {
  location: PropTypes.object,
};
