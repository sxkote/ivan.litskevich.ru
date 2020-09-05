namespace IvanLitskevich.Models.Views
{
    public class SkillViewModel
    {
        public SkillViewModel(SkillModel skill, string color)
        {
            Value = skill.Value;
            Title = skill.Title;
            Color = color;
        }

        public SkillViewModel(int value, string title, string color)
        {
            Value = value;
            Title = title;
            Color = color;
        }

        public int Value { get; set; }

        public string Title { get; set; }

        public string Color { get; }
    }
}
