from google.cloud import firestore

# Project ID is determined by the GCLOUD_PROJECT environment variable
db = firestore.Client()

#doc_ref = db.collection(u'users').document()
#doc_ref.set({
#    u'Name': u'William',
#    u'Classes': ['MATH 308'],
#    u'Interests': ['Chess'],
#})

def addUser(email, name=None, classes=None, interests=None, year=None, major=None):
    db = firestore.Client()
    doc_ref = db.collection(u'users').document()
    doc_ref.set({
        u'Name': name,
        u'Classes': classes,
        u'Interests': interests,
        u'Year': year,
        u'EMail': email,
        u'Major': major
    })

def getUser(email):
    users_ref = db.collection(u'users')
    docs = db.collection(u'users').where(u'EMail', u'==', email).stream()
    for doc in docs: 
        return doc.to_dict()

def getUserMatches(email):
    users_ref = db.collection(u'users')
    docs = db.collection(u'users').where(u'EMail', u'==', email).stream()
    matches = dict()
    for doc in docs:
        docDict = doc.to_dict()
        matches = {}
        interests = docDict["Interests"]
        classes = docDict["Classes"]
        docs2 = db.collection(u'users').where(u'Interests', u'array_contains_any', interests).stream()
        for doc2 in docs2:
            matches[doc2.to_dict()["EMail"]] = doc2.to_dict()
        print(matches)

getUserMatches('nsc5081@uw.edu')