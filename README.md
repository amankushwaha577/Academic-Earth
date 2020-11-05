# ``` Academic Earth ```
Academic Earth believes that everyone has the right to a world-class education. We are building  a cloud based Web Application for online learners. 'E-Learning explores interactive technologies and communication systems to improve the learning experience.
  - Many people face the problem when they want to learn something new or they have some skills which they want to share among people, then they can add their content/sources on our web application.

  -  In our application many users provide various sources in one place so that learners need not to worry about where to gain new skills. They can choose one of the best sources among these and start learning.

  - It makes possible a truly ambitious education system for a future learning society.
 

# Software Tech Specs
### BackEnd Tech
```diff
- React JS
- Node JS
- Next JS
- Express JS
````
### Cloud Tech
```diff
+ Amazon AWS SES,IAM,S3 and EC2
```

### DataBase Tech
 ```diff
- Mongoo DB Cluster
```
 
### Front-End Tech
- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `CSS3 and HTML5`
- ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Bootstrap4`
- ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) `Java Script`

# Online Reachability:
Domain Will available very very soon..............

### Offline Reachability ,Installation of Academic Earch
1. Academic Earth requires [Node.js](https://nodejs.org/) v4+ to run online
2. Or it Requires Netbeans/VS Code/Apache Net Beans as a Software Run.

Install the dependencies and devDependencies and start the client side.
```sh
$ cd client
$ npm install -y
$ npm run dev
```

Install the dependencies and devDependencies and start the Server side.
```sh
$ cd server
$ npm install -y
$ npm start
```


# Team Academic Earth
| Name | Github Username |
| ------ | ------ |
| Aman Kushwaha | [https://github.com/amankushwaha577/][PlDb] |
| Ayush Gupta | [plugins/github/README.md][PlGh] |
| Satish Narayan  | [plugins/googledrive/README.md][PlGd] |
 


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version} .
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
