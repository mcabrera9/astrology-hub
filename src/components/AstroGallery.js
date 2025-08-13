import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/material/Stack";
export default function AstroGallery() {
  return (
    <Stack
      direction="column"
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={2}
    >
      <ImageList>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={item.img}
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "MoonCycle",
  },
  {
    img: "",
    title: "",
  },
];
