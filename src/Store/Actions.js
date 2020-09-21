import {SEARCH,ADD_MOVIE,SET_SEARCH_STRING,SET_SEARCH_RATING,TOGGLE_ADD_FORM} from './ActionTypes'
export const search=(x)=>{
    return {
        type:SEARCH,
        searchString:x
    }
}
export const insertMovie=(x)=>{
    return {
        type:ADD_MOVIE,
        newMovie:{
                 name:x.inputName,
                 rating:parseInt(x.inputRating),
                 date:x.inputYear,
                 imageUrl:x.inputImgUrl

                 }
    }
}
export const setSearchWord=(string)=>{
    return {type:SET_SEARCH_STRING,
    searchString :string}
}
export const setSearchRating=(rating)=>{
    return {type:SET_SEARCH_RATING,
    searchRating :rating}
    }   
export const toggleAddForm=()=>{
        return {type:TOGGLE_ADD_FORM}
}