import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

const SideSrollCard: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" sx={{ marginTop: "1rem" }}>
        Your Restaurants
      </Typography>
      <div className="sideScroll">
        <div>
          <Card className="items">
            <CardActionArea>
              <CardMedia component="img" image=".../400x300" />
              <CardContent>
                <Typography variant="h6">Restaurant Name</Typography>
                <Typography variant="body2">Description</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className="items">
            <CardActionArea>
              <CardMedia component="img" image=".../400x300" />
              <CardContent>
                <Typography variant="h6">Restaurant Name</Typography>
                <Typography variant="body2">Description</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card className="items">
            <CardActionArea>
              <CardMedia component="img" image=".../400x300" />
              <CardContent>
                <Typography variant="h6">Restaurant Name</Typography>
                <Typography variant="body2">Description</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default SideSrollCard;
