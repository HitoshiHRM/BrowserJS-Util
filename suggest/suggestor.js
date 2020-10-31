
class Suggestor {
  constructor(targetDOM, suggestList) {
    this.input = targetDOM;
    this.suggestView = document.createElement("SELECT");
    this.suggestView.setAttribute("size",10);
    this.suggestView.classList.add("invisible");
    targetDOM.after(this.suggestView);
    this._list = suggestList;
    this._filtered = new Set();
    this._tempValue = "";
    this.input.addEventListener("keyup", e => this._handleSuggest(e));
    this.input.addEventListener("keydown", e => this._hanldeBlur(e));
    this.suggestView.addEventListener("change", e => {this.input.value = e.target.value;});
    this.suggestView.addEventListener("keydown", e => {this._handleKeySelect(e)});
  }
  _handleSuggest() {
    this._filtered.clear();
    this._filterSuggest();
    this._updateView();
  }
  _filterSuggest() {
    const v = this.input.value;
    if(v.length < 1) {return};
    for(let d of this._list) {
      if (d.toLowerCase().indexOf(v.toLowerCase()) == -1) {continue};
      this._filtered.add(d);
    }
  }
  _updateView() {
    while(this.suggestView.firstChild) {this.suggestView.removeChild(this.suggestView.firstChild);};
    if (this._filtered.size == 0 ) {this.suggestView.classList.add("invisible");return;};
    this.suggestView.classList.remove("invisible");
    const f = document.createDocumentFragment();
    for(let s of this._filtered) {
      const opt = document.createElement("OPTION");
      opt.innerText = s;
      opt.value = s;
      f.appendChild(opt);  
    }
    this.suggestView.appendChild(f);
  }
  _hanldeBlur(e) {
    if (this.input.value.length < 1) { return }
    if(e.code == "ArrowDown") {
      this._tempValue = this.input.value;
      this.suggestView.focus();
      this.suggestView.options[0].selected = true;
      this.input.value = this.suggestView.options[0].value;
    } else if (e.code == "ArrowUp") {
      this._tempValue = this.input.value;
      this.suggestView.focus();
      this.suggestView.lastChild.selected = true
      this.input.value = this.suggestView.lastChild.value;
    }
  }
  _handleKeySelect(e) {
    switch (e.code) {
      case "Enter":
      this.input.focus();
      break;
      case "ArrowUp":
      if(this.suggestView.firstChild.selected) {this.input.value = this._tempValue;this.input.focus();};
      break;
      case "ArrowDown":
      if(this.suggestView.lastChild.selected) {this.input.value = this._tempValue;this.input.focus();};
      break;          
    }
  }
}
