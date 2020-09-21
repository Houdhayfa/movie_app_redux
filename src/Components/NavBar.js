import React from 'react'
import {connect} from 'react-redux'
import { search,setSearchWord,setSearchRating,toggleAddForm} from '../Store/Actions'
import {useState,useEffect} from 'react'
import StarRating from './StarRating'
import {FaEdit} from 'react-icons/fa'

function NavBar(props) {
    const [input,setInput]=useState("")
    useEffect(()=>{
        props.setSearchWord(input)
        props.search(input)
    },[input])
    const handeSubmit=(e)=>{
        props.search(input)
        e.preventDefault()
    }
    const handelChange=(e)=>{
        setInput( e.target.value)
        props.setSearchWord(input)
    }
    
    return (
        <nav className="nav navbar navbar-light bg-light">
        <form onSubmit={handeSubmit} className="form-inline">
            <input 
                id="searchInput"
                value={input}
                className="form-control mr-sm-2"
                type="search"
                placeholder="search..."
                aria-label="Search"
                onChange={handelChange}
                 >
            </input>
            <StarRating filterMoviesByRating={props.filterMoviesByRating}
                        input={input}
                        rating={props.rating}
                        setRating={props.setRating}/>
            
       </form>
       <button onClick={()=>props.toggleAddForm()} 
                    className="navbutton btn btn-outline-primary my-2 my-sm-0" 
                    type="submit"
                     >
                Add Movie <FaEdit/>
            </button>
    </nav>
        
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
        search:(x)=>dispatch(search(x)),
        setSearchWord:(string)=>dispatch(setSearchWord(string)),
        setSearchRating:(rating)=>dispatch(setSearchRating(rating)),
        toggleAddForm:()=>dispatch(toggleAddForm())
    }
}
const mapStateToProps=(state)=>{
    return {
        searchWord:state.searchParams.searchWord
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
