import { CircleOutlined, Circle } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import ChipList from "./ChipList";
import DefaultList from "./DefaultList";
import { SummaryItemProps } from "../types";
import SummaryItemBlock from "./SummartyItemBlock";

const SummaryItem: React.FC<SummaryItemProps> = ({ title, content }) => {
  console.log(content);
  if (content && content.listType === "list") {
    return <DefaultList title={title} content={content} />;
  } else if (content && content.listType === "chip") {
    return <ChipList title={title} content={content} />;
  }
  return (
    <SummaryItemBlock title={title}>
      <Typography sx={{ my: 2 }}>{content && content.text}</Typography>
    </SummaryItemBlock>
  );
};

export default SummaryItem;
