from flask import Flask, render_template, jsonify, request, url_for
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb://test:test@localhost', 27017)
# client = MongoClient('localhost', 27017)
db = client.dbsparta

# HTML 연결
@app.route('/')
def home():
   return render_template('index.html')

@app.route('/fortune')
def fortune():
   return render_template('fortune_result.html')

@app.route('/result/ESTJ')
def ESTJ():
   return render_template('result/ESTJ.html')

# 로컬호스트:5000
if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)