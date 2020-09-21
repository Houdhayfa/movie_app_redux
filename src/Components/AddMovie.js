import React ,{useState} from 'react'
import {connect} from 'react-redux'
import {insertMovie,toggleAddForm} from '../Store/Actions'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function AddMovie(props) {
  const [input,setInput]=useState({
    inputName:"",
    inputYear:"",
    inputRating:"",
    inputImgUrl:""

  })
 
  const handelSubmit=(e)=>{
    if(input.inputRating>=1 &&input.inputRating<=5){
    e.preventDefault()
    props.insertMovie(input)
    props.toggleAddForm()
    
  }}
  const handelChange=(e)=>{ //handelChange for all inputs
    const{name, value}=e.target
    setInput(prevState=>{
      return(
        {...prevState,[name]:value }
      )
    } )
  }
  
  
    return (
        <form onSubmit={handelSubmit} className={`addmovie ${props.isAddDisplayed?"":"hidden"}`}>
            <h3>Insert  movie informations</h3>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1"> Title</label>
            <input name="inputName" type="text"
              className="form-control"
              
              placeholder="Please insert the movie name..."
              value={input.inputName} onChange={handelChange} ></input>
              
         </div>
         <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Year</label>
            
            <input name="inputYear" type="text"
              className="form-control"
              
              placeholder="Please insert the movie year..."
              value={input.inputYear}onChange={handelChange}  ></input>
              
         </div>
         <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Rating</label>
            <input name="inputRating" type="number" min='1' max='5'
              className="form-control"
              placeholder="Please insert the movie rating..."
              value={input.inputRating} onChange={handelChange} ></input>
         </div>
         <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Image Url</label>
            <input name="inputImgUrl" type="text"
              className="form-control"
              placeholder="Please insert the poster path..."
              value={input.inputImgUrl} onChange={handelChange} ></input>
           </div>
           
          <button className="navbutton btn btn-outline-primary my-2 my-sm-0">Add</button>
          
        </form>
    )
}
const mapStateToProps=(state)=>{
  return {
    isAddDisplayed:state.display.isAddDisplayed
  }
}
 const mapDispatchToProps=(dispatch)=>{
  return {
    insertMovie:(x)=>dispatch(insertMovie(x)),
    toggleAddForm:()=>dispatch(toggleAddForm())    
        }
  }
export default connect(mapStateToProps,mapDispatchToProps) (AddMovie)