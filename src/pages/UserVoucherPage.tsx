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
  Modal,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

interface Props {
  isLogin: boolean;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserVoucherPage: React.FC<Props> = ({ isLogin }) => {
  const navigate: (path: string) => void = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  }, [isLogin]);

  const [value, setValue] = React.useState("myVoucher");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <>
      <main>
        <Box>
          <Container disableGutters>
            <Box
              component="img"
              sx={{
                width: "100%",
              }}
              alt="PauPauYourVouchers"
              src="../src/assets/images/YourVouchersImg.png"
            />
            <TabContext value={value}>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <TabList
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                  sx={{ color: "#FF2B85" }}
                >
                  <Tab value="myVoucher" label="Your Vouchers" />
                  <Tab value="voucherStore" label="Voucher Store" />
                </TabList>
              </Stack>
              <TabPanel value="myVoucher">
                <Card style={{ marginTop: "6px" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        $10 PFD
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Expiry
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      sx={{ color: "#FF2B85" }}
                      onClick={handleOpen}
                    >
                      Send
                    </Button>
                  </CardActions>
                </Card>
              </TabPanel>
              <TabPanel value="voucherStore">my store</TabPanel>
            </TabContext>
          </Container>
        </Box>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default UserVoucherPage;
