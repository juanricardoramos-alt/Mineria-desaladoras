from datetime import datetime
from typing import Literal, Optional

from pydantic import BaseModel, ConfigDict, Field

Fase = Literal["Exploración", "Desarrollo", "Construcción", "Operativo"]
Estado = Literal["En progreso", "Pausado", "Completado"]


class ProyectoBase(BaseModel):
    nombre: str = Field(min_length=1, max_length=200)
    empresa: str = Field(min_length=1, max_length=200)
    ubicacion: str = Field(min_length=1, max_length=200)
    fase: Fase
    estado: Estado
    presupuesto: Optional[float] = Field(default=None, ge=0)
    descripcion: Optional[str] = None


class ProyectoCreate(ProyectoBase):
    pass


class ProyectoUpdate(BaseModel):
    nombre: Optional[str] = Field(default=None, min_length=1, max_length=200)
    empresa: Optional[str] = Field(default=None, min_length=1, max_length=200)
    ubicacion: Optional[str] = Field(default=None, min_length=1, max_length=200)
    fase: Optional[Fase] = None
    estado: Optional[Estado] = None
    presupuesto: Optional[float] = Field(default=None, ge=0)
    descripcion: Optional[str] = None


class ProyectoOut(ProyectoBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    fecha_creacion: datetime
