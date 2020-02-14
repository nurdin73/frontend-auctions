import {REGISTER, LOGIN, SET_PRODUCT, NEWS, EVENTS, AUCTION, SET_BID, PROFILE, SET_AUTO_BID, AUTO} from '../config/constants'
const initialState = {
	register: [],
	login: [],
	setProduct: [],
	news: [],
	events: [],
	auction: [],
	setAuction: [],
	profile: [],
	autoBid: [],
	auto: [],
    isLoading: false,
    error: false
};

export const Lelang = (state = initialState, action) => {
    switch (action.type) {
        case `${REGISTER}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${REGISTER}_FULFILLED`:
			return {
				...state,
				register: action.payload.data,
				isLoading: false
			};
		case `${REGISTER}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
        case `${LOGIN}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${LOGIN}_FULFILLED`:
			return {
				...state,
				login: action.payload.data,
				isLoading: false
			};
		case `${LOGIN}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
        case `${SET_PRODUCT}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${SET_PRODUCT}_FULFILLED`:
			return {
				...state,
				setProduct: action.payload.data,
				isLoading: false
			};
		case `${SET_PRODUCT}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
        case `${NEWS}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${NEWS}_FULFILLED`:
			return {
				...state,
				news: action.payload.data,
				isLoading: false
			};
		case `${NEWS}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
        case `${EVENTS}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${EVENTS}_FULFILLED`:
			return {
				...state,
				events: action.payload.data,
				isLoading: false
			};
		case `${EVENTS}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
        case `${AUCTION}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${AUCTION}_FULFILLED`:
			return {
				...state,
				auction: action.payload.data,
				historyAuction: state.auction,
				isLoading: false
			};
		case `${AUCTION}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
        case `${SET_BID}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${SET_BID}_FULFILLED`:
			return {
				...state,
				setAuction: action.payload.data,
				isLoading: false
			};
		case `${SET_BID}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
        case `${PROFILE}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${PROFILE}_FULFILLED`:
			return {
				...state,
				profile: action.payload.data,
				isLoading: false
			};
		case `${PROFILE}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
		case `${SET_AUTO_BID}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${SET_AUTO_BID}_FULFILLED`:
			return {
				...state,
				autoBid: action.payload.data,
				isLoading: false
			};
		case `${SET_AUTO_BID}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
		case `${AUTO}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${AUTO}_FULFILLED`:
			return {
				...state,
				auto: action.payload.data,
				isLoading: false
			};
		case `${AUTO}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
        default:
            return state
    }
}