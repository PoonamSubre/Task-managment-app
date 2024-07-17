from pydantic import BaseModel
from datetime import datetime


class TaskBase(BaseModel):
    title: str
    description: str
    status: str


class TaskCreate(TaskBase):
    pass


class Task(TaskBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
