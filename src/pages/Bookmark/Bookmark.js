import React, { useEffect, useState } from "react";
import "./Bookmark.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { addBookmarkApi, getBookmarkApi } from "../../API";
import LoadingSpiners from "../../Componets/LoadingSpiners";

const Bookmark = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayVideo, setDisplayVideo] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getBookmarkApi();
    if (res?.error.true === "") {
      setLoading(false);
    } else {
      setTags(res.data);
      setDisplayVideo(res.data);
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    console.log(searchText);
    const matchedVideo = tags.filter((data) =>
      data.videoTitle.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayVideo(matchedVideo);
  };
  return (
    <div data-testId="bookmark">
      <div className=" gradi h-56 bg-blue-700 p-16">
        <h1 className="text-3xl text-center font-boled text-white">
          Bookmark History
        </h1>
        <p className="text-center pb-5 text-white">
          Hello You can organize your things here You can use Tag, search to
          find any specific bookmarked video.
          <br /> Hopefully you like it. Stay with us. We won let you go..huh
        </p>
      </div>
      <div
        className="flex justify-center "
        style={{ marginTop: -35, zIndex: 9999999 }}
      >
        <div>
          <form className=" flex">
            <input
              className="shadow border rounded-l-md w-96 py-3 px-3 text-gray-700  icon"
              type="text"
              placeholder="Search by bookmark tag"
              onChange={handleSearch}
            />
            <Box className="bg-white" sx={{ width: "70px" }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  className="text-black"
                >
                  Tag
                </InputLabel>
                <Select
                  sx={{
                    "& .Mui-selected:hover": {
                      "& .Mui-selectedt": {
                        border: "0",
                      },
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        "& .MuiMenuItem-root.Mui-selected": {
                          backgroundColor: "yellow",
                        },
                        "& .MuiMenuItem-root:hover": {
                          backgroundColor: "pink",
                        },
                        "& .MuiMenuItem-root.Mui-selected:hover": {
                          backgroundColor: "red",
                        },
                      },
                    },
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </form>
        </div>
      </div>
      <div className="bookmark-area">
        {loading ? (
          <LoadingSpiners loading={loading} height={"50vh"} />
        ) : (
          <div className="my-10">
            {displayVideo?.length === 0 ? (
              <h1 className="font-bold text-2xl">Nothing Found</h1>
            ) : (
              <>
                {displayVideo.map((tag) => (
                  <div className="bg-gray-50 mb-5 mt-5 p-5 shadow-lg bookmark px-12">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <p>Lesson : {tag?.lesson}</p>
                        <h1 className="font-bold mx-4 text-lg cursor-pointor">
                          {tag.videoTitle}
                        </h1>
                      </div>
                      <div
                        style={{ fontSize: "25px" }}
                        className="cursor-pointor"
                      ></div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
      {/* <Stack className='items-center mt-5' spacing={2}>
                <Pagination count={tags.length} />               
            </Stack> */}
    </div>
  );
};

export default Bookmark;
