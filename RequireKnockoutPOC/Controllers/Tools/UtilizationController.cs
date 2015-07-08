using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RequireKnockoutPOC.Controllers.Tools
{
    public class UtilizationController : Controller
    {
        public ActionResult Index()
        {
            return View("/Views/Tools/Utilization.cshtml");
        }
    }
}