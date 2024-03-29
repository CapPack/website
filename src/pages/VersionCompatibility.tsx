import { useEffect } from "react";

function VersionCompatibility() {
  useEffect(() => {
    document.title = "Version Compatibility - CapPack";
  }, []);

  return (
    <>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFa5bgQ9zZX2yirR626Up5H0GwGoKPXuil6uyjOO5pGT2NuVURJHcild0ZBR8lC4Pyl3vA_ev_iEVt/pubhtml?widget=true&amp;headers=false"
        className="px-10 w-full h-full"
      />
    </>
  );
}

export default VersionCompatibility;
