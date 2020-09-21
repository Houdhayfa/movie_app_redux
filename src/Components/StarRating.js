import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {setSearchRating,search} from '../Store/Actions'
import {FaStar} from 'react-icons/fa'
import './StarRating.css'

function StarRating(props) {
    const [rating,setRating]=useState(0)
    const [isStarTouched,setHover]=useState(0)
    
  useEffect(()=>{
      props.setSearchRating(rating);
      props.search(props.searchWord)
  },[rating])
   
    return(
   <div className="ratingContainer">
       {[...Array(5)].map((item,i)=>{
         return (
         <label key={i}>
             <input type="radio"
                    value={i+1}
                    key={i+2} 
                    onClick={()=>{ 
                      setRating(i+1)            
                                  }} >
             </input>
             <FaStar size={20}key={i+3}  
                     className={`star ${(isStarTouched||props.rating)>=i+1?"shinyStar":""}`}
                     onMouseEnter={()=>setHover(i+1)}
                     onMouseLeave={()=>setHover(0)} />
         </label>
                )
        })}
 </div>
    )}

const mapDispatchToProps=(dispatch)=>{
    return {
            setSearchRating:(rating)=>dispatch(setSearchRating(rating)),
            search:(x)=>dispatch(search(x))
        }
}
const mapStateToProps=(state)=>{
    return {
        rating:state.searchParams.searchRating,
        searchWord:state.searchParams.searchWord
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(StarRating)