from flask_mongoengine import MongoEngine

db = MongoEngine()


class User(db.Document):
    name = db.StringField()
    nickname = db.StringField()
    email = db.StringField(required=True)
    password = db.StringField(required=True)
