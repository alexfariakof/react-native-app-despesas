﻿using apiDespesasPessoais.Model.Base;
using System;

namespace apiDespesasPessoais.Model
{
    public class ControleAcesso : BaseEntity
    {
        public int IdUsuario { get; set; }
        public String Login { get; set; }
        public String Senha { get; set; }
    }
}
