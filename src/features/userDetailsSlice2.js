import { createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUser=createAsyncThunk(
    'createuser',
    async(data,{rejectWithValue})=>{
        console.log('created data=',data);
        const response=await fetch("api",
        
        )

    }
)