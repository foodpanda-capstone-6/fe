import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, ButtonGroup } from "@mui/material";
import { PinkButton } from "../ultis/VoucherComponent";

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
const CartPage: React.FC<Props> = ({ username, isLogin }) => {
    const navigate: (path: string) => void = useNavigate();
    const [myVoucherCart, setMyVoucherCart] = useState<VoucherType[]>([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        if (isLogin === false) {
            navigate("/login");
        }

        username &&
            fetch(`http://localhost:8081/cart?username=${username}`)
                .then((response) => response.json())
                .then((data) => setMyVoucherCart(data));
    }, [isLogin]);

    const updateCart = (voucher: VoucherType, action: any) => {
        let updatedQty = voucher.Qty;

        if (action === "plus") {
            console.log("running plus");
            updatedQty++;
            console.log(updatedQty);
        } else {
            console.log("running minus");
            updatedQty--;
            console.log(updatedQty);
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
    };

    const confirmPurchase = () => {
        console.log(`purhcsed`);
        fetch(`http://localhost:8081/cart/purchase?username=${username}`, {
            method: "POST",
        });
    };

    const calculateTotalAmount = () => {
        myVoucherCart.map((voucher: any) => {
            setTotalAmount(totalAmount + voucher.Amount * voucher.Qty);
        });
    };

    console.log(`this is voucher cart ${JSON.stringify(myVoucherCart)}`);
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
                                                    backgroundColor: "#FF2B85",
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
                                                    backgroundColor: "#FF2B85",
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
                    onClick={() => confirmPurchase()}
                >
                    Purchase
                </PinkButton>
            </Box>
        </>
    );
};

export default CartPage;
