import React from "react";
import { Grid } from "@mui/material";

// project imports
import MyInvitationCard from "@/sections/invite/invitePage/myInvitationCard";
import InfoCard from "@/sections/invite/invitePage/infoCard";

const InvitePage: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <MyInvitationCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <InfoCard />
      </Grid>
      <Grid item xs={12}>
        <h1>Invite</h1>
      </Grid>
    </Grid>
  );
};

export default InvitePage;
