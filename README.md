# Lesson 7: ember-data

Replace our pojos with ember-data models

```bash
ember g model blog-post title:string text:string date:date author:string
ember g route index
ember g adapter application
```

* add a model hook that loads all blog-posts
* optional: add an error template
* customize the adapter for our API endpoint

Links:
* https://guides.emberjs.com/v2.13.0/models/
* https://guides.emberjs.com/v2.13.0/models/defining-models/
* https://guides.emberjs.com/v2.13.0/models/finding-records/