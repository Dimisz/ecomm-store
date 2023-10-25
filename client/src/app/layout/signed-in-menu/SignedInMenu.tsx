import { Avatar, Button, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { signOut } from "../../../features/account/accountSlice";

const SignedInMenu = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);

  const theme = useTheme();
  const greaterThanMd = useMediaQuery(theme.breakpoints.up("md"));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button 
        onClick={handleClick}
        color='inherit'
        sx={{typography: 'h6'}}
      >
        { 
          greaterThanMd
          ?
          user?.email
          :
          <Avatar sx={{ bgcolor: 'primary' }}>{user?.email[0]}</Avatar>
        }
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My orders</MenuItem>
        <MenuItem onClick={() => dispatch(signOut())}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default SignedInMenu;