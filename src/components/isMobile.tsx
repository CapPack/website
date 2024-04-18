import { useMediaQuery } from "react-responsive";

const isMobile = useMediaQuery({ query: "(max-width: 1028px)" });

export default isMobile;
