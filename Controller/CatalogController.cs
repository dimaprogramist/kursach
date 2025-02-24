using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

using kursach.Data;

namespace kursach.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatalogController : ControllerBase    
    {
        private ApplicationDbContext context;
        public CatalogController(ApplicationDbContext context)
        {
            context = context;
        }
        [HttpGet]
        public List<laptops> Get()
        {
            return context.laptops.ToList();
        }
            }
}
