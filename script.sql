USE [master]
GO
/****** Object:  Database [CRUDTareas]    Script Date: 22/07/2023 01:40:31 p. m. ******/
CREATE DATABASE [CRUDTareas]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CRUDTareas', FILENAME = N'C:\Users\pamej\CRUDTareas.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CRUDTareas_log', FILENAME = N'C:\Users\pamej\CRUDTareas_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [CRUDTareas] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CRUDTareas].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CRUDTareas] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CRUDTareas] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CRUDTareas] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CRUDTareas] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CRUDTareas] SET ARITHABORT OFF 
GO
ALTER DATABASE [CRUDTareas] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CRUDTareas] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CRUDTareas] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CRUDTareas] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CRUDTareas] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CRUDTareas] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CRUDTareas] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CRUDTareas] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CRUDTareas] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CRUDTareas] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CRUDTareas] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CRUDTareas] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CRUDTareas] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CRUDTareas] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CRUDTareas] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CRUDTareas] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CRUDTareas] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CRUDTareas] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [CRUDTareas] SET  MULTI_USER 
GO
ALTER DATABASE [CRUDTareas] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CRUDTareas] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CRUDTareas] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CRUDTareas] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CRUDTareas] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CRUDTareas] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [CRUDTareas] SET QUERY_STORE = OFF
GO
USE [CRUDTareas]
GO
/****** Object:  Table [dbo].[Persona]    Script Date: 22/07/2023 01:40:32 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Persona](
	[idPersona] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](50) NULL,
	[descripcion] [nvarchar](100) NULL,
	[isCompleted] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[idPersona] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [CRUDTareas] SET  READ_WRITE 
GO
