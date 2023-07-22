using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace PracticaFinalPamelaJinez.Models;

public partial class CrudtareasContext : DbContext
{
    public CrudtareasContext()
    {
    }

    public CrudtareasContext(DbContextOptions<CrudtareasContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Persona> Personas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;DataBase=CRUDTareas; Integrated Security=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Persona>(entity =>
        {
            entity.HasKey(e => e.IdPersona).HasName("PK__Persona__A478814106D49817");

            entity.ToTable("Persona");

            entity.Property(e => e.IdPersona).HasColumnName("idPersona");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(100)
                .HasColumnName("descripcion");
            entity.Property(e => e.IsCompleted)
                .HasMaxLength(50)
                .HasColumnName("isCompleted");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .HasColumnName("nombre");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
