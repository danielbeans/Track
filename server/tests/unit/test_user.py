from api.models import User


def test_database(new_user):
    res = new_user.save()
    assert res.name == 'John Doe'
    assert res.nickname == 'John'
    assert res.email == 'john@gmail.com'

    res.delete()
