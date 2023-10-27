from datetime import date

from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    contacts = db.Column(db.String(), unique=False, nullable=False)
    suggestions = db.Column(db.Text(), nullable=False)
    date = db.Column(db.Date, default=date.today())


# to create a db:
# 1. launch Python Console
# 2. import app from app.py and model from models.py (e.g. from models import Feedback)
# 3. run app.app_context().push()
# 4. run db.create_all()
