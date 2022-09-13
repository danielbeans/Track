from flask import Flask
from .routes import api
from .models import db
from dotenv import load_dotenv
import os


def create_app():
    app = Flask(__name__)

    # Load .env
    load_dotenv()

    # Set MongoDB config
    app.config["MONGODB_SETTINGS"] = [
        {
            "host": "mongodb+srv://track.njeez1m.mongodb.net/"
            + os.getenv("DATABASE_NAME"),
            "username": os.getenv("DATABASE_USER"),
            "password": os.getenv("DATABASE_PASSWORD"),
        }
    ]

    db.init_app(app)

    # Register Route Blueprints
    app.register_blueprint(api, url_prefix="/api")

    return app
