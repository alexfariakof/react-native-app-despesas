using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace apiDespesasPessoais.Model.Base
{
    //[DataContract]
    public class BaseEntity
    {
        //[Column("id")]
        public int? Id { get; set; }
    }
}
