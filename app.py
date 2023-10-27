from flask import Flask, render_template, request, redirect
from flask_admin import Admin

from models import Feedback, db
from views import FeedbackAdmin

from flask_migrate import Migrate

app = Flask(__name__)
with open('secret_key.txt', 'r') as sk_file:
    secret_key = sk_file.read().encode()

app.config['SECRET_KEY'] = secret_key
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///portfolio_karina.db'

db.init_app(app)

migrate = Migrate(app, db)


admin = Admin(app, name='Портфолио', template_mode='bootstrap4')
admin.add_view(FeedbackAdmin(Feedback, db.session, name='Обратная связь'))


@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/info')
def info():
    return render_template('info.html')

@app.route('/get_feedback', methods=['POST'])
def get_feedback():
    name = request.form.get('name')
    contacts = request.form.get('contacts')
    message = request.form.get('message')
    fback = Feedback(name=name, contacts=contacts, suggestions=message)
    db.session.add(fback)
    db.session.commit()
    return redirect('/#feedback')


if __name__ == '__main__':
    app.run(host='192.168.0.102', port=5000, debug=True)