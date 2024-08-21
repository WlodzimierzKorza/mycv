import { Typography, Grid, useTheme, Stack } from "@mui/material";
import DataItem from "./DataItem";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Email, GitHub, Image, LinkedIn } from "@mui/icons-material";
import { DataSectionProps } from "../types";

const DataSection: React.FC<DataSectionProps> = ({ personalData }) => {
  const theme = useTheme();
  const { name, location, phone, email, github, linkedin } = personalData;
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
      my={2}
    >
      <Grid sm={3}>
        <Stack sx={{ borderRadius: "50%", overflow: "hidden", ml: 6 }}>
          <img
            src="https://avatars.githubusercontent.com/u/70679176?s=400&u=b6d3a6f0bb8acb20a0e8580063c738391a8d30e4&v=4"
            alt={name}
          />
        </Stack>
      </Grid>
      <Grid sm={8}>
        <Typography variant="h3" color="primary" textAlign="left">
          {name}
        </Typography>
        <Grid container my={2} spacing={2}>
          <DataItem
            text={location}
            icon={
              <AddLocationIcon sx={{ color: theme.palette.primary.dark }} />
            }
          />

          <DataItem
            text={phone}
            icon={
              <PhoneAndroidIcon sx={{ color: theme.palette.primary.dark }} />
            }
          />
          <DataItem
            text={email}
            icon={<Email sx={{ color: theme.palette.primary.dark }} />}
          />
          <DataItem
            text={github}
            icon={<GitHub sx={{ color: theme.palette.primary.dark }} />}
          />
          <DataItem
            text={linkedin}
            icon={<LinkedIn sx={{ color: theme.palette.primary.dark }} />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DataSection;
