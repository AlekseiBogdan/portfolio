from datetime import date

from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    contacts = db.Column(db.String(), unique=False, nullable=False)
    suggestions = db.Column(db.Text(), nullable=False)
    date = db.Column(db.Date, default=date.today())
