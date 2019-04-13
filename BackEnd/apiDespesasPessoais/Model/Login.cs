using apiDespesasPessoais.Model.Base;
using System;

namespace apiDespesasPessoais.Model
{
    public class Login 
    {        
        public int Id { get; set; }
        public String Email { get; set; }
        public String Senha { get; set; }
        public String AccessKey { get; set; }

    }
}
