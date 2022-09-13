import json


def test_api_index(test_client):
    res = test_client.get("/api/")
    assert res.status_code == 200, res.data


def test_signup(test_client, new_user):
    # Test incorrect format ('username' is not a valid field)
    res = test_client.post(
        "/api/signup",
        json={
            "username": "Jane Doe",
            "email": "jane@gmail.com",
            "password": "password",
        },
    )
    assert res.status_code == 400, res.data

    # Test correct request format
    res = test_client.post(
        "/api/signup", json=json.loads(new_user.to_json())
    )  # Converts User object into a JSON object as a string and then converts (loads) it into a dictionary
    assert res.status_code == 200, res.data


def test_login(test_client, login_user):
    # Test incorrect login
    res = test_client.post(
        "/api/login", json={"email": "jane@gmail.com", "password": "123456"}
    )
    assert res.status_code == 401, res.data
    assert res.get_json()["error"] == "401 Unauthorized: Invalid email"

    res = test_client.post(
        "/api/login", json={"email": "john@gmail.com", "password": "123456"}
    )
    assert res.status_code == 401, res.data
    assert res.get_json()["error"] == "401 Unauthorized: Invalid password"

    # Test correct login
    res = test_client.post("/api/login", json=login_user)
    assert res.status_code == 200, res.data


# def test_user_edits(test_client, new_user):
