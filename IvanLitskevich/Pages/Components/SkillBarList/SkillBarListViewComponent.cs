using IvanLitskevich.Models;
using IvanLitskevich.Models.Views;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace IvanLitskevich.Pages.Components.SkillBar
{
    public class SkillBarListViewComponent : ViewComponent
    {
        public SkillBarListViewComponent()
        {
        }

        public IViewComponentResult Invoke(IEnumerable<SkillModel> skills, string category, string color)
        {
            var viewModel = skills
                .Where(s => s.Category.Equals(category, System.StringComparison.InvariantCultureIgnoreCase))
                .Select(s => new SkillViewModel(s, color));

            return View("Default", viewModel);
        }
    }
}
