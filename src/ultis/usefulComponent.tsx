import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const PinkButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#FF2B85",
  "&:hover": {
    backgroundColor: "#FF2B85",
  },
}));
