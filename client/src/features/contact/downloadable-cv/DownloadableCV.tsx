import EducationDownloadable from "../education/EducationDownloadable";
import CertificationsDownloadable from "../education/certifications-links/CertificationsDownloadable";
import LanguagesProficiencyDownloadable from "../languages/LanguagesProficiencyDownloadable";
import WorkExperienceDownloadable from "../experience/WorkExperienceDownloadable";
import SkillsDownloadable from "../skills/SkillsDownloadable";
import DownloadableHeader from "../header/downloadable-header/DownloadableHeader";


// export const { toPDF, targetRef } = usePDF({filename: 'myCv.pdf'});

const DownloadableCV = () => {
  // const { toPDF, targetRef } = usePDF({filename: 'cv.pdf'});

  return(
    <>
    {/* <Paper ref={targetRef} sx={{ pt: 2 }}> */}
      <DownloadableHeader/>
      <WorkExperienceDownloadable/>
      <EducationDownloadable/>
      <CertificationsDownloadable />
      <SkillsDownloadable/>
      <LanguagesProficiencyDownloadable />
      
      
    {/* </Paper> */}
    </>
  );
}

export default DownloadableCV;