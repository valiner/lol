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
