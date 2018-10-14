/* global localStorage */

import axios from 'axios'

// const API_URL = process.env.API_URL || 'http://api.cast.i.ng/'

const API_URL = process.env.API_URL || 'http://dummy.restapiexample.com/api/v1'





export default axios.create({
  baseURL: API_URL,
  headers: {
    // 
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Authorization': 'Bearer ' + localStorage.token
  }
})
