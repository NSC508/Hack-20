import flask 
from Hack20Firestore import addUser, getUser

app = flask.Flask(__name__)
app.config['DEBUG'] = True


@app.route('/')
def home():
    return '''<h1> Test </h1>'''

@app.route('/api/v1/addUser')
def api_addUser():
    if 'email' in flask.request.args:
        email = str(flask.request.args['email'])
    else:
        email = None
    if 'name' in flask.request.args:
        Name = str(flask.request.args['name'])
    else:
        Name = None
    if 'classes' in flask.request.args:
        Classes = flask.request.args.getlist('classes')
    else:
        Classes = None
    if 'interests' in flask.request.args:
        Interests = flask.request.args.getlist('interests')
    else:
        Interests = None
    if 'year' in flask.request.args:
        Year = int(flask.request.args['year'])
    else:
        Year = None
    addUser(email=email, name=Name, classes=Classes, interests=Interests, year=Year)
    return('User added to DB!')

@app.route('/api/v1/getUser')
def api_getUser():
    if 'email' in flask.request.args:
        return flask.jsonify(getUser(flask.request.args['email']))
    else:
        return "You Did Not Pass in an E-Mail!"

app.run()