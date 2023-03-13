import { CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import SideSrollCard from "../components/SideScrollCard";
import { useNavigate } from "react-router-dom";
import react, { useEffect } from "react";

interface Props {
  isLogin: boolean;
}

const HomePageMenu: react.FC<Props> = ({ isLogin }) => {
  const navigate: (path: string) => void = useNavigate();

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  }, [isLogin]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "22rem",
          backgroundColor: "rgba(180, 180, 180, 0.5)",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          direction="row"
          sx={{ padding: "5px" }}
        >
          <Grid direction="column" xs={6} sx={{ paddingRight: "5px" }}>
            <Grid xs={12}>
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
            <Grid xs={12} sx={{ paddingTop: "5px" }}>
              <CardActionArea
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  height: "9rem",
                }}
              >
                <CardContent>
                  <Typography component="div">Shops</Typography>
                </CardContent>
              </CardActionArea>
            </Grid>
          </Grid>
          <Grid direction="column" xs={6}>
            <Grid xs={12}>
              <CardActionArea
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  height: "9rem",
                }}
              >
                <CardContent>
                  <Typography component="div">pandago</Typography>
                </CardContent>
              </CardActionArea>
            </Grid>
            <Grid xs={12} sx={{ paddingTop: "5px" }}>
              <CardActionArea
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  height: "12rem",
                }}
              >
                <CardContent>
                  <Typography component="div">pandamart</Typography>
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
