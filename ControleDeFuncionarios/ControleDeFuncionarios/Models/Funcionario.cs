namespace ControleDeFuncionarios.Models
{
    public class Funcionario
    {
        public int id { get; set; }
        public string nome { get; set; }
        public string sobrenome { get; set; }
        public string email { get; set; }
        public string telefone { get; set; }
        public string lider { get; set; }
        public int matricula_lider { get; set; }
        public string nome_lider { get; set; }
        public string senha { get; set; }
    }
}
