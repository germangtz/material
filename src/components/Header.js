import React from "react";
import {AppBar, Toolbar, Typography, Button} from '@mui/material';

const Header = () => {
    return (
        <AppBar position="Static">
            <Toolbar>
                <Typography variant="h6" style={{flexGrow:1}}>
                    Mi aplicación.
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
