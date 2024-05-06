from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

# Load the JSON data
with open('disease.json', encoding='utf-8') as f:
    diseases_data = json.load(f)['disease']

# Extract symptoms and titles from JSON data
symptoms = [disease['description2'] for disease in diseases_data]
titles = [disease['title'] for disease in diseases_data]

# TF-IDF vectorization
vectorizer = TfidfVectorizer(stop_words='english')
X = vectorizer.fit_transform(symptoms)

# API endpoint for chatbot
@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    prompt = data['prompt']

    # Tokenize and vectorize the prompt
    prompt_vectorized = vectorizer.transform([prompt])

    # Calculate cosine similarity between prompt and symptoms
    similarity_scores = cosine_similarity(prompt_vectorized, X)

    # Get the index of the most similar symptom
    most_similar_index = similarity_scores.argmax()

    # Return both title and description2 corresponding to the most similar symptom
    response = {
        'title': titles[most_similar_index],
        'description2': symptoms[most_similar_index]
    }

    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
