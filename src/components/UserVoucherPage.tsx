import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Header from "./Header";

export default function UserVoucherPage() {
  const [value, setValue] = React.useState("one");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Header sections={[]} title={"foodpanda"} />
      <main>
        <Box>
          <Container disableGutters>
            <Box
              component="img"
              sx={{
                width: "100%",
              }}
              alt="PauPauYourVouchers"
              src="src/assets/images/YourVouchersImg.png"
            />
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                sx={{ color: "#FF2B85" }}
              >
                <Tab value="one" label="Your Vouchers" />
                <Tab value="two" label="Voucher Store" />
              </Tabs>
            </Stack>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150"
                  alt="voucher image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    $10 PauPau Dollars
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" sx={{ color: "#FF2B85" }}>
                  Purchase
                </Button>
              </CardActions>
            </Card>

            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150"
                  alt="voucher image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    $15 PauPau Dollars
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" sx={{ color: "#FF2B85" }}>
                  Purchase
                </Button>
              </CardActions>
            </Card>

            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/150"
                  alt="voucher image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    $30 PauPau Dollars
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" sx={{ color: "#FF2B85" }}>
                  Purchase
                </Button>
              </CardActions>
            </Card>
          </Container>
        </Box>
      </main>
    </>
  );
}
