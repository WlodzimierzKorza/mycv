import { Grid } from "@mui/material";
import SummaryItem from "../../components/SummaryItem";
import data from "../../data.json";

const Summary = () => {
  return (
    <Grid container>
      {data.summary.map((item) => {
        return (
          <SummaryItem
            key={item.title}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </Grid>
  );
};

export default Summary;
