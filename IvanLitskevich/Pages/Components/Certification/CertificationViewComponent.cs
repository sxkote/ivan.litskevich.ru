using IvanLitskevich.Models;
using Microsoft.AspNetCore.Mvc;

namespace IvanLitskevich.Pages.Components.Experience
{
    public class CertificationViewComponent : ViewComponent
    {
        public CertificationViewComponent()
        {
        }

        public IViewComponentResult Invoke(CertificationModel model)
        {
            return View("_ItemCertification", model);
        }
    }
}
