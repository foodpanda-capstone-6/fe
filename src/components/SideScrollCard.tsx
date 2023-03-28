import { CardActionArea, Container, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import React from "react";

const SideSrollCard: React.FC = () => {
    return (
        <Container>
            <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                Your Restaurants
            </Typography>
            <div className="sideScroll">
                <div>
                    <Card className="items">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="src/assets/images/Starbucks.jpeg"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    component="div"
                                    variant="h5"
                                >
                                    Starbucks
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div>
                    <Card className="items">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image="src/assets/images/Mcdonalds.jpeg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6">
                                    Restaurant Name
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div>
                    <Card className="items">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image="src/assets/images/Starbucks.jpeg"
                            />
                            <CardContent>
                                <Typography variant="h6">
                                    Restaurant Name
                                </Typography>
                                <Typography variant="body2">
                                    Description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default SideSrollCard;
