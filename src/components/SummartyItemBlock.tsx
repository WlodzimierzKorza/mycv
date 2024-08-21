import { CircleOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { SummaryItemBlockProps } from "../types";

const SummaryItemBlock: React.FC<SummaryItemBlockProps> = ({
  title,
  children,
}) => {
  return (
    <Grid container>
      <Grid item xs={3} sx={{ position: "relative" }}>
        <CircleOutlined
          sx={{
            position: "absolute",
            right: -10,
            zIndex: 100,
            backgroundColor: "#fff",
          }}
        />
        <Typography
          textAlign="right"
          sx={{ mr: 4, textTransform: "uppercase" }}
          color="primary"
        >
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={9}
        sx={{
          borderLeftColor: "secondary",
          borderLeftStyle: "solid",
          borderLeftWidth: 1,
          pl: 3,
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default SummaryItemBlock;
