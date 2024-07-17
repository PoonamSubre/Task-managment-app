<<<<<<< HEAD
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
=======
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
>>>>>>> 267850fb757d63fd6f88ccb3c91870b8ff4ba5c2
