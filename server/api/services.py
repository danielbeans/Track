import re
import bcrypt
from flask import abort, request
from .models import User
from .utilities import *


def authenticate_user(req: request):
    user = req.get_json()
    if "email" in user and "password" in user:
        if found_user := User.objects(email__iexact=user["email"]):
            if bcrypt.checkpw(
                user["password"].encode(), found_user[0].password.encode("utf-8")
            ):
                return True
            else:
                abort(401, "Invalid password")
        else:
            abort(401, "Invalid email")
    elif "Authorization" in req.headers:
        return True

    abort(400)


def create_user(user: User):
    signup_keys = ["name", "nickname", "email", "password"]
    user = request.get_json()

    # If all 4 signup_keys are in the request
    if len([key for key in signup_keys if key in user]) == 4:
        user = User(
            name=user["name"],
            nickname=user["nickname"],
            email=user["email"],
            password=user["password"],
        )

        # Check if email is unique
        if User.objects(email__iexact=user.email):
            abort(401, "Account with this email already exists")

        # Hash password and convert it back from UTF-8 into Python string
        hashed_pwd = bcrypt.hashpw(user.password.encode(), bcrypt.gensalt())
        user.password = hashed_pwd.decode()

        # Commit to database
        user.save()
        return True
