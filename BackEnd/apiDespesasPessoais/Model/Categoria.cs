using apiDespesasPessoais.Model.Base;
using System;

namespace apiDespesasPessoais.Model
{
    public class Categoria : BaseEntity
    {
        public int IdTipoCategoria { get; set; }
        public String Descricao { get; set; }
    }
}
