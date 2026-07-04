from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
from database import Base, SessionLocal, engine, get_db
from seed_data import SEED_PROJECTS

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Catastro de Desaladoras API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:4173",
        "http://127.0.0.1:4173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def seed_if_empty():
    db = SessionLocal()
    try:
        if db.query(models.Proyecto).count() == 0:
            db.add_all(models.Proyecto(**data) for data in SEED_PROJECTS)
            db.commit()
    finally:
        db.close()


@app.get("/")
def root():
    return {"status": "ok", "service": "Catastro de Desaladoras API"}


@app.get("/proyectos", response_model=list[schemas.ProyectoOut])
def listar_proyectos(db: Session = Depends(get_db)):
    return db.query(models.Proyecto).order_by(models.Proyecto.id).all()


@app.get("/proyectos/{proyecto_id}", response_model=schemas.ProyectoOut)
def obtener_proyecto(proyecto_id: int, db: Session = Depends(get_db)):
    proyecto = db.get(models.Proyecto, proyecto_id)
    if proyecto is None:
        raise HTTPException(status_code=404, detail="Proyecto no encontrado")
    return proyecto


@app.post("/proyectos", response_model=schemas.ProyectoOut, status_code=201)
def crear_proyecto(payload: schemas.ProyectoCreate, db: Session = Depends(get_db)):
    proyecto = models.Proyecto(**payload.model_dump())
    db.add(proyecto)
    db.commit()
    db.refresh(proyecto)
    return proyecto


@app.put("/proyectos/{proyecto_id}", response_model=schemas.ProyectoOut)
def actualizar_proyecto(
    proyecto_id: int, payload: schemas.ProyectoUpdate, db: Session = Depends(get_db)
):
    proyecto = db.get(models.Proyecto, proyecto_id)
    if proyecto is None:
        raise HTTPException(status_code=404, detail="Proyecto no encontrado")

    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(proyecto, field, value)

    db.commit()
    db.refresh(proyecto)
    return proyecto


@app.delete("/proyectos/{proyecto_id}", status_code=204)
def eliminar_proyecto(proyecto_id: int, db: Session = Depends(get_db)):
    proyecto = db.get(models.Proyecto, proyecto_id)
    if proyecto is None:
        raise HTTPException(status_code=404, detail="Proyecto no encontrado")
    db.delete(proyecto)
    db.commit()
