# routerJS
Truly light wight routing library for browser javascript.

Keep under 2kb in minimized js file and working without a runtime.

**Under Evolving**
 - Re-write in class based.
 - Let it possible to set partial router into main router.
 - Let it possible to pass some argument to callback via URL like "/users/:username", function(username)
 - ? Re-design methods ?

# Hot to Use

## Initialize it.

Copy and Paste the code into your src file. Then

```js
let routes = router.init()
```

## Map path string to callbacks.
```js
routes.map("/", showHomePage);
routes.map("/search", showSearchPage);
routes.map("/analyze", showDataConsolePage);
```

## Routing Anywhere
Ofcoures, it take care browser history API and URL, browser back for you.

```js
routes.to("/search");
routes.to("/analyze");
routes.back();
routes.back();
routes.forward(2);
```

## It also can manage link anchor <a> to your routing.

```html
<div id="globalNavi">
  <ul>
    <li><a href="/">home</a></li>
    <li><a href="/search">search</a></li>
    <li><a href="/analyze">data</a></li>
  </ul>
</div>
```

```js
let targetDOM = document.getElementById("globalNavi");
routes.jack(targetDOM);
```
You can jack both anchor tag itself and wrapper of anchors.
routerJS take care for you. 
