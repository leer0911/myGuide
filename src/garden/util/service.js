import property from 'lodash/property';
import http from '../../../../service/index.js';
var qs = require('qs');

// 问题列表
export const getList = (param = {}) =>
  http.get(`/game`, { params: param }).then(property('data'));

// 点击量
export const clickCount = gid =>
  http.post(`/game`, JSON.stringify({ gid })).then(property('data'));
