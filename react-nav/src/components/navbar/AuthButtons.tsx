import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthButtons: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid container spacing={2} sx={{ width: "200px", marginRight: "15px" }}>
        <Grid item xs={6} sx={{ padding: 1 }}>
          <Button
            onClick={() => navigate("/login")}
            variant="contained"
            sx={{ background: "white", color: "#1976d2" }}
          >
            <Typography variant="button"> Login </Typography>
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ padding: 1 }}>
          <Button
            onClick={() => navigate("/register")}
            variant="contained"
            sx={{ background: "white", color: "#1976d2" }}
          >
            <Typography variant="button"> Register </Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AuthButtons;
