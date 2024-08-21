import { Chip } from "@mui/material";
import { ChipListItemProps } from "../types";
import SummaryItemBlock from "./SummartyItemBlock";

const ChipList: React.FC<ChipListItemProps> = ({ title, content }) => {
  return (
    <SummaryItemBlock title={title}>
      {content.list &&
        content.list.map((skill) => {
          return (
            <Chip
              key={skill.name}
              label={skill.name}
              variant="outlined"
              sx={{ m: 0.2 }}
              color="primary"
            />
          );
        })}
    </SummaryItemBlock>
  );
};
export default ChipList;
