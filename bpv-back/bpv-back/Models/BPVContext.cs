namespace bpv_back.Models;

using Microsoft.EntityFrameworkCore;

public class BPVContext : DbContext
{
    public BPVContext(DbContextOptions<BPVContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = null!;
}