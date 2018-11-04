using Microsoft.EntityFrameworkCore;
using FinalFantasyReact.Models;


namespace FinalFantasyReact.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            base.OnModelCreating(modelbuilder);
//            modelbuilder.Entity<Todo>().HasOne(s => s.User).WithMany(a => a.UserTodolist).OnDelete(DeleteBehavior.Cascade);
        }
        public DbSet<User> Users { get; set; }
//        public DbSet<Todo> Todos { get; set; }

    }
}
