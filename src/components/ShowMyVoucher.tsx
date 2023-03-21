import { Box, Button, FormHelperText, Grid, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { PinkButton } from "../ultis/VoucherComponent";

interface voucherOject {
    Id: number;
    TransferCode: string;
    Value: number;
    Username: number;
    IncentiveCode: string;
}

interface showMyVoucherProps {
    voucher: voucherOject;
    setOpenInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenCopyModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowMyVoucher: React.FC<showMyVoucherProps> = ({
    voucher,
    setOpenInfoModal,
    setOpenCopyModal,
}) => {
    return (
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
                            ${voucher.Value} FPD
                            <Button
                                sx={{ color: "#FF2B85", mb: "2px" }}
                                onClick={() => {
                                    setOpenInfoModal(true);
                                }}
                            >
                                <InfoIcon
                                    fontSize="small"
                                    sx={{ color: "#FF7599" }}
                                />
                            </Button>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Expiry {voucher.IncentiveCode}
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
                    <PinkButton
                        sx={{
                            height: "20px",
                            width: "70px",
                        }}
                        onClick={() => {
                            navigator.clipboard.writeText(`${voucher.TransferCode}`);
                            setOpenCopyModal(true);
                            setTimeout(() => {
                                setOpenCopyModal(false);
                            }, 1000);
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "8px",
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            copy code
                        </Typography>
                    </PinkButton>
                    <FormHelperText sx={{ color: "grey", fontSize: "6px" }}>
                        {voucher.IncentiveCode}
                    </FormHelperText>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ShowMyVoucher;
