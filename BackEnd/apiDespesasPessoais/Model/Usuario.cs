using apiDespesasPessoais.Model.Base;
using System;

namespace apiDespesasPessoais.Model
{
    public class Usuario : BaseEntity
    {
        public String Nome { get; set; }
        public String Email { get; set; }
        public String Senha { get; set; }
    }
}
