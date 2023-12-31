USE [ProyectoFinal]
GO
/****** Object:  Table [dbo].[tareas]    Script Date: 23/07/2023 04:45:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tareas](
	[idAlumno] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](80) NULL,
	[materia] [nvarchar](80) NULL,
	[asignacion] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[idAlumno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tareas] ON 

INSERT [dbo].[tareas] ([idAlumno], [nombre], [materia], [asignacion]) VALUES (1, N'oscar', N'matematicas', N'problemas')
INSERT [dbo].[tareas] ([idAlumno], [nombre], [materia], [asignacion]) VALUES (2, N'antonio', N'fisica', N'problemas DE FISICA')
INSERT [dbo].[tareas] ([idAlumno], [nombre], [materia], [asignacion]) VALUES (3, N'oscar', N'matematicas', N'problemas de algebra')
SET IDENTITY_INSERT [dbo].[tareas] OFF
GO
