using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RequireKnockoutPOC.Controllers
{
    public class UtilityController : Controller
    {
        public PartialViewResult RenderPartial(string id)
        {
            try
            {
                return PartialView(id);
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}