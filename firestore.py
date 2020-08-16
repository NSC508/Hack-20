from google.cloud import firestore

# Project ID is determined by the GCLOUD_PROJECT environment variable
db = firestore.Client()

doc_ref = db.collection(u'users').document()
doc_ref.set({
    u'Name': u'William',
    u'Classes': ['MATH 308'],
    u'Interests': ['Chess'],
})

users_ref = db.collection(u'users')
docs = users_ref.stream()

for doc in docs:
    print(f'{doc.id} => {doc.to_dict()}')