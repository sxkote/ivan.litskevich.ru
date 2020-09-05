namespace IvanLitskevich.Models.Views
{
    public class AvatarViewModel
    {
        public string AvatarUrl { get; set; }
        public string Title { get; set; }

        public AvatarViewModel() { }

        public AvatarViewModel(string avatarUrl, string title)
        {
            this.AvatarUrl = avatarUrl;
            this.Title = title;
        }
    }
}
