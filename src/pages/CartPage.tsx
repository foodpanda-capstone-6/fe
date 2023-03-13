import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Stack,
  Container,
  Paper,
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
  const [myVoucherCart, setMyVoucherCart] = useState([])
  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }

    fetch(`http://localhost:8081/cart?username=${username}`)
      .then((response) => response.json())
      .then((data) => setMyVoucherCart(data));
  }, [isLogin]);
  console.log(`this is voucher cart ${JSON.stringify(myVoucherCart)}`)
  return (
    <>
      <main>
        <Box>
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Your Cart
          </Typography>
          {myVoucherCart && myVoucherCart.map((voucher) => (
            <Container fixed>


            </Container>
          ))}

          <PinkButton
            sx={{
              marginTop: "50%",
              height: "100%",
              width: "100%",
            }}
          >
            Confirm Purchase
          </PinkButton>

        </Box>
      </main>
    </>
  );
};

export default CartPage;
