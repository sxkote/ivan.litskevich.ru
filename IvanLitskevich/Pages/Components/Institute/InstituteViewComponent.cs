using IvanLitskevich.Models;
using Microsoft.AspNetCore.Mvc;

namespace IvanLitskevich.Pages.Components.Experience
{
    public class InstituteViewComponent : ViewComponent
    {
        public InstituteViewComponent()
        {
        }

        public IViewComponentResult Invoke(InstituteModel model)
        {
            return View("_ItemInstitute", model);
        }
    }
}
