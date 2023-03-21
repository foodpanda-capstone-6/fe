import styled from "@emotion/styled";
import { Button, Card, CardContent, Typography } from "@mui/material";

interface marketVoucherObject {
    id: number;
    code: string;
    value: number;
    owner: number;
    expire: string;
}

interface showMyVoucherProps {
    voucher: marketVoucherObject;
    setOpenInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenCopyModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PinkButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#FF2B85",
    "&:hover": {
        backgroundColor: "#FF2B85",
    },
}));

export const showMarketVoucherCard = (
    marketVouchers: { Id: number; Description: string; Amount: number },
    setOpenPurchaseDrawer: React.Dispatch<
        React.SetStateAction<{
            status: boolean;
            value: number;
            id: number;
        }>
    >
) => {
    return (
        <Card
            key={`market-voucher-${marketVouchers.Id}`}
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
            onClick={() => {
                setOpenPurchaseDrawer({
                    status: true,
                    value: marketVouchers.Amount,
                    id: marketVouchers.Id,
                });
            }}
        >
            <CardContent>
                <Typography
                    sx={{
                        fontSize: "50px",
                        paddingTop: "10px",
                        fontWeight: "bolder",
                    }}
                >
                    ${marketVouchers.Amount}
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

export const cartNumberCounter = async (
    username: string | null,
    setCartNumber: any
) => {
    let counter = 0;
    await fetch(`http://localhost:8081/cart?username=${username}`)
        .then((response) => response.json())
        .then((data) => {
            data.map((x: any) => {
                console.log(
                    `this is x.Qty: ${x.Qty}, counter amount: ${counter}`
                );
                counter += x.Qty;
                console.log(data);
            });
        });
    setCartNumber(counter);

    // [{"Username":"kai","Id":2,"Qty":1,"Amount":20},{"Username":"kai","Id":1,"Qty":1,"Amount":10}]
};
