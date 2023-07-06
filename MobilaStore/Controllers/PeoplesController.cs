using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace MobilaStore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PeoplesController : ControllerBase
    {
        public IActionResult Get()
        {
            using StreamReader reader = new(@"./Data.json");
            var json = reader.ReadToEnd();

            return Ok(json);
        }
    }
}