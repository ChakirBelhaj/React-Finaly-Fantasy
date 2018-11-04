﻿// <auto-generated />
using System;
using FinalFantasyReact.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FinalFantasyReact.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20181103215128_f2")]
    partial class f2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FinalFantasyReact.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(256);

                    b.Property<string>("FirstName")
                        .HasMaxLength(256);

                    b.Property<bool>("IsActivated");

                    b.Property<DateTime?>("LastAction");

                    b.Property<string>("LastName")
                        .HasMaxLength(256);

                    b.Property<string>("Password")
                        .IsRequired();

                    b.Property<string>("RefreshToken");

                    b.Property<string>("Token");

                    b.Property<DateTime?>("TokenDate");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
