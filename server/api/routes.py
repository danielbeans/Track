from flask import Blueprint, render_template, request

api = Blueprint('api', __name__)


@api.route('/')
def index():
    return request.args
