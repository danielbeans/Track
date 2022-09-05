from flask import Blueprint, render_template, request, jsonify
from werkzeug.exceptions import HTTPException
from .models import User
from .services import *

api = Blueprint('api', __name__)


@api.route('/')
def index():
    return 'Connected.'


@api.route('/signup', methods=['POST'])
def signup():
    if create_user(request):
        return 'User signed up successfully', 200

    abort(400)


@api.route('/login', methods=['POST'])
def login():
    if authenticate_user(request):
        return 'User authenticated', 200

    abort(400)


@api.errorhandler(HTTPException)
def bad_request(error):
    return {'error': str(error)}, error.code


@api.errorhandler(401)
def unauthorized(error):
    return {'error': str(error)}, 401
