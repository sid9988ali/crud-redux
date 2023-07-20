import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//create action
export const createUser=createAsyncThunk(
  'createuser',
  async(data,{rejectWithValue})=>{
    console.log("data=",data)
    const response=await fetch("https://641dd63d945125fff3d75742.mockapi.io/crud",
    // const response=await fetch("https://ourmart.tectuz.com/api/",
    

    {
      method:"POST",
      headers:{"Content-Type":"application/json",},
      body:JSON.stringify(data),
    });
    try{
      const result=await response.json()
      return result;
    }
    catch(error){
      return rejectWithValue(error);

    }
  }
)
//read action
export const showUser=createAsyncThunk(
  'showuser',
  async(args,{rejectWithValue})=>{
    console.log("args=",args)
    const response=await fetch("https://641dd63d945125fff3d75742.mockapi.io/crud")
    // const response=await fetch("https://ourmart.tectuz.com/api/qatype/index")
     try{
      const result=await response.json()
      return result;
     }
     catch(error){
      return rejectWithValue(error);
     }

  }
  )


  //delete
  export const deleteUser=createAsyncThunk(
    'deletuser',
    async(id,{rejectWithValue})=>{
      const response=await fetch(`https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`,
      {method:"DELETE"}
      );
      try{
        const result= await response.json();
        console.log("deleted user=",result)
        return result;
      }
      catch(error){
        return rejectWithValue(error);
      }
    }
  );


  //delete all 
export const deleteAllUsers = createAsyncThunk(
  "deleteAllUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch(
      "https://641dd63d945125fff3d75742.mockapi.io/crud",
      { method: "DELETE" }
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


  //update action
  export const updateUser = createAsyncThunk(
    "updateUser",
    async (data, { rejectWithValue }) => {
      console.log("updated data", data);
      const response = await fetch(
        `https://641dd63d945125fff3d75742.mockapi.io/crud/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  


export const userDetail=createSlice({
  name:"userDetail",
  initialState:{
    users:[],
    loading:false,
    error:null,
  },
  reducers:{},
  extraReducers:{

    //Create users
    [createUser.pending]:(state)=>{
      state.loading=true;
    },
    [createUser.fulfilled]:(state,action)=>{
      state.loading=false;
      state.users.push(action.payload);
    },
    [createUser.rejected]:(state,action)=>{
      state.loading=false;
      state.error=action.payload.message;
    },

    //Read Users
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    //Delete users
    [deleteUser.pending]:(state)=>{
      state.loading=true;
     
    },
    [deleteUser.fulfilled]:(state,action)=>{
      state.loading=false;
      const {id}=action.payload;
      if(id){
        state.users=state.users.filter((ele)=>ele.id !==id);
      }
    },
    [deleteUser.rejected]:(state,action)=>{
      state.loading=false;
      state.error=action.payload;
    },

    //update users
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = state.users.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
})

export default userDetail.reducer;






















