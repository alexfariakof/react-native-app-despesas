﻿using apiDespesasPessoais.Model.Base;

namespace apiDespesasPessoais.Model
{
    public class Usuario : BaseEntity
    {
        public string Nome { get; set; }
        public string Email { get; set; }
    }
}
