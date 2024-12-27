import React from "react";
import EducationsSection from "./educationsSection";
import ExperiencesSection from "./experiencesSection";
import AchievementsSection from "./achievementsSection";
import SkillsSection from "./skillsSection";
import CertificatesSection from "./certificatesSection";

const ResumePage = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "./resume/Nazmus_Saif_Resume.pdf";
    link.download = "Nazmus_Saif_Resume.pdf";
    link.click();
  };

  return (
    <article className="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="download-resume">
        <button className="download-resume-button" onClick={downloadResume}>
          Download
        </button>
      </div>

      {/* All sections */}
      <EducationsSection />
      <ExperiencesSection />
      <AchievementsSection />
      <SkillsSection />
      <CertificatesSection />
    </article>
  );
};

export default ResumePage;
