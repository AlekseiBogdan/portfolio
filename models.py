from datetime import date, datetime

from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    contacts = db.Column(db.String(), unique=False, nullable=False)
    suggestions = db.Column(db.Text(), nullable=False)
    date = db.Column(db.Date, default=date.today())


class Visitors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip = db.Column(db.String(20), unique=False, nullable=False)
    visited_at = db.Column(db.DateTime, default=datetime.now())

# to create a db:
# 1. launch Python Console
# 2. from app import app
# 2.1 from models import <MODEL_NAME>
# 2.2 (optional) from models import db
# 3. app.app_context().push()
# 4. db.create_all()

# to make migrations:
# flask db init
# flask db migrate -m "Initial migration"
# flask db upgrade
