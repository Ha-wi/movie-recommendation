from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost:5432/moviedb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app)

class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    genre = db.Column(db.String(50), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    rating = db.Column(db.Float, nullable=False)

db.create_all()

@app.route('/movies', methods=['GET'])
def get_movies():
    movies = Movie.query.all()
    movies_list = [{'id': movie.id, 'title': movie.title, 'genre': movie.genre, 'year': movie.year, 'rating': movie.rating} for movie in movies]
    return jsonify(movies_list)

@app.route('/recommend', methods=['POST'])
def recommend_movies():
    preferences = request.json
    genre = preferences.get('genre')
    min_rating = preferences.get('min_rating', 0)
    recommended_movies = Movie.query.filter(Movie.genre == genre, Movie.rating >= min_rating).all()
    movies_list = [{'id': movie.id, 'title': movie.title, 'genre': movie.genre, 'year': movie.year, 'rating': movie.rating} for movie in recommended_movies]
    return jsonify(movies_list)

if __name__ == '__main__':
    app.run(debug=True)
