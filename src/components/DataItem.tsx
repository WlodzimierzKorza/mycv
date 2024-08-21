import { Typography, Grid } from "@mui/material";
import { DataItemProps } from "../types";

const DataItem: React.FC<DataItemProps> = ({ icon, text }) => {
  return (
    <Grid item>
      <Grid container spacing={1}>
        <Grid item> {icon}</Grid>
        <Grid item>
          <Typography>{text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DataItem;
