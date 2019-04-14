using System;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Security.Claims;
using System.Security.Principal;
using apiDespesasPessoais.Model;
using apiDespesasPessoais.Repositorio;
using apiDespesasPessoais.Security.Configuration;

namespace apiDespesasPessoais.Business.Implementations
{
    public class FileBusinessImpl : IFileBusiness
    {
        public byte[] GetPDFFile()
        {
            string path = Directory.GetCurrentDirectory();

            var fullPath = path + "\\FilesDownload\\apsnet.pdf";
            return File.ReadAllBytes(fullPath);
        }
    }
}
