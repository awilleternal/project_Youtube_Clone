import { useState,useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import {Videos} from "./";




const SearchFeed = () => {

  const [videos, setvideos] = useState([]);
  const {searchTerm} = useParams();


  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setvideos(data.items));
    
  },[searchTerm]);
  return (
    
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" font-weight="bold" mb={2} sx={{ color: "white"}}>
        Search Results
        <span  style={{ color: "#FC1503"}}> {searchTerm}</span>

      </Typography>
      <Videos videos={videos}/>


    </Box>
  )
}

export default SearchFeed