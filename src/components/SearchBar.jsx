import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const navigate=useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm('');
    }
  }
  return (
    <Paper
    component="form"
    onSubmit={handelSubmit}
    sx={{ border: "1px solid #e3e3e3", borderRadius: 20, pl: 2, boxShadow: "none", mr: { sm: 5 } }}>

        <input className="search-bar" placeholder="Search..." value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)}/>
        <IconButton type="submit" sx={{ p: "10px", color: "red" }}><Search/></IconButton>
        
    </Paper>
    
  )
}

export default SearchBar