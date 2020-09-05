using System.Collections.Generic;

namespace IvanLitskevich.Models
{
    public class DataModel
    {
        public InfoModel Info { get; set; }
        public IEnumerable<ExperienceModel> Experiences { get; set; }
        public SkillsModel Skills { get; set; }
        public EducationModel Education { get; set; }
        public List<CertificationModel> Certifications { get; set; }
        public TranslationModel Translations { get; set; }
    }

    public class InfoModel
    {
        public string Name { get; set; }
        public string Title { get; set; }
        public string[] Titles { get; set; }
        public string Url { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Skype { get; set; }
        public string CV { get; set; }
        public string Credo { get; set; }
        public string Facebook { get; set; }
        public string LinkedIn { get; set; }
        public string GooglePlus { get; set; }
        public string GitHub { get; set; }
        public string Pluralsight { get; set; }

        public string MicrosoftMCSA { get; set; }
        public string MicrosoftMCSD { get; set; }
    }

    public class EducationModel
    {
        public List<InstituteModel> Institutes { get; set; }
        public List<CourseModel> Courses { get; set; }
    }

    public class SkillsModel
    {
        public IEnumerable<SkillModel> Technical { get; set; }
        public IEnumerable<SkillModel> Soft { get; set; }
        public IEnumerable<SkillModel> Roles { get; set; }
        public IEnumerable<SkillModel> Languages { get; set; }
    }
}
