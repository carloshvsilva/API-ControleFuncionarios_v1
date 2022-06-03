using Microsoft.EntityFrameworkCore;

namespace ControleDeFuncionarios.Models
{
    public class FuncionariosDbContext : DbContext
    {
        public DbSet<Funcionario> Funcionarios { get; set; }

        public FuncionariosDbContext(DbContextOptions<FuncionariosDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<Funcionario>().ToTable("func");
            modelBuilder.Entity<Funcionario>().ToTable("funcionario");

        }
    }
}
