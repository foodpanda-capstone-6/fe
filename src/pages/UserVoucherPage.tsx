import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
    Button,
    ButtonGroup,
    Drawer,
    FormHelperText,
    Grid,
    Modal,
    Popover,
    SelectChangeEvent,
    Snackbar,
    Tab,
    TextField,
    Typography,
    Paper,
    List,
    ListItem,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import {
    cartNumberCounter,
    PinkButton,
    showMarketVoucherCard,
} from "../ultis/VoucherComponent";
import ShowMyVoucher from "../components/ShowMyVoucher";
import { useParams } from "react-router-dom";

interface Props {
    username: string | null;
    isLogin: boolean;
    setCartNumber: React.Dispatch<React.SetStateAction<number>>;
}

export interface IVouchers {
    code: number;
    value: number;
    count: number;
}

const UserVoucherPage: React.FC<Props> = ({
    username,
    isLogin,
    setCartNumber,
}) => {
    const navigate = useNavigate();

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const [openCopyModal, setOpenCopyModal] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [voucherQty, setVoucherQty] = useState("");
    const [marketVouchers, setMarketVouchers] = useState([]);
    const handleQtyChange = (event: SelectChangeEvent) => {
        setVoucherQty(event.target.value as string);
    };
    const [voucherCount, setVoucherCount] = useState(1);
    const [voucherCode, setVoucherCode] = useState("");
    const [openAlert, setOpenAlert] = React.useState(false);

    const handleAlert = () => {
        setOpenAlert(true);
    };

    const addAVoucher = () => {
        fetch(
            `http://localhost:8081/incentives/transfer?code=${voucherCode}&username=${username}`,
            { method: "POST" }
        );
    };

    const handleCloseAlert = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpenAlert(false);
    };

    const [selectedVouchers, setSelectedVouchers] = useState<IVouchers[]>([]);

    const [openPurchaseDrawer, setOpenPurchaseDrawer] = useState({
        status: false,
        value: 0,
        id: 0,
    });
    const [addErrorMsg, setAddErrorMsg] = useState("code does not exist");
    const [myVouchers, setMyVouchers] = useState([]);

    useEffect(() => {
        if (isLogin === false) {
            navigate("/login");
        }

        fetch("http://localhost:8081/market")
            .then((response) => response.json())
            .then((data) => setMarketVouchers(data));

        username &&
            fetch(`http://localhost:8081/incentives/all?username=${username}`)
                .then((response) => response.json())
                .then((data) => setMyVouchers(data));
    }, [isLogin]);

    const addToCart = () => {
        fetch("http://localhost:8081/cart/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                id: openPurchaseDrawer.id,
                quantity: voucherCount,
            }),
        });

        cartNumberCounter(username, setCartNumber);
    };

    const [value, setValue] = React.useState("myVoucher");
    const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
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
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 1,
                                    width: 384,
                                    height: 100,
                                },
                            }}
                        >
                            <Paper
                                sx={{
                                    backgroundColor: "#fef2f7",
                                }}
                                elevation={0}
                            >
                                <List sx={{ listStyleType: "disc", pl: 4 }}>
                                    <ListItem sx={{ display: "list-item" }}>
                                        Info One
                                    </ListItem>
                                    <ListItem sx={{ display: "list-item" }}>
                                        Info One
                                    </ListItem>
                                </List>
                            </Paper>
                        </Box>
                        <Snackbar
                            open={openAlert}
                            autoHideDuration={4000}
                            onClose={handleCloseAlert}
                        >
                            <Alert
                                onClose={handleCloseAlert}
                                severity="info"
                                sx={{
                                    backgroundColor: "#FF2B85",
                                    width: "100%",
                                    position: "relative",
                                    top: "-500px",
                                }}
                            >
                                Added to Cart!
                            </Alert>
                        </Snackbar>
                        <TabContext value={value}>
                            <Stack
                                sx={{ pt: 1 }}
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
                                        label="Your Wallet"
                                        sx={{ color: "#FF2B85" }}
                                    />
                                    <Tab
                                        value="voucherStore"
                                        label="Voucher Store"
                                        sx={{ color: "#FF2B85" }}
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
                                        Add a Voucher
                                    </Typography>
                                </PinkButton>
                                {myVouchers.map((voucher) => (
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
                                        {marketVouchers.map((mv) =>
                                            showMarketVoucherCard(
                                                mv,
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
                        value={voucherCode}
                        sx={{ marginTop: "15px", width: "100%" }}
                        label="Voucher Code"
                        variant="outlined"
                        onChange={(e: any) => setVoucherCode(e.target.value)}
                    />
                    <FormHelperText sx={{ color: "red" }}>
                        {addErrorMsg}
                    </FormHelperText>
                    <PinkButton
                        onClick={() => addAVoucher()}
                        sx={{ marginTop: "15px", width: "100%" }}
                    >
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
                        Purchase Store Voucher
                    </Typography>

                    <Box
                        sx={{
                            paddingTop: "10px",
                            paddingX: "10px",
                            marginTop: "15px",
                            height: "70px",
                            boxShadow: 1,
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
                                        ${openPurchaseDrawer.value} FPD
                                        <Button
                                            sx={{ color: "#FF2B85", mb: "2px" }}
                                            onClick={() => {
                                                setOpenInfoModal(true);
                                            }}
                                        ></Button>
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
                                                if (voucherCount > 1) {
                                                    setVoucherCount(
                                                        voucherCount - 1
                                                    );
                                                } else {
                                                    setVoucherCount(1);
                                                }
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
                                            {voucherCount}
                                        </Typography>
                                        <Button
                                            sx={{
                                                color: "white",
                                                backgroundColor: "#FF2B85",
                                                "&:hover": {
                                                    backgroundColor: "#FF2B85",
                                                },
                                            }}
                                            onClick={() =>
                                                setVoucherCount(
                                                    voucherCount + 1
                                                )
                                            }
                                        >
                                            +
                                        </Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>

                    <PinkButton
                        sx={{ marginTop: "30px", width: "100%" }}
                        onClick={() => {
                            addToCart();

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
                                handleAlert(),
                                setVoucherCount(1),
                            ]);
                        }}
                    >
                        Add to Cart
                    </PinkButton>

                    <Button
                        variant="outlined"
                        color="error"
                        sx={{ marginTop: "15px", width: "100%" }}
                        onClick={() => {
                            setOpenPurchaseDrawer((prevState) => ({
                                ...prevState,
                                status: false,
                            }));
                            setVoucherCount(1);
                        }}
                    >
                        Cancel
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default UserVoucherPage;
