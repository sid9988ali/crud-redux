import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

 const Update=()=>{
    const {id}=useParams();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    const[updateData,setUpdateData]=useState({});
    const {users,loading}=useSelector((state)=>state.app)
    useEffect(()=>{
        if(id){
            const singleUser=users.filter((ele)=>ele.id===id);
            setUpdateData(singleUser[0]);
        }
    },[])
// },[id,users])
    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    console.log("Updated data inside=", updateData); // Added console.log statement
}
console.log("updated data=",updateData)
// useEffect(()=>{
// },[updateData])
const handleUpdate=(e)=>{
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate('/read');

};

    return(

        <div>
            <form onSubmit={handleUpdate}>
            <label>Name</label>
            <input type='text' name="name"
             value={updateData&&updateData.name}
              onChange={newData}/>
              <Button type="submit">Update</Button>
            </form>
        </div> 
    )
 }
 export default Update;