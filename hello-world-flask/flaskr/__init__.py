from flask import Flask, render_template

app = Flask('helloworld')

@app.route('/')
def home(name=None):
    return render_template('home.html')

@app.route('/page2')
def page2(name=None):
    return render_template('page2.html')

@app.route('/hello')
def hello():
	return 'Hello'

if __name__ == '__main__':
    app.run(debug=True)