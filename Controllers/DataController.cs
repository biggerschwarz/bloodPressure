using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace bloodPressure.Controllers
{
    [Route("api/[controller]")]
    public class HistoryDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Normal", "Elevated", "High Stage 1", "High Stage 2", "Crisis"
        };

        [HttpGet("[action]")]
        public IEnumerable<BloodPressure> BloodPressures(int startDateIndex)
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new BloodPressure
            {
                DateFormatted = DateTime.Now.AddDays(index + startDateIndex).ToString("d"),
                Systolic = rng.Next(-20, 55),
                Diastolic = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class BloodPressure
        {
            public string DateFormatted { get; set; }
            public int Systolic { get; set; }
            public int Diastolic { get; set; }
            public string Summary { get; set; }
            
        }
    }
}
