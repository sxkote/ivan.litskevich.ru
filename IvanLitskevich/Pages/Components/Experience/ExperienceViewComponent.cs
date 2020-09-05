using IvanLitskevich.Models;
using Microsoft.AspNetCore.Mvc;

namespace IvanLitskevich.Pages.Components.Experience
{
    public class ExperienceViewComponent : ViewComponent
    {
        public ExperienceViewComponent()
        {
        }

        public IViewComponentResult Invoke(ExperienceModel model)
        {
            return View("_ItemExperience", model);
        }
    }
}
