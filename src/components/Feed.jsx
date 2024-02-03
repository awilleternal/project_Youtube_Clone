import { useState,useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import {SideBar,Videos} from "./";



const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos, setvideos] = useState([]);


  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setvideos(data.items));
    
  },[selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md:  .5 } }}>
            <SideBar 
            selectedCategory={selectedCategory}
            setselectedCategory={setselectedCategory}
            ></SideBar>

           <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
            Copyright 2022
           </Typography> 
        </Box>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography variant="h4" font-weight="bold" mb={2} sx={{ color: "white"}}>
         {selectedCategory} 
            <span  style={{ color: "#FC1503"}}> Videos</span>

          </Typography>
          <Videos videos={videos}/>


        </Box>
    </Stack>
  )
}

export default Feed