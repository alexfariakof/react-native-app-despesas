using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiDespesasPessoais.Model
{
    public class Usuario
    {
        public long idUsuario { get; set; }
        public String nome { get; set; }
        public String email { get; set; }
        public String senha { get; set; }
    }
}
