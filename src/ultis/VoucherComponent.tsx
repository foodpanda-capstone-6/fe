import styled from "@emotion/styled";
import { Button, Card, CardContent, Typography } from "@mui/material";

interface voucherOject {
  id: number;
  code: string;
  value: number;
  owner: number;
  expire: string;
}

interface showMyVoucherProps {
  voucher: voucherOject;
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

export const showVoucherCard = (
  value: number,
  setOpenPurchaseDrawer: React.Dispatch<
    React.SetStateAction<{
      status: boolean;
      value: number;
    }>
  >
) => {
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
      onClick={() => {
        setOpenPurchaseDrawer({ status: true, value: value });
      }}
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
