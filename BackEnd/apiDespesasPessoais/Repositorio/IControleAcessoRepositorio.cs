﻿using apiDespesasPessoais.Model;

namespace apiDespesasPessoais.Repositorio
{
    public interface IControleAcessoRepositorio
    { 
        ControleAcesso FindByEmail(ControleAcesso controleAcesso);
    }
}