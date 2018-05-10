/**
 * 获取最新新闻
 */
import axios from 'axios'

export const login = (email, password) => axios.post('/api/authorizations',{email: email, password: password})
export const newsNew = () => axios.get('/api/school')
export const newDetails = newid => axios.get('/api/news/' + newid)
export const newNews = () => axios.get('/api/news')
export const etmNews = () => axios.get('/api/news/etm')
export const verNews = () => axios.get('/api/news/ver')
export const lplNews = () => axios.get('/api/news/lpl')
export const searchRecord = () => axios.get('/api/searchRecord')
export const recordlist = (areaid, userid) => axios.get('/api/recordList/' + areaid + '/' + userid)
export const gameshow = () => axios.get('/api/games/recently')
export const gamedetails = gameid => axios.get('/api/games/' + gameid)
export const gvideo = gameid => axios.get('/api/games/' + gameid + '/gvideos')
export const herotype = typeid => axios.get('/api/hero/type/' + typeid)
export const herodetails = heroid => axios.get('/api/heros/' + heroid)
export const goodsdetails = goodsid => axios.get('/api/goods/' + goodsid)
export const dtype = () => axios.get('/api/dtypes')
export const skilldetails = skillid => axios.get('/api/skills/' + skillid)
export const tongji = () => axios.get('/api/statistics')

