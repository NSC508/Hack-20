# Imports the Google Cloud client library
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

# Instantiates a client
client = language.LanguageServiceClient()

# The text to analyze
text = u'I like to hike around the pacific northwest and kayak when its warm outside, and skip morning lectures at UW because theyre too early'
document = types.Document(
    content=text,
    type=enums.Document.Type.PLAIN_TEXT)

# Detects the sentiment of the text
sentiment = client.analyze_sentiment(document=document).document_sentiment

response = client.classify_text(document)
    # Loop through classified categories returned from the API
for category in response.categories:
        # Get the name of the category representing the document.
        # See the predefined taxonomy of categories:
        # https://cloud.google.com/natural-language/docs/categories
    print(u"Category name: {}".format(category.name))
        # Get the confidence. Number representing how certain the classifier
        # is that this category represents the provided text.
    print(u"Confidence: {}".format(category.confidence))

#print('Text: {}'.format(text))
#print('Sentiment: {}, {}'.format(sentiment.score, sentiment.magnitude))