﻿using apiDespesasPessoais.Model.Base;

namespace apiDespesasPessoais.Model
{
    public class Categoria : BaseEntity
    {
        public int IdTipoCategoria { get; set; }
        public string Descricao { get; set; }
        public int? IdUsuario { get; set; }
    }
}
