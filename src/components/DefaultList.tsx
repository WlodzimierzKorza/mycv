import { Circle } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { DefaultListProps } from "../types";
import SummaryItemBlock from "./SummartyItemBlock";

const DefaultList: React.FC<DefaultListProps> = ({ title, content }) => {
  return (
    <SummaryItemBlock title={title}>
      {content.text && <Typography sx={{ p: 1 }}>{content.text}</Typography>}
      {content.list && (
        <List>
          {content.list.map((item) => {
            return (
              <ListItem
                sx={{ display: item.date ? "block" : null, p: 0 }}
                key={item.name}
              >
                {!item.date && (
                  <ListItemIcon sx={{ p: 0, m: 0, minWidth: 20 }}>
                    <Circle color="primary" sx={{ fontSize: 6 }} />
                  </ListItemIcon>
                )}

                <ListItemText
                  primaryTypographyProps={{
                    fontSize: item.date ? 16 : 12.57,
                    fontWeight: item.date ? "bold" : "normal",
                  }}
                  primary={item.name}
                  secondary={item.date}
                ></ListItemText>
                <Typography>{item.description}</Typography>
                {item.skills && (
                  <List sx={{ width: "100%" }}>
                    {item.skills.map((skill) => {
                      return (
                        <ListItem sx={{ p: 0 }} key={skill}>
                          <ListItemIcon sx={{ p: 0, m: 0, minWidth: 20 }}>
                            <Circle color="primary" sx={{ fontSize: 6 }} />
                          </ListItemIcon>
                          <ListItemText primary={skill} />
                        </ListItem>
                      );
                    })}
                  </List>
                )}
              </ListItem>
            );
          })}
        </List>
      )}
    </SummaryItemBlock>
  );
};

export default DefaultList;
