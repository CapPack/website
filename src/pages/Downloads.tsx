import { useEffect } from "react";

const Downloads = () => {
  useEffect(() => {
    document.title = "Downloads - CapPack";
  }, []);

  return <div>Downloads</div>;
};

export default Downloads;
