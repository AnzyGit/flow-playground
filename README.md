### Create beautiful diagrams with ease!

Transform a json file into a beautiful diagrams that can be animated.

---

## 🎯 The goal

The goal of this repository is to create a web page able to generate a nice looking diagram on the fly.

It is using the power of [react flow](https://reactflow.dev) in order to do that.

Just pass the query where you are hosting the json graph

### Example

```
http://localhost:3000/?url=https://www.mywebsite/files/myfile.json
```

```
{
    "nodes": [
        {
          "id": "1",
          "type": "input",
          "data": { "label": "Input Node" },
          "position": { "x": 250, "y": 25 }
        },
        {
          "id": "2",
          "data": { "label": "Default Node" },
          "position": { "x": 100, "y": 125 }
        },
        {
          "id": "3",
          "type": "output",
          "data": { "label": "Output Node" },
          "position": { "x": 250, "y": 250 }
        }
      ],
	"edges": [{
			"id": "e1-2",
			"source": "1",
			"target": "2"
		},
		{
			"id": "e2-3",
			"source": "2",
			"target": "3",
			"animated": true
		}
	]
}
```

![Example](https://github.com/AnzyGit/flow-playground/blob/main/doc/demo.gif)

After that, the page should render a nice diagram that you can send.

## 🪜 Steps

- ✅ Create a page that can render a diagram
- ✅ Able to read a json file and render it
- ✅ Use query params to fetch custom urls
- 🚧 Host the page on a github page