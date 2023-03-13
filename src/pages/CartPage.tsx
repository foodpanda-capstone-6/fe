import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { PinkButton } from "../ultis/VoucherComponent";

interface Props {
  username: string | null,
  isLogin: boolean;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CartPage: React.FC<Props> = ({ username, isLogin }) => {
  const navigate: (path: string) => void = useNavigate();

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  }, [isLogin]);

  return (
    <>
      <main>
        <Box>
          <Container fixed>
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              Your Cart
            </Typography>
            <Typography variant="overline">$5 PauPau Vouchers</Typography>
            <Box
              component="img"
              sx={{
                width: "100%",
              }}
              alt="PauPauYourVouchers"
              src="../src/assets/images/YourVouchersImg.png"
            />

            <PinkButton
              sx={{
                marginTop: "50%",
                height: "100%",
                width: "100%",
              }}
            >
              Confirm Purchase
            </PinkButton>
          </Container>
        </Box>
      </main>
    </>
  );
};

export default CartPage;
