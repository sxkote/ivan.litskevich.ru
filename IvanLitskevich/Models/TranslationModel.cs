namespace IvanLitskevich.Models
{
    public class TranslationModel
    {
        public string Lang { get; set; }
        public string TitlePrefix { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Call { get; set; }
        public string Skype { get; set; }
        public string Resume { get; set; }
        public string DownloadCV { get; set; }
        public string GetCV { get; set; }

        public TranslationHeadingsModel Headings { get; set; }
        public TranslationMenuModel Menu { get; set; }
    }

    public class TranslationHeadingsModel
    {
        public string Skills { get; set; }
        public string SkillsTechnical { get; set; }
        public string SkillsTechnicalNet { get; set; }
        public string SkillsTechnicalWeb { get; set; }
        public string SkillsTechnicalMethodology { get; set; }
        public string SkillsSoft { get; set; }
        public string SkillsSoftStrengths { get; set; }
        public string SkillsSoftRoles { get; set; }
        public string SkillsSoftLanguages { get; set; }
        public string Experience { get; set; }
        public string Education { get; set; }
        public string EducationHigh { get; set; }
        public string EducationCourses { get; set; }
        public string Certification { get; set; }
        public string Contacts { get; set; }
    }

    public class TranslationMenuModel
    {
        public string Skills { get; set; }
        public string Experience { get; set; }
        public string Certification { get; set; }
        public string EducationHigh { get; set; }
        public string EducationCourses { get; set; }
        public string Contacts { get; set; }
    }
}
