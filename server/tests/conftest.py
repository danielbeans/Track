from api import create_app
import pytest


@pytest.fixture()
def test_client():
    app = create_app()

    # Create a test client using the Flask application configured for testing
    with app.test_client() as testing_client:
        # Establish an application context
        with app.app_context():
            yield testing_client  # this is where the testing happens!


@pytest.fixture()
def new_user():
    user = {
        'name': 'John',
        'email': 'johndoe@gmail.com'
    }

    return user
