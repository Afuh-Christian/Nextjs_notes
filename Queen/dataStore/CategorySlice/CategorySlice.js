import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { items } from "../sampledata";
import axios from "axios";

const initialState = {
    categoryApi:[],
    status:"",
    error:""
}

const POST_URL = "/api/routes/categoryroute/category/"

export const fetchCategories = createAsyncThunk("posts/fetchCategories", async () =>{

    try{
        const response = await axios.get(POST_URL) 
        
    return response.data
}catch(err){
    return err.message
}

})





// httpPost ...

const Post_crud = "/api/routes/categoryroute/categpostputdelete/"
export const postCategory = createAsyncThunk("posts/postCategory", async (initialPost) => {
   
    try {
        const res = await axios.post(Post_crud,  initialPost  , 
          {
            headers: {
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',
              'Content-Type': "multipart/form-data",
            }
          }
        )
      console.log(res.data)
      return res.data
          } catch (err) {
              console.log(err.message)
     }
})



// put
export const putCategory = createAsyncThunk("posts/putCategory", async (initialPost) => {
try {
    const res = await axios.put(Post_crud, initialPost,
      {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': "multipart/form-data",
        }
      }
    )
  console.log(res)
  return res.data
  } catch (err) {
    console.log(err.message)
}
})


// Delete
export const deleteCategory = createAsyncThunk("posts/deleteCategory", async (initialPost) => {
try {
    const res = await axios.post("/api/routes/categoryroute/deletecategory/", initialPost,
      {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': "multipart/form-data",
        }
      }
    )
  console.log(res.data)
  return res.data
  } catch (err) {
    console.log(err.message)
}
})






export const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder
            //.HttpGet.........
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(fetchCategories.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded"
                
                if (state.categoryApi.length < 1) {
                    state.categoryApi.push(...action.payload)
                }
            })
        
            //HttpPost
            .addCase(postCategory.fulfilled, (state, action) => {

                // const { formobject } = action.payload
                // state.categoryApi.push({...formobject, _id: nanoid()})
        //         console.log(action.payload)
        state.categoryApi.push(action.payload)
            })
        



         //HTTP PUT 
         .addCase(putCategory.fulfilled,(state,action) => {
            //    if(!action.payload?.id ){
            //     console.log("failed to update data")
            //    }

            //    const {id} = action.payload
            //    const subitem = state.subItemsApi.filter(s => s.id !== id)
            //    console.log(action.payload)
            //    state.subItemsApi = [...subitem, action.payload]
           
            })

          
         //HTTP Delete 
         .addCase(deleteCategory.fulfilled,(state,action) => {
            //    if(!action.payload?.id ){
            //     console.log("failed to update data")
            //    }

            //    const {id} = action.payload
            //    const subitem = state.subItemsApi.filter(s => s.id !== id)
            //    console.log(action.payload)
            //    state.subItemsApi = [...subitem, action.payload]
           
            })
    }
}
)

export const selectAllCategories = (state) => state.categoryred.categoryApi
export const selectAllCategoryErrors = (state) => state.categoryred.error
export const selectAllCategoryStatus = (state) => state.categoryred.status

// export const AllCategories = (state) => state.categoryred.CategoryData

export default CategorySlice.reducer