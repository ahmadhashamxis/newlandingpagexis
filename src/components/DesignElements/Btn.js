import { Box } from "@mui/material";

const Btn = ({ sx, onClick, ...props }) => {
  return (
    <Box
      className="_static-button-animated"
      sx={sx}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </Box>
  );
};
export default Btn;