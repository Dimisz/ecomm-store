import { Link } from "@mui/material"
import { ReactNode } from "react";

interface Props {
  content: string;
  icon: ReactNode | null;
}

const LinksRow = ({ content, icon }: Props) => {
  return(
        <Link 
          href={content} 
          rel='noopener' 
          target='_blank' 
          underline="none" 
          color='inherit' 
          align="right"
          pl={3}
        >
          { icon }
        </Link>

  );
}

export default LinksRow;