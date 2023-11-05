import DesktopHeader from "../header/DesktopHeader";
import EducationDownloadable from "../education/EducationDownloadable";
import CertificationsDownloadable from "../education/certifications-links/CertificationsDownloadable";
import LanguagesProficiencyDownloadable from "../languages/LanguagesProficiencyDownloadable";
import WorkExperienceDownloadable from "../experience/WorkExperienceDownloadable";
import SkillsDownloadable from "../skills/SkillsDownloadable";

// export const { toPDF, targetRef } = usePDF({filename: 'myCv.pdf'});

const DownloadableCV = () => {
  // const { toPDF, targetRef } = usePDF({filename: 'cv.pdf'});

  return(
    <>
    {/* <Paper ref={targetRef} sx={{ pt: 2 }}> */}
      <DesktopHeader isDownloadable={true}/>
      <EducationDownloadable/>
      <CertificationsDownloadable />
      <LanguagesProficiencyDownloadable />
      <WorkExperienceDownloadable/>
      <SkillsDownloadable/>
    {/* </Paper> */}
    </>
  );
}

export default DownloadableCV;