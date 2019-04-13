using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using apiDespesasPessoais.Model;
using apiDespesasPessoais.Repositorio;
using apiDespesasPessoais.Security.Configuration;

namespace apiDespesasPessoais.Business.Implementations
{
    public class ControleAcessoBusinessImpl : IControleAcessoBusiness
    {
        private IControleAcessoRepositorio _repositorio;

        private Security.Configuration.SigningConfigurations _singingConfiguration;
        private TokenConfiguration _tokenConfiguration; 

        public ControleAcessoBusinessImpl(IControleAcessoRepositorio repositorio, Security.Configuration.SigningConfigurations singingConfiguration, TokenConfiguration tokenConfiguration)
        {
            _repositorio = repositorio;
            _singingConfiguration = singingConfiguration;
            _tokenConfiguration = tokenConfiguration;
        }
        
        public object FindByLogin(ControleAcesso controleAcesso)
        {
            bool credentialsValid = false;
            if (controleAcesso != null && !string.IsNullOrWhiteSpace(controleAcesso.Login))
            {
                var baseLogin = _repositorio.FindByEmail(controleAcesso);
                credentialsValid = (baseLogin != null && controleAcesso.Login == baseLogin.Login && controleAcesso.Senha == baseLogin.Senha);
            }
            if(credentialsValid)
            {
                ClaimsIdentity identity = new ClaimsIdentity(
                    new GenericIdentity(controleAcesso.Login, "Login"),
                    new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
                        new Claim(JwtRegisteredClaimNames.UniqueName, controleAcesso.Login)
                    });

                DateTime createDate = DateTime.Now;
                DateTime expirationDate = createDate + TimeSpan.FromSeconds(_tokenConfiguration.Seconds);

                var handler = new JwtSecurityTokenHandler();
                string token = CreateToken(identity, createDate, expirationDate, handler);

                return SuccessObject(createDate, expirationDate, token);
            }
            else
            {
                return ExceptionObject();
            }            
        }

        private string CreateToken(ClaimsIdentity identity, DateTime createDate, DateTime expirationDate, JwtSecurityTokenHandler handler)
        {
            var securityToken = handler.CreateToken(new Microsoft.IdentityModel.Tokens.SecurityTokenDescriptor
            {
                Issuer = _tokenConfiguration.Issuer,
                Audience = _tokenConfiguration.Audience,
                SigningCredentials = _singingConfiguration.SigningCredentials,
                Subject = identity,
                NotBefore = createDate,
                Expires = expirationDate
            });

            var token = handler.WriteToken(securityToken);

            return token;
        }

        private object ExceptionObject()
        {
            return new
            {
                autenticated = false,
                message = "Falha durante Autenticação"
            };
        }

        private object SuccessObject(DateTime createDate, DateTime expirationDate, string token)
        {
            return new
            {
                autenticated = true,
                created = createDate.ToString("yyyy-MM-dd HH:mm:ss"),
                expiration = expirationDate.ToString("yyyy-MM-dd HH:mm:ss"),
                accessToken = token,
                message = "OK"

            };
        }
    }
}
