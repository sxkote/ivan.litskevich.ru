namespace IvanLitskevich.Models
{
    public class CourseModel
    {
        public string Period { get; set; }
        public string Organization { get; set; }
        public string Title { get; set; }
        public string AvatarUrl { get; set; }
        public CertificateModel Certificate { get; set; }
        public bool IsVisible { get; set; } = true;
    }
}
