import { CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SideSrollCard from "../components/SideScrollCard";
import { useNavigate } from "react-router-dom";
import react, { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface Props {
  isLogin: boolean;
}

const HomePageMenu: react.FC<Props> = ({ isLogin }) => {
  const navigate: (path: string) => void = useNavigate();

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "22rem",
          backgroundColor: "rgba(180, 180, 180, 0.5)",
          // paddingRight: "0",
          // paddingLeft: "1.5rem",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          sx={{ padding: "1rem" }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid xs={8}>
              <CardActionArea
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  height: "12rem",
                }}
              >
                <CardContent>
                  <Typography component="div">Food delivery</Typography>
                </CardContent>
              </CardActionArea>
            </Grid>
            <Grid xs={4}>
              <CardActionArea
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  height: "9rem",
                }}
              >
                <CardContent>
                  <Typography component="div">pandamart</Typography>
                </CardContent>
              </CardActionArea>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          sx={{ padding: "1rem" }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid xs={8}>
              <CardActionArea
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  height: "6rem",
                }}
              >
                <CardContent>
                  <Typography component="div">pandago</Typography>
                </CardContent>
              </CardActionArea>
            </Grid>
            <Grid xs={4}>
              <CardActionArea
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography component="div">shops</Typography>
                </CardContent>
              </CardActionArea>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <SideSrollCard />
      <SideSrollCard />
    </>
  );
};

export default HomePageMenu;
