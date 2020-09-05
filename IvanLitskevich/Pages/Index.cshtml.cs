using IvanLitskevich.Contracts;
using IvanLitskevich.Models;
using IvanLitskevich.Models.Views;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;
using System.Linq;

namespace IvanLitskevich.Pages
{
    public class CVModel : PageModel
    {
        private readonly IDataProvider _dataProvider;

        public DataModel Data { get; set; }

        public CVModel(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }

        public void OnGet(string lang)
        {
            Data = _dataProvider.GetData(lang);
        }

        protected IEnumerable<SkillViewModel> GetTechnicalSkills(string category, string color)
        {
            return this.Data.Skills.Technical
                .Where(s => s.Category.Equals(category, System.StringComparison.InvariantCultureIgnoreCase))
                .Select(s => new SkillViewModel(s, color));
        }

        public IEnumerable<SkillViewModel> GetNETSkills() => GetTechnicalSkills(".Net Development", "#2A9FD6");
        public IEnumerable<SkillViewModel> GetWebSkills() => GetTechnicalSkills("Web Development", "#27ae60");
        public IEnumerable<SkillViewModel> GetMethodologySkills() => GetTechnicalSkills("Methodology", "#e67e22");

    }
}
