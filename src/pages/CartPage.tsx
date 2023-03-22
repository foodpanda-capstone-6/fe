import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, ButtonGroup } from "@mui/material";
import { cartNumberCounter, PinkButton } from "../ultis/VoucherComponent";

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
    const [myVoucherCart, setMyVoucherCart] = useState<VoucherType[]>([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const calculateTotalAmount = () => {
        let amount = 0;

        if (myVoucherCart.length === 1) {
            amount = myVoucherCart[0].Amount * myVoucherCart[0].Qty;
        } else {
            myVoucherCart.forEach((x: any) => {
                amount += x.Amount * x.Qty;
            });
        }
        setTotalAmount(amount);

        console.log(
            `calculating total amount ${totalAmount}, ${JSON.stringify(
                myVoucherCart
            )}`
        );
    };

    useEffect(() => {
        if (isLogin === false) {
            navigate("/login");
        }

        username && clearCartPage(200);
    }, [isLogin]);

    const clearCartPage = async (duration: number) => {
        await fetch(`http://localhost:8081/cart?username=${username}`)
            .then((response) => response.json())
            .then((data) => setMyVoucherCart(data));
        console.log(`onload cart details ${JSON.stringify(myVoucherCart)}`);

        setTimeout(() => {
            calculateTotalAmount();
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

    const confirmPurchase = () => {
        fetch(`http://localhost:8081/cart/purchase?username=${username}`, {
            method: "POST",
        });
    };

    return (
        <>
            <Box sx={{ height: "100%" }}>
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
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            ${voucher.Amount} FPD
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
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
                                                        backgroundColor:
                                                            "#FF2B85",
                                                    },
                                                }}
                                                onClick={() => {
                                                    updateCart(
                                                        voucher,
                                                        "minus"
                                                    );
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
                                                        backgroundColor:
                                                            "#FF2B85",
                                                    },
                                                }}
                                                onClick={() =>
                                                    updateCart(voucher, "plus")
                                                }
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
            <Box>
                <Typography>{totalAmount}</Typography>
                <PinkButton
                    sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "5px",
                        backgroundColor: "white",
                        color: "#FF2B85",
                        alignContent: "center",
                        justifyContent: "center",
                        marginTop: "460px",
                        boxShadow: "3",
                    }}
                    onClick={() => {
                        confirmPurchase();
                        clearCartPage(500);
                    }}
                >
                    Purchase
                </PinkButton>
            </Box>
        </>
    );
};

export default CartPage;
