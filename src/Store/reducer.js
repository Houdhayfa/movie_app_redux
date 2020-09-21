import {SEARCH,ADD_MOVIE,SET_SEARCH_STRING,SET_SEARCH_RATING,TOGGLE_ADD_FORM} from './ActionTypes'
import {Data} from './Data'
const initialState={
    movieList:Data,
    displayedList:Data,
    searchParams:{
        searchWord:"",
        searchRating:0
    },
    display:{isAddDisplayed:false}
}
function reducer(state=initialState,action) {
   switch (action.type) {
       case SEARCH:
       return{
           ...state,
           searchParams:{...state.searchParams,
                         searchWord:action.searchString},
           displayedList:state.movieList.filter(
               (movie)=>movie.name.toLowerCase().includes(state.searchParams.searchWord.trim().toLowerCase())
               &&(movie.rating>=state.searchParams.searchRating)
           )
       }    
           ;
    
    case ADD_MOVIE:
    return{
        ...state,
        movieList:[...state.movieList,{
                 name:action.newMovie.name,
                 id:state.movieList.length+1,
                 rating:action.newMovie.rating,
                 date:action.newMovie.date,
                 imageUrl:action.newMovie.imageUrl}],
        displayedList:[...state.movieList,{
            name:action.newMovie.name,
            id:state.movieList.length+1,
            rating:action.newMovie.rating,
            date:action.newMovie.date,
            imageUrl:action.newMovie.imageUrl}
                ]
    }   
        ;
        case SET_SEARCH_STRING:
    return{
            ...state,
            searchParams:{...state.searchParams,
                searchWord:action.searchString,
                searchRating:state.searchParams.searchRating,
            
        }
    }   
        ;
        case SET_SEARCH_RATING:
    return{
        ...state,
        
            searchParams:{...state.searchParams,
                searchWord:state.searchParams.searchWord,
                searchRating:action.searchRating,
            
        }
    }   
        ;
        case TOGGLE_ADD_FORM:
    return{
        ...state,
        
            display:{
                isAddDisplayed:state.display.isAddDisplayed? false:true
        
              }
    }   
        ;
   
       default:
           return state;
   } 
}

export default reducer
