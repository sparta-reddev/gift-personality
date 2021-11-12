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

@app.route('/result/ENFP')
def ENFP():
   return render_template('result/ENFP.html')

@app.route('/result/ISTP')
def ISTP():
   return render_template('result/ISTP.html')

@app.route('/result/ENTP')
def ENTP():
   return render_template('result/ENTP.html')

@app.route('/result/ISFJ')
def ISFJ():
   return render_template('result/ISFJ.html')

@app.route('/result/ENFJ')
def ENFJ():
   return render_template('result/ENFJ.html')

@app.route('/result/INFP')
def INFP():
   return render_template('result/INFP.html')

@app.route('/result/INTJ')
def INTJ():
   return render_template('result/INTJ.html')

@app.route('/result/ESFP')
def ESFP():
   return render_template('result/ESFP.html')

@app.route('/result/INTP')
def INTP():
   return render_template('result/INTP.html')

@app.route('/result/ISTJ')
def ISTJ():
   return render_template('result/ISTJ.html')

@app.route('/result/INFJ')
def INFJ():
   return render_template('result/INFJ.html')

@app.route('/result/ISFP')
def ISFP():
   return render_template('result/ISFP.html')

@app.route('/result/ESFJ')
def ESFJ():
   return render_template('result/ESFJ.html')

@app.route('/result/ESTP')
def ESTP():
   return render_template('result/ESTP.html')

@app.route('/result/ESTJ')
def ESTJ():
   return render_template('result/ESTJ.html')

@app.route('/result/ENTJ')
def ENTJ():
   return render_template('result/ENTJ.html')

# 로컬호스트:5000
if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)