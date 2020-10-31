const router = {
  init: function() {
    const routes = {routes:{},__proto__:this};
    window.onpopstate = this._routing.bind(routes);
    return routes;
  },
  jack: function(targetDOM) {
    targetDOM.onclick = function(e) {
      e.preventDefault();
      const a = e.target.closest('A');
      if (a) {
        history.pushState({},'',a.href);
        this._routing.bind(this)();
      }
    };
  },
  map: function(path, maincb, querycb=()=>{}, hashcb=()=>{}) {
    this.routes[path] = {m:maincb, q:querycb, h:hashcb}
  },
  to: function(path) {
    history.pushState({},'',path);
    this._routing();
  },
  back: (i=1)=>{history.go(-i)},
  forward: (i=1)=>{history.go(i)},

  _routing: function() {
    const path = document.location.pathname;
    const query= document.location.search;
    const hash = document.location.hash;
    if (this.prev == path) {
      this.routes[path].q(query);this.routes[path].h(hash);
    } else {
      this.prev = path;
      this.routes[path].m();
      this.routes[path].q(query);
      this.routes[path].h(hash);
    }
  },
}
