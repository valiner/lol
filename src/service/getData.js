/**
 * 获取最新新闻
 */
import axios from 'axios'

export const newsNew = () => axios.get('/api/school')
export const newDetails = newid => axios.get('/api/newDetails/' + newid)
export const newNews = () => axios.get('/api/newNews')
export const etmNews = () => axios.get('/api/etmNews')
export const verNews = () => axios.get('/api/verNews')
export const lplNews = () => axios.get('/api/lplNews')
export const searchRecord = () => axios.get('/api/searchRecord')
export const recordlist = (areaid, userid) => axios.get('/api/recordList/' + areaid + '/' + userid)
export const gameshow = () => axios.get('/api/gameRecently/')
export const gamedetails = gameid => axios.get('/api/gameDetails/' + gameid)
export const gvideo = gameid => axios.get('/api/gvideo/' + gameid)
export const herotype = typeid => axios.get('/api/hero/type/' + typeid)
export const herodetails = heroid => axios.get('/api/hero/' + heroid)
export const goodsdetails = goodsid => axios.get('/api/goods/' + goodsid)
export const dtype = () => axios.get('/api/dtype')
export const skilldetails = skillid => axios.get('/api/skill/' + skillid)

