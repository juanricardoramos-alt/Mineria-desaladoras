from sqlalchemy import CheckConstraint, Column, DateTime, Integer, Numeric, String, Text
from sqlalchemy.sql import func

from database import Base

FASES = ("Exploración", "Desarrollo", "Construcción", "Operativo")
ESTADOS = ("En progreso", "Pausado", "Completado")


class Proyecto(Base):
    __tablename__ = "proyectos"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(200), nullable=False, index=True)
    empresa = Column(String(200), nullable=False)
    ubicacion = Column(String(200), nullable=False)
    fase = Column(String(30), nullable=False)
    estado = Column(String(30), nullable=False)
    presupuesto = Column(Numeric(12, 2), nullable=True)
    descripcion = Column(Text, nullable=True)
    fecha_creacion = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    __table_args__ = (
        CheckConstraint(
            "fase IN (" + ", ".join(f"'{f}'" for f in FASES) + ")",
            name="ck_proyectos_fase",
        ),
        CheckConstraint(
            "estado IN (" + ", ".join(f"'{e}'" for e in ESTADOS) + ")",
            name="ck_proyectos_estado",
        ),
    )
