import React, { useEffect, useState } from "react";
import Tmdb from "../apis/Tmdb";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CardActionArea } from "@mui/material";
import ReactPlayer from "react-player";

const Content = () => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchDataContent = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariTMDB = await Tmdb.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          "/movie/popular"
          // "/movie/35/videos"
        );

        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setContents(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataContent();
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        mt: "2em",
        mb: "5em",
        // flexDirection: "row",
        // alignContent: "center",
      }}
    >
      {contents.map((content) => {
        return (
          <Card
            sx={{
              maxWidth: 345,
              mt: "3em",
              ml: "1em",
              // display: "flex",
              content: { content },
              // flexDirection: "row",
            }}
          >
            {/* <ReactPlayer url="https://www.themoviedb.org/movie/35-the-simpsons-movie/watch?locale=AT" /> */}

            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                image={`${baseUrlForMovie}${content.poster_path}`}
                alt={content.title}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {content.original_title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {content.overview}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Container>
  );
};

export default Content;
