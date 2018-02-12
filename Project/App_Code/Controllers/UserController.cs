using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

[RoutePrefix("api/user")]
public class UserController : ApiController
{
    [HttpGet]
    [Route("{id}")]
    public IHttpActionResult User(int id)
    {
        //var us = userId;

        List<User> users = new List<User>();
        for (int i = 0; i < 5; i++)
        {
            var user = new User();
            user.id = i;
            user.name = string.Concat("Dima", i.ToString());
            user.password = string.Concat("Dima", i.ToString());
            users.Add(user);
        }
        return Ok(users.ToArray());
    }


}