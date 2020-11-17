import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle'
import "react-toggle/style.css";
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import axios from 'axios';
import {
  API_URL
} from "../../actions/types";

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
  const updateStatus = async (id,{currentTarget:{checked}}) => {
    try{
      const userStatus = await axios.put(API_URL + `/v1/backend/users/toggle/${id}`, {
        is_active: checked,
      });

      console.log(userStatus);

    } catch (e) {

    }
  }
  return (
        <TableRow key={id}>
                      
        <TableCell style={{ width: 50 }} component="th" scope="row" align="center"> 
          {id}
        </TableCell>
        <TableCell style={{ width: 160 }} align="center">
          {first_name}
        </TableCell>
        <TableCell style={{ width: 160 }} align="center">
          {last_name}
        </TableCell>
        <TableCell style={{ width: 160 }} align="center">
          {email}
        </TableCell>
        <TableCell style={{ width: 160 }} align="center">
          {username}
        </TableCell>
        <TableCell style={{ width: 160 }} align="center">
        <img src={img_path} alt="User" className="round-img"></img>
        </TableCell>
        <TableCell style={{ width: 160 }} align="center">
        <Toggle
          defaultChecked={is_active}
          className='toggle-color'
          onChange={e=>{updateStatus(id,e)}} /> 
        </TableCell>
      </TableRow>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileItem
