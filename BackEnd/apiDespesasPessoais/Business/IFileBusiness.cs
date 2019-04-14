using apiDespesasPessoais.Model;

namespace apiDespesasPessoais.Business
{
    public interface IFileBusiness
    {
        byte[] GetPDFFile();
    }
}
