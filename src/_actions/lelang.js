import {REGISTER, LOGIN, SET_PRODUCT, GET_PRODUCTS, NEWS, EVENTS, AUCTION, SET_BID, PROFILE, SET_AUTO_BID, AUTO} from '../config/constants'

import axios from 'axios'

export const setRegister = data => {
    return {
        type: REGISTER,
        payload: axios({
            method: 'post',
            url: `http://localhost:5000/api/v1/register`,
            data: data
        })
    }
}
export const setLogin = data => {
    
    return {
        type: LOGIN,
        payload: axios({
            method: 'post',
            url: `http://localhost:5000/api/v1/login`,
            data: data
        })
    }
}

export const setAuction = data => {
    const Token = localStorage.getItem("token")
    return {
        type: SET_PRODUCT,
        payload: axios({
            method: 'post',
            url: `http://localhost:5000/api/v1/auction`,
            headers: {
                'content-type' : 'multipart/form-data',
                'Authorization': 'Bearer ' + Token,
            },
            data: data
        })
    }
}

export const getProduct = () => {
    return {
        type: GET_PRODUCTS,
        payload: axios({
            method: 'get',
            url: `http://localhost:5000/api/v1/products`
        })
    }
}

export const getNews = () => {
    return {
        type: NEWS,
        payload: axios({
            method: 'get',
            url: `http://localhost:5000/api/v1/news`
        })
    }
}
export const getEvents = () => {
    return {
        type: EVENTS,
        payload: axios({
            method: 'get',
            url: `http://localhost:5000/api/v1/events`
        })
    }
}
export const getAuction = (id) => {
    return {
        type: AUCTION,
        payload: axios({
            method: 'get',
            url: `http://localhost:5000/api/v1/event/${id}/auctions`
        })
    }
}
export const setBid = (data) => {
    const token = localStorage.getItem('token')
    return {
        type: SET_BID,
        payload: axios({
            method: 'post',
            url: `http://localhost:5000/api/v1/user-auction`,
            data: data,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export const getProfile = () => {
    const token = localStorage.getItem("token")
    return {
        type: PROFILE,
        payload: axios({
            method: 'get',
            url: `http://localhost:5000/api/v1/profile`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export const setAutoBid = (data) => {
    const token = localStorage.getItem("token")
    return {
        type: SET_AUTO_BID,
        payload: axios({
            method: 'post',
            url: `http://localhost:5000/api/v1/auto-bid`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: data
        })
    }
}

export const Auto = (data) => {
    const token = localStorage.getItem("token")
    return {
        type: AUTO,
        payload: axios({
            method: 'post',
            url: `http://localhost:5000/api/v1/auto`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: data
        })
    }
}