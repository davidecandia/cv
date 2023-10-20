import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfPath = "/cv/Curriculum.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Curriculum.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="text-black text-lg font-semibold home-span">
      Scarica CV
    </button>
  );
};

export default DownloadButton;
