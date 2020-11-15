import React, { useEffect, Fragment } from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Profiles from '../profiles/Profiles'
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Dashboard = ({ getCurrentProfile, deleteAccount, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
    console.log('auth, profile', auth, profile)
  }, [getCurrentProfile]);
  return profile.loading && profile.profile === null ? <Spinner/> : <Fragment>
    <p className="lead">
      <i className="fas fa-user"></i> Welcome { profile && profile.profile && profile.profile.first_name }
    </p>
    {profile !== null ? ( <Fragment>
      <Profiles />
      {/* <DashboardActions></DashboardActions> */}
      {/* <Experience experience={profile.experience}></Experience>
      <Education education={profile.education}></Education>
      <div className='my-2'>
        <button className="btn btn-danger" onClick={() => deleteAccount()}>
          <i className="fas fa-user-minus"></i> {' '}
           Delete My Account
        </button>
      </div> */}
    </Fragment> ) : ( <Fragment>
      <p>You have not yet setup a profile, please add some info</p>
      <Link to="/create-profile" className="btn btn-primary my-1">
        Create Profile
      </Link>
      </Fragment>)}
  </Fragment>;
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
