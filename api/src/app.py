import os
from flask import Flask, jsonify, request
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager, get_jwt_identity, create_access_token, jwt_required
from dotenv import load_dotenv
from models import db

load_dotenv()

app = Flask(__name__)
app.config['DEBUG'] = os.getenv('DEBUG', True)
app.config['ENV'] = os.getenv('ENV', 'production')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['JWT_SECRET_KEY'] = os.getenv('SECRET_KEY')

db.init_app(app)
Migrate(app, db)
jwt = JWTManager(app)
CORS(app)


@app.route('/', methods=['GET', 'POST', 'PUT', 'DELETE'])
def main():
    return jsonify({ "message": "Welcome to my API REST Flask" }), 200


if __name__ == '__main__':
    app.run()

