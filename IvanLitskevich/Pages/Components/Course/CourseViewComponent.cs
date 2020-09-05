using IvanLitskevich.Models;
using Microsoft.AspNetCore.Mvc;

namespace IvanLitskevich.Pages.Components.Experience
{
    public class CourseViewComponent : ViewComponent
    {
        public CourseViewComponent()
        {
        }

        public IViewComponentResult Invoke(CourseModel model)
        {
            return View("_ItemCourse", model);
        }
    }
}
