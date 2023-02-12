import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Drawer,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  Modal,
  Popover,
  Tab,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { PinkButton } from "../ultis/usefulComponent";

interface Props {
  isLogin: boolean;
}

const InfoModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: "200px",
  height: "300px",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 1,
  p: 4,
};

const showVoucherCard = (value: number) => {
  return (
    <Card
      sx={{
        bgcolor: "#FF2B85",
        color: "white",
        display: "flex",
        justifyContent: "center",
        height: "150px",
        width: "150px",
        boxShadow: 3,
        marginLeft: "5px",
        marginTop: "5px",
      }}
      onClick={() => console.log(`asdasd`)}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: "50px", paddingTop: "10px", fontWeight: "bolder" }}
        >
          ${value}
        </Typography>
        <Typography
          sx={{
            paddingBottom: "30px",
            justifySelf: "center",
            fontWeight: "bolder",
            fontSize: "10px",
          }}
        >
          foodpanda voucher
        </Typography>
      </CardContent>
    </Card>
  );
};

const UserVoucherPage: React.FC<Props> = ({ isLogin }) => {
  const navigate: (path: string) => void = useNavigate();
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [openCopyModal, setOpenCopyModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [addErrorMsg, setAddErrorMsg] = useState("code does not exist");
  const voucherValue = [10, 25, 50, 100];
  const myVoucher = [
    {
      id: 1,
      code: "5h2d90vq11",
      value: 10,
      owner: 1,
      expire: "12-12-2028",
    },
    {
      id: 2,
      code: "5h2d90vq11",
      value: 50,
      owner: 1,
      expire: "18-04-2029",
    },
    {
      id: 4,
      code: "5h2d90vq11",
      value: 30,
      owner: 1,
      expire: "05-08-2025",
    },
  ];

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  }, [isLogin]);

  const showMyVoucher = (voucher: any) => {
    return (
      <Box
        sx={{
          paddingTop: "10px",
          paddingLeft: "10px",
          mt: "15px",
          width: "99%",
          height: "80px",
          borderRadius: "10%",
          boxShadow: 3,
        }}
      >
        <Grid container>
          <Grid xs={8}>
            <Grid>
              <Typography gutterBottom variant="h5" component="div">
                ${voucher.value} FPD
                <Button
                  sx={{ color: "#FF2B85", mb: "2px" }}
                  onClick={() => {
                    setOpenInfoModal(true);
                  }}
                >
                  <InfoIcon fontSize="small" sx={{ color: "#FF7599" }} />
                </Button>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expiry {voucher.expire}
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={4} container justifyContent="center" alignItems="center">
            <PinkButton
              sx={{
                height: "20px",
                width: "70px",
              }}
              onClick={() => {
                navigator.clipboard.writeText("hello world");
                setOpenCopyModal(true);
                setTimeout(() => {
                  setOpenCopyModal(false);
                }, 1000);
              }}
            >
              <Typography
                sx={{ fontSize: "8px", color: "white", fontWeight: "bold" }}
              >
                copy code
              </Typography>
            </PinkButton>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const [value, setValue] = React.useState("myVoucher");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
                <Box
                  sx={{
                    boxshadow: 1,
                    borderRadius: "5px",
                    backgroundColor: "white",
                    color: "#FF2B85",
                    alignContent: "center",
                    justifyContent: "center",
                    fontWeight: "bolder",
                    boxShadow: "3",
                  }}
                  onClick={() => setOpenDrawer(true)}
                >
                  <Typography align="center">
                    <ConfirmationNumberIcon sx={{ verticalAlign: "middle" }} />
                    {"  "}Add a Voucher
                  </Typography>
                </Box>
                {myVoucher.map((voucher) => showMyVoucher(voucher))}
              </TabPanel>
              <TabPanel value="voucherStore">
                <Box>
                  <Grid container>
                    {voucherValue.map((value) => showVoucherCard(value))}
                  </Grid>
                </Box>
              </TabPanel>
            </TabContext>
          </Container>
        </Box>
      </main>
      <Modal open={openInfoModal} onClose={() => setOpenInfoModal(false)}>
        <Box sx={InfoModalStyle}>
          <Typography variant="h6">Send your gift card</Typography>
          <Typography sx={{ mt: 2 }}>
            <br />
            Click on the voucher and you will copy the voucher code, you can
            then share it with anyone. <br />
            <br />
            Please note that vouchers are only transforable once, keep it safe
          </Typography>
        </Box>
      </Modal>

      <Popover
        open={openCopyModal}
        onClose={() => setOpenCopyModal(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>Voucher code copied!</Typography>
      </Popover>
      <Drawer
        anchor="bottom"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ height: "12rem", marginX: "15px", paddingTop: "15px" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
            {" "}
            Add a Voucher
          </Typography>

          <TextField
            sx={{ marginTop: "15px", width: "100%" }}
            label="Voucher Code"
            variant="outlined"
          />
          <FormHelperText sx={{ color: "red" }}>{addErrorMsg}</FormHelperText>
          <PinkButton sx={{ marginTop: "15px", width: "100%" }}>Add</PinkButton>
        </Box>
      </Drawer>
    </>
  );
};

export default UserVoucherPage;
