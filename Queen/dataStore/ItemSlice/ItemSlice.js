import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import { items } from "../sampledata";
import axios from "axios";
// console.log("Hello")
const POST_URL = "/api/routes/itemroute/items/"
//httpGet
export const fetchItems = createAsyncThunk('posts/fetchItems',async () => {

    try {
        const response = await axios.get(POST_URL)
       console.log(response.data)
        return [...response.data];
    }catch(err){
        return console.log(err.message)
    }
})




const POST_URL_crud  = "/api/routes/itemroute/itempostputdelete/"

//httpPost 
export const postItemApi = createAsyncThunk("posts/postItemApi",async (initialPost) => {
    try{
        const response = await axios.post(POST_URL_crud , initialPost, 
            {
                headers:{
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': "multipart/form-data",
                }
            })
        return response.data
    }
    catch(err){
        return err.message
    }


})






//httpPut 
export const putItemApi = createAsyncThunk("posts/putItemApi",async (initialPost) => {
    try{
        const response = await axios.put(POST_URL_crud , initialPost, 
            {
                headers:{
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': "multipart/form-data",
                }
            })
        console.log(response.data)
        return response.data
    }
    catch(err){
        return err.message
    }
})



const deletepath = "/api/routes/itemroute/deleteitem/"
//http Delete
export const deleteItemApi = createAsyncThunk("posts/deleteItemApi", async (initialPost) => {
   
    try{
        const response = await axios.post("/api/routes/itemroute/deleteitem/",  initialPost , 
           
            {
                headers:{
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': "multipart/form-data",
                }
            }
      
        )
        console.log(response.data)
        return response.data
    }
    catch(err){
        return err.message
    }
})






const initialState = {
    itemApi:[],
    status:"",
    error:""
}



export const ItemSlice = createSlice({
    name: 'item', 
    initialState, 
    reducers: {}
    ,
    extraReducers(builder) {
        builder
            .addCase(fetchItems.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.status = "Succeed"

                if (state.itemApi.length < 1) {
                    state.itemApi.push(...action.payload)
                    // state.itemApi.concat(...action.payload)
                }

                // const LoadedItems = state.itemApi.map()
            })
        
         //HttpPost
       .addCase(postItemApi.fulfilled,(state,action) =>{
        state.itemApi.push(action.payload)
       })
            
            
         //HttpPut
       .addCase(putItemApi.fulfilled,(state,action) =>{
        // state.itemApi.push(action.payload)
       })
            
            
         //HttpDelete ... 
       .addCase(deleteItemApi.fulfilled,(state,action) =>{
        // state.itemApi.push(action.payload)
       })
    }
})

export const selectAllItems = (state) => state.itemred.itemApi//[0]
export const selectAllStatus = (state) => state.itemred.status
export const selectAllErrors = (state) => state.itemred.error


// export const AllItems = (state) => state.itemred.ItemData
export default ItemSlice.reducer   