using Microsoft.AspNetCore.Mvc;

namespace NewReactProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CompanyController : ControllerBase
    {
        public IActionResult Index()
        {
            var json = "[{Name:'John Simith',Age:35},{Name:'Pablo Perez',Age:34}]";
            return Ok(json);
        }
    }
}