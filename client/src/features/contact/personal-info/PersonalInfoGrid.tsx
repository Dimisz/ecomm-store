// interface Props {
//   label: string;
//   content: string;
//   isLink: boolean;
//   icon?: ReactNode | null;
//   xs?: number;
//   sm?: number;
// }

import PersonalInfoGridRow from "./PersonalInfoGridRow";
import { Grid } from "@mui/material";

const info = [
  { label: 'Address:', content: 'Shenzhen, China' },
  { label: 'Phone:', content: '136 9214 2331' },
  { label: 'Email:', content: 'dimishenz@gmail.com' },
  { label: 'WeChat:', content: 'vladimirsolovyov87' },
];

const renderedInfo = info.map((item) => {
  return(
    <PersonalInfoGridRow 
      key={item.label}
      label={item.label} 
      content={item.content} 
    />
  )
});

const PersonalInfoGrid = () => {
  return(
    <Grid container>
      {renderedInfo}
    </Grid>
  )
}

export default PersonalInfoGrid;