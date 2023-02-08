import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Modal,
  Tab,
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
  width: "200px",
  height: "300px",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const showVoucherCard = (value: number) => {
  return (
    <Card style={{ marginTop: "15px" }}>
      <CardContent>
        <Typography variant="h4" component="div">
          ${value} FPD
        </Typography>
        <Typography variant="body2" style={{ marginTop: "5px" }}>
          ${value} gift card that can be used with any merchant
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Purchase</Button>
      </CardActions>
    </Card>
  );
};

const UserVoucherPage: React.FC<Props> = ({ isLogin }) => {
  const navigate: (path: string) => void = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      <Card style={{ marginTop: "6px" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ${voucher.value} PFD
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Expiry {voucher.expire}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" sx={{ color: "#FF2B85" }} onClick={handleOpen}>
            Send
          </Button>
        </CardActions>
      </Card>
    );
  };

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
                {myVoucher.map((voucher) => showMyVoucher(voucher))}
              </TabPanel>
              <TabPanel value="voucherStore">
                {voucherValue.map((value) => showVoucherCard(value))}
              </TabPanel>
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
