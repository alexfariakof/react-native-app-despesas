using System;

namespace apiDespesasPessoais.Model
{
    public class Receita
    {
        public int Id { get; set; }
        public int IdUsuario { get; set; }
        public int IdCategoria { get; set; }
        public DateTime data { get; set; }
        public String Descricao { get; set; }
        public Decimal Valor { get; set; }
    }
}
