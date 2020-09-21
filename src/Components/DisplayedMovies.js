import React from 'react'
import {connect} from 'react-redux'
import Movie from './Movie'

function DisplayedMovies(props) {
    return (
        <div className="list">
           {props.displayedList.map((item,i)=>{
             return (<Movie 
             name={item.name}
             id={i+1}
             rating={item.rating}
             imageUrl={item.imageUrl}
             date={item.date}
             key={i+1} />  
             )
           })}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        displayedList:state.displayedList
    }
}
export default connect(mapStateToProps)(DisplayedMovies)
