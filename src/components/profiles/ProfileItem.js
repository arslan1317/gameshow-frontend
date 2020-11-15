import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const ProfileItem = ({ profile: {
  id,
  first_name,
  last_name,
  img_path,
  email,
  username,
  is_active
} 
}) => {
  return (
    <div className="profile bg-light">
      <img src={img_path} alt="User" className="round-img"></img>
      <div>
        <h2>
          {first_name + ' ' + last_name }
        </h2>
        <p>Email: {email} </p>
        <p>Username: {username} </p>
        <p>Account Status: {is_active ? 'ACTIVE' : 'INACTIVE'} </p>
        {/* <p className="my-1">{location && <span>{location}</span>}</p> */}
        <Link to={`/profile/${id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      {/* <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul> */}
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileItem
