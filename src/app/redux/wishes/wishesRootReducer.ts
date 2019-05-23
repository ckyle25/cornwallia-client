import { Injectable } from '@angular/core';
import { WishesService } from '../../services/wishes/wishesService';

// Action Constants
const GET_ACTIVE_USER = 'GET_ACTIVE_USER';
const GET_ACTIVE_USER_PENDING = 'GET_ACTIVE_USER_PENDING';
const GET_ACTIVE_USER_FULFILLED = 'GET_ACTIVE_USER_FULFILLED';
const GET_FAMILY_REFERENCE = 'GET_FAMILY_REFERENCE';
const GET_FAMILY_REFERENCE_PENDING = 'GET_FAMILY_REFERENCE_PENDING';
const GET_FAMILY_REFERENCE_FULFILLED = 'GET_FAMILY_REFERENCE_FULFILLED';
const GET_USERS = 'GET_USERS';
const GET_USERS_PENDING = 'GET_USERS_PENDING';
const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
const GET_WISHES = 'GET_WISHES';
const GET_WISHES_PENDING = 'GET_WISHES_PENDING';
const GET_WISHES_FULFILLED = 'GET_WISHES_FULFILLED';
const SET_WISHLIST_USER = 'SET_WISHLET_USER';
const INITIALIZE_WISHES = 'INITIALIZE_WISHES';
const RESERVE_WISH = 'RESERVE_WISH';
const RESERVE_WISH_PENDING = 'RESERVE_WISH_PENDING';
const RESERVE_WISH_FULFILLED = 'RESERVE_WISH_FULFILLED';
const RELEASE_WISH = 'RELEASE_WISH';
const RELEASE_WISH_PENDING = 'RELEASE_WISH_PENDING';
const RELEASE_WISH_FULFILLED = 'RELEASE_WISH_FULFILLED';
const ADD_WISH = 'ADD_WISH';
const ADD_WISH_PENDING = 'ADD_WISH_PENDING';
const ADD_WISH_FULFILLED = 'ADD_WISH_FULFILLED';
const DELETE_WISH = 'DELETE_WISH';
const DELETE_WISH_PENDING = 'DELETE_WISH_PENDING';
const DELETE_WISH_FULFILLED = 'DELETE_WISH_FULFILLED';
const UPDATE_WISH = 'UPDATE_WISH';
const UPDATE_WISH_PENDING = 'UPDATE_WISH_PENDING';
const UPDATE_WISH_FULFILLED = 'UPDATE_WISH_FULFILLED';
const GET_RESERVED_WISHES = 'GET_RESERVED_WISHES';
const GET_RESERVED_WISHES_PENDING = 'GET_RESERVED_WISHES_PENDING';
const GET_RESERVED_WISHES_FULFILLED = 'GET_RESERVED_WISHES_FULFILLED';
const GET_MY_WISHES = 'GET_MY_WISHES';
const GET_MY_WISHES_PENDING = 'GET_MY_WISHES_PENDING';
const GET_MY_WISHES_FULFILLED = 'GET_MY_WISHES_FULFILLED';
const UPDATE_WISHES_USER = 'UPDATE_WISHES_USER';
const UPDATE_WISHES_USER_PENDING = 'UPDATE_WISHES_USER_PENDING';
const UPDATE_WISHES_USER_FULFILLED = 'UPDATE_WISHES_USER_FULFILLED';
const UPDATE_WISHES_FAMILY = 'UPDATE_WISHES_FAMILY';
const UPDATE_WISHES_FAMILY_PENDING = 'UPDATE_WISHES_FAMILY_PENDING';
const UPDATE_WISHES_FAMILY_FULFILLED = 'UPDATE_WISHES_FAMILY_FULFILLED';
const UPDATE_BIO = 'UPDATE_BIO';
const UPDATE_BIO_PENDING = 'UPDATE_BIO_PENDING';
const UPDATE_BIO_FULFILLED = 'UPDATE_BIO_FULFILLED';
const RESERVER_WISH_INFO = 'RESERVER_WISH_INFO';
const REMOVE_RESERVER_WISH_INFO = 'REMOVE_RESERVER_WISH_INFO';



// Initial State
export interface IWishesState {
  loading: boolean;
  currentUser: any;
  allUsers: any[];
  familyReference: any[];
  wishesInitialized: boolean;
  wishes: any[];
  myReservedWishes: any[];
  myWishes: any[];
  wishListUser: number;
  reserverInfo: any;
}

const wishesInitialState: IWishesState = {
  loading: false,
  currentUser: {},
  allUsers: [],
  familyReference: [],
  wishesInitialized: false,
  wishes: [],
  myReservedWishes: [],
  myWishes: [],
  wishListUser: 0,
  reserverInfo: {}
};

// Reducer
export function wishesReducer(state: IWishesState = wishesInitialState, action): IWishesState {
  switch (action.type) {

    case GET_ACTIVE_USER_PENDING:
      return Object.assign({}, state, {loading: true});
    case GET_ACTIVE_USER_FULFILLED:
      return Object.assign({}, state, {
        loading: false,
        currentUser: action.payload
      });

    case GET_FAMILY_REFERENCE_PENDING:
      return Object.assign({}, state, {loading: true});
    case GET_FAMILY_REFERENCE_FULFILLED:
      return Object.assign({}, state, {
        loading: false,
        familyReference: action.payload
      });

    case GET_USERS_PENDING:
      return Object.assign({}, state, {loading: true});
    case GET_USERS_FULFILLED:
      return Object.assign({}, state, {
        loading: false,
        allUsers: action.payload
      });

    case GET_WISHES_PENDING:
      return Object.assign({}, state, {loading: true});
    case GET_WISHES_FULFILLED:
      return Object.assign({}, state, {
        loading: false,
        wishes: action.payload
      });

    case SET_WISHLIST_USER:
      return Object.assign({}, state, {wishListUser: action.payload});

    case INITIALIZE_WISHES:
      return Object.assign({}, state, {wishesInitialized: action.payload});

    case RESERVE_WISH_PENDING:
      return Object.assign({}, state, {loading: true});
    case RESERVE_WISH_FULFILLED:
      return Object.assign({}, state, {loading: false});

    case RELEASE_WISH_PENDING:
      return Object.assign({}, state, {loading: true});
    case RELEASE_WISH_FULFILLED:
      return Object.assign({}, state, {loading: false});

    case ADD_WISH_PENDING:
      return Object.assign({}, state, {loading: true});
    case ADD_WISH_FULFILLED:
      return Object.assign({}, state, {loading: false});

    case DELETE_WISH_PENDING:
      return Object.assign({}, state, {loading: true});
    case DELETE_WISH_FULFILLED:
      return Object.assign({}, state, {loading: false});

    case UPDATE_WISH_PENDING:
      return Object.assign({}, state, {loading: true});
    case UPDATE_WISH_FULFILLED:
      return Object.assign({}, state, {loading: false});

    case GET_RESERVED_WISHES_PENDING:
      return Object.assign({}, state, {loading: true});
    case GET_RESERVED_WISHES_FULFILLED:
      return Object.assign({}, state, {loading: false, myReservedWishes: action.payload});

    case GET_MY_WISHES_PENDING:
      return Object.assign({}, state, {loading: true});
    case GET_MY_WISHES_FULFILLED:
      return Object.assign({}, state, {loading: false, myWishes: action.payload});

    case UPDATE_WISHES_USER_PENDING:
      return Object.assign({}, state, {loading: true});
    case UPDATE_WISHES_USER_FULFILLED:
      return Object.assign({}, state, {loading: false});

    case UPDATE_WISHES_FAMILY_PENDING:
      return Object.assign({}, state, {loading: true});
    case UPDATE_WISHES_FAMILY_FULFILLED:
      return Object.assign({}, state, {loading: false});

    case UPDATE_BIO_PENDING:
      return Object.assign({}, state, {loading: true});
    case UPDATE_BIO_FULFILLED:
      return Object.assign({}, state, {loading: false});

    case RESERVER_WISH_INFO:
      return Object.assign({}, state, {reserverInfo: action.payload});

    case REMOVE_RESERVER_WISH_INFO:
      return Object.assign({}, state, {reserverInfo: action.payload});

    default:
      return state;
  }
}

// Action Creators
export interface IWishesActionCreators {
  getActiveUser: Function;
  getAllUsers: Function;
}

@Injectable()
export class WishesActionCreators implements IWishesActionCreators {

  constructor(private wishesService: WishesService) { }

  getActiveUser(userId: number) {
    return {
      type: GET_ACTIVE_USER,
      payload: this.wishesService.getActiveUser(userId)
    };
  }

  getFamilyReference() {
    return {
      type: GET_FAMILY_REFERENCE,
      payload: this.wishesService.getFamilyReference()
    };
  }

  getAllUsers() {
    return {
      type: GET_USERS,
      payload: this.wishesService.getAllUsers()
    };
  }

  getWishes(userId: number) {
    return {
      type: GET_WISHES,
      payload: this.wishesService.getWishes(userId)
    };
  }

  setWishListUser(userId: number) {
    return {
      type: SET_WISHLIST_USER,
      payload: userId
    };
  }

  initializeWishes() {
    return {
      type: INITIALIZE_WISHES,
      payload: true
    };
  }

  reserveWish(reservedUserId: number, wishId: number) {
    return {
      type: RESERVE_WISH,
      payload: this.wishesService.reserveWish(reservedUserId, wishId)
    };
  }

  releaseWish(wishId: number) {
    return {
      type: RELEASE_WISH,
      payload: this.wishesService.releaseWish(wishId)
    };
  }

  addWish(userId: number, title: string, description: string, cost: number, link: string, rating: number) {
    return {
      type: ADD_WISH,
      payload: this.wishesService.addWish(userId, title, description, cost, link, rating)
    };
  }

  deleteWish(wishId: number) {
    return {
      type: DELETE_WISH,
      payload: this.wishesService.deleteWish(wishId)
    };
  }

  updateWish(title: string, description: string, cost: number, link: string, rating: number, wishId: number) {
    return {
      type: UPDATE_WISH,
      payload: this.wishesService.updateWish(title, description, cost, link, rating, wishId)
    };
  }

  getReservedWishes(userId: number) {
    return {
      type: GET_RESERVED_WISHES,
      payload: this.wishesService.getReservedWishes(userId)
    };
  }

  updateBio(userId: number, bio: string) {
    return {
      type: UPDATE_BIO,
      payload: this.wishesService.updateBio(userId, bio)
    };
  }

  getMyWishes(userId: number) {
    return {
      type: GET_MY_WISHES,
      payload: this.wishesService.getWishes(userId)
    };
  }

  updateWishesUser(userId: number, edwUserId: number, familyId: number, isParent: number, firstName: string, lastName: string, isAdmin: number,
                    birthday: string, anniversary: string, group1: number, group2: number, group3: number, group4: number) {
    return {
      type: UPDATE_WISHES_USER,
      payload: this.wishesService.updateWishesUser(userId, edwUserId, familyId, isParent, firstName, lastName, isAdmin, birthday, anniversary, group1, group2, group3, group4)
    };
  }

  updateWishesFamily(familyId: number, familyName: string, parent1: number, parent2: number, familyGroup: number) {
    return {
      type: UPDATE_WISHES_FAMILY,
      payload: this.wishesService.updateWishesFamily(familyId, familyName, parent1, parent2, familyGroup)
    };
  }

  updateReserverInfo(contactFirstName: string, contactWishTitle: string, reservedUser: number) {
    return {
      type: RESERVER_WISH_INFO,
      payload: {
        contactFirstName,
        contactWishTitle,
        reservedUser
      }
    };
  }

  removeReserverInfo() {
    return {
      type: REMOVE_RESERVER_WISH_INFO,
      payload: {}
    };
  }
}
