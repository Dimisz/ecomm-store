import { Link } from "@mui/material"
import { ReactNode } from "react";

interface Props {
  content: string;
  label: string;
  icon: ReactNode | null;
}

const LinksRow = ({ content, label, icon }: Props) => {
  const align = 'right';
  const pl = 3;
  
  return(
        <Link 
          href={content} 
          rel='noopener' 
          target='_blank' 
          underline="none" 
          color='inherit' 
          align={align}
          pl={pl}
          aria-label={`View ${label} profile`}
        >
          { icon }
        </Link>

  );
}

export default LinksRow;