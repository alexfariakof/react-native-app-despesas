using apiDespesasPessoais.Model;
using System.Collections.Generic;

namespace apiDespesasPessoais.Business
{
    public interface ICategoriaBusiness
    {
        Categoria Create(Categoria obj);
        Categoria FindById(int id);
        List<Categoria> FindAll();
        Categoria Update(Categoria obj);
        void Delete(int id);
    }
}
