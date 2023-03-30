import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  Modal,
} from "@mui/material";
import { cartNumberCounter, PinkButton } from "../ultis/VoucherComponent";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 150,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
interface Props {
  username: string | null;
  isLogin: boolean;
  setCartNumber: React.Dispatch<React.SetStateAction<number>>;
}

interface VoucherType {
  Username: string;
  Qty: number;
  Amount: number;
  Id: number;
}
const CartPage: React.FC<Props> = ({ username, isLogin, setCartNumber }) => {
  const navigate: (path: string) => void = useNavigate();
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const [myVoucherCart, setMyVoucherCart] = useState<VoucherType[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotalAmount = () => {
    let amount = 0;
    setTimeout(async () => {
      await fetch(`http://localhost:8081/cart?username=${username}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 1) {
            amount = data[0].Amount * data[0].Qty;
          } else {
            data.forEach((x: any) => {
              amount += x.Amount * x.Qty;
            });
          }
        });

      setTotalAmount(amount);
    }, 50);
  };

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }

    username && clearCartPage(200);
  }, [isLogin]);

  const clearCartPage = (duration: number) => {
    setTimeout(async () => {
      console.log(`clearcart`);
      await fetch(`http://localhost:8081/cart?username=${username}`)
        .then((response) => response.json())
        .then((data) => setMyVoucherCart(data));
      //   console.log(`onload cart details ${JSON.stringify(myVoucherCart)}`);

      !!myVoucherCart ? calculateTotalAmount() : setTotalAmount(0);
      cartNumberCounter(username, setCartNumber);
      setCartNumber(0);
    }, duration);
  };

  const updateCart = (voucher: VoucherType, action: any) => {
    let updatedQty = voucher.Qty;

    if (action === "plus") {
      updatedQty++;
    } else {
      updatedQty--;
    }

    const newVoucherValue = myVoucherCart.map((x) => {
      if (x.Id === voucher.Id) {
        return { ...x, Qty: updatedQty };
      }
      return x;
    });

    setMyVoucherCart(newVoucherValue);

    fetch("http://localhost:8081/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        id: voucher.Id,
        quantity: updatedQty,
      }),
    });

    cartNumberCounter(username, setCartNumber);
    calculateTotalAmount();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        {myVoucherCart &&
          myVoucherCart.map((voucher) => (
            <Box
              sx={{
                paddingTop: "10px",
                paddingX: "10px",
                marginTop: "15px",
                height: "70px",
                boxShadow: 3,
              }}
            >
              <Grid container>
                <Grid xs={8}>
                  <Grid>
                    <Typography gutterBottom variant="h5" component="div">
                      ${voucher.Amount} FPD
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={4}
                  sx={{ marginY: "15px" }}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid>
                    <ButtonGroup
                      disableElevation
                      variant="contained"
                      color="secondary"
                    >
                      <Button
                        sx={{
                          color: "white",
                          backgroundColor: "#FF2B85",
                          "&:hover": {
                            backgroundColor: "#FF2B85",
                          },
                        }}
                        onClick={() => {
                          updateCart(voucher, "minus");
                        }}
                      >
                        -
                      </Button>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          paddingX: "10px",
                        }}
                      >
                        {voucher.Qty}
                      </Typography>
                      <Button
                        sx={{
                          color: "white",
                          backgroundColor: "#FF2B85",
                          "&:hover": {
                            backgroundColor: "#FF2B85",
                          },
                        }}
                        onClick={() => updateCart(voucher, "plus")}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          ))}
      </Box>
      <Box sx={{ marginTop: "400px" }}>
        <Typography
          sx={{
            textAlign: "end",
            marginTop: "15px",
          }}
        >
          Total cost: {totalAmount}
        </Typography>
        <PinkButton
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            backgroundColor: "white",
            color: "#FF2B85",
            alignContent: "center",
            justifyContent: "center",
            boxShadow: "3",
          }}
          onClick={async () => {
            await fetch(
              `http://localhost:8081/cart/purchase?username=${username}`,
              {
                method: "POST",
              }
            );
            setOpenSuccessModal(true);
            setTimeout(() => {
              setOpenSuccessModal(false);
            }, 1000);
            clearCartPage(500);
          }}
        >
          Purchase
        </PinkButton>
      </Box>
      <Modal open={openSuccessModal}>
        <Box sx={style}>
          <Typography>Purchase successful</Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default CartPage;
