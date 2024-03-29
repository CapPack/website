import { useEffect } from "react";

function Credits() {
  useEffect(() => {
    document.title = "Credits - CapPack";
  }, []);

  return (
    <>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSV9jpOPAEtFTpAEFAZY1DxLMLQnYDiqkdHinviYVFD5oN4YXA97lY_jinhk23vRzD0lAwkD5-2TsBn/pubhtml?widget=true&amp;headers=false"
        className="px-10 w-full h-full"
      />
    </>
  );
}

export default Credits;
