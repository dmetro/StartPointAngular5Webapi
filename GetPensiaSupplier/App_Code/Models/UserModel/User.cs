using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

[PetaPoco.TableName("User")]
[PetaPoco.PrimaryKey("Id")]
public class User : Model<User>
{

    public int id { get; set; }
    public string name { get; set; }
    public string password { get; set; }
    public string email { get; set; }
    public string phone { get; set; }
    public int status { get; set; }




}