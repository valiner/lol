/**
 * 获取最新新闻
 */
import axios from 'axios'

export const posts = () => axios.get('/api/posts?include=user,commentcount')
export const postdetails = (post_id) => axios.get('/api/posts/'+post_id+'?include=user')
export const commentlist = (post_id) => axios.get('/api/posts/'+post_id+'/comments?include=commentcount,user')
export const commentChildList = (comment_id) => axios.get('/api/comments/'+comment_id+'/comments?include=user,comment:limit(10)')
export const createpost = (title, content) => axios.post('/api/posts',{title: title, content: content})
export const createcomment = (parent_id, post_id, content) => axios.post('/api/posts/'+post_id+'/comments',{parent_id: parent_id, post_id: post_id, content: content})
export const login = (email, password) => axios.post('/api/authorizations',{email: email, password: password})
export const verification = email => axios.get('/api/verification/' + email)
export const register = (code, email, password,nickname) => axios.post('/api/register', {code: code, email: email, password: password,nickname:nickname})
export const newDetails = newid => axios.get('/api/news/' + newid)
export const newNews = (page) => axios.get('/api/news?page='+page)
export const etmNews = (page) => axios.get('/api/news/etm?page='+page)
export const verNews = (page) => axios.get('/api/news/ver?page='+page)
export const lplNews = (page) => axios.get('/api/news/lpl?page='+page)
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
export const userpro = () => axios.get('/api/user')
export const updateImg = (head_img) => axios.post('/api/user/img',{head_img : head_img})


