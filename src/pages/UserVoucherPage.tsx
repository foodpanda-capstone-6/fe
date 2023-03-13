import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
    Button,
    Drawer,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Modal,
    Popover,
    Select,
    SelectChangeEvent,
    Slider,
    Tab,
    TextField,
    Typography,
} from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { PinkButton, showVoucherCard } from "../ultis/VoucherComponent";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ShowMyVoucher from "../components/ShowMyVoucher";

interface Props {
    isLogin: boolean;
}

interface IVouchers {
    code?: number;
    count?: number;
}

const UserVoucherPage: React.FC<Props> = ({ isLogin }) => {

    const navigate: (path: string) => void = useNavigate();
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const [openCopyModal, setOpenCopyModal] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [voucherQty, setVoucherQty] = useState("");

    const handleQtyChange = (event: SelectChangeEvent) => {
        setVoucherQty(event.target.value as string);
    };

    const [selectedVouchers, setSelectedVouchers] = useState<IVouchers[]>([]);

    const [openPurchaseDrawer, setOpenPurchaseDrawer] = useState({
        status: false,
        value: 0,
    });
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
            code: "ZybD6CzLvy",
            value: 50,
            owner: 1,
            expire: "18-04-2029",
        },
        {
            id: 4,
            code: "XUb6GcU2yl",
            value: 30,
            owner: 1,
            expire: "05-08-2025",
        },
    ];

    useEffect(() => {
        if (isLogin === false) {
            navigate("/login");
        }
    }, [isLogin]),
        console.log(selectedVouchers);

    const [value, setValue] = React.useState("myVoucher");
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
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
                                    onChange={handleTabChange}
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                    aria-label="secondary tabs example"
                                    sx={{ color: "#FF2B85" }}
                                >
                                    <Tab
                                        value="myVoucher"
                                        label="Your Vouchers"
                                    />
                                    <Tab
                                        value="voucherStore"
                                        label="Voucher Store"
                                    />
                                </TabList>
                            </Stack>
                            <TabPanel value="myVoucher">
                                <PinkButton
                                    sx={{
                                        width: "100%",
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
                                        <ConfirmationNumberIcon
                                            sx={{ verticalAlign: "middle" }}
                                        />
                                        {"  "}Add a Voucher
                                    </Typography>
                                </PinkButton>
                                {myVoucher.map((voucher) => (
                                    <ShowMyVoucher
                                        voucher={voucher}
                                        setOpenInfoModal={setOpenInfoModal}
                                        setOpenCopyModal={setOpenCopyModal}
                                    />
                                ))}
                            </TabPanel>
                            <TabPanel value="voucherStore">
                                <Box>
                                    <Grid container>
                                        {voucherValue.map((value) =>
                                            showVoucherCard(
                                                value,
                                                setOpenPurchaseDrawer
                                            )
                                        )}
                                    </Grid>
                                </Box>
                            </TabPanel>
                        </TabContext>
                    </Container>
                </Box>
            </main>

            <Modal open={openInfoModal} onClose={() => setOpenInfoModal(false)}>
                <Box
                    sx={{
                        position: "absolute" as "absolute",
                        top: "50%",
                        left: "50%",
                        width: "200px",
                        height: "300px",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        boxShadow: 1,
                        p: 4,
                    }}
                >
                    <Typography variant="h6">Send your gift card</Typography>
                    <Typography sx={{ mt: 2 }}>
                        <br />
                        Click on the voucher and you will copy the voucher code,
                        you can then share it with anyone. <br />
                        <br />
                        Please note that vouchers are only transforable once,
                        keep it safe
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
                <Typography sx={{ padding: 1 }}>
                    Voucher code copied!
                </Typography>
            </Popover>

            <Drawer
                anchor="bottom"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box
                    sx={{
                        height: "12rem",
                        marginX: "15px",
                        paddingTop: "15px",
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                        {" "}
                        Add a Voucher
                    </Typography>

                    <TextField
                        sx={{ marginTop: "15px", width: "100%" }}
                        label="Voucher Code"
                        variant="outlined"
                    />
                    <FormHelperText sx={{ color: "red" }}>
                        {addErrorMsg}
                    </FormHelperText>
                    <PinkButton sx={{ marginTop: "15px", width: "100%" }}>
                        Add
                    </PinkButton>
                </Box>
            </Drawer>

            <Drawer
                anchor="bottom"
                open={openPurchaseDrawer.status}
                onClose={() =>
                    setOpenPurchaseDrawer((prevState) => ({
                        ...prevState,
                        status: false,
                    }))
                }
            >
                <Box
                    sx={{
                        height: "18rem",
                        marginX: "15px",
                        paddingTop: "15px",
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                        Please confirm your order
                    </Typography>
                    <Typography sx={{ fontSize: "13px", marginTop: "10px" }}>
                        How many ${openPurchaseDrawer.value} vouchers would you
                        like to purchase?
                    </Typography>

                    <FormControl fullWidth sx={{ marginTop: "10px" }}>
                        <InputLabel>Quantity</InputLabel>
                        <Select
                            value={voucherQty}
                            label="Quantity"
                            onChange={handleQtyChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                    <PinkButton
                        sx={{ marginTop: "30px", width: "100%" }}
                        onClick={() =>
                            setSelectedVouchers((prevVouchers: any) => [
                                ...prevVouchers,
                                {
                                    code: openPurchaseDrawer.value,
                                    count: voucherQty,
                                },
                                setOpenPurchaseDrawer((prevState) => ({
                                    ...prevState,
                                    status: false,
                                })),
                            ])
                        }
                    >
                        Add to Cart
                    </PinkButton>
                    <Button
                        variant="outlined"
                        color="error"
                        sx={{ marginTop: "15px", width: "100%" }}
                        onClick={() =>
                            setOpenPurchaseDrawer((prevState) => ({
                                ...prevState,
                                status: false,
                            }))
                        }
                    >
                        Cancel
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default UserVoucherPage;
