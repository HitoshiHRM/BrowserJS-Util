
class ChipsEnter {
  constructor(targetDOM) {
    this.form = targetDOM;
    this._data  = [];
    this.chipsWrapper = document.createElement('div');
    this.form.appendChild(this.chipsWrapper);
    this.entry = document.createElement('input');
    this.entry.setAttribute('type', 'text');
    this.entry.setAttribute('autocomplete', 'off');
    this.form.appendChild(this.entry);
    this.entry.addEventListener("keydown", e => this._handleInput(e));
    this.form.addEventListener("click", e => this._deleteChipByButton(e));
  }
  getChips() {
    return this._data.concat();
  }
  removeChip(name) {
    const i = this._data.indexOf(name);
    this._data.splice(i,1);
    this.chipsWrapper.removeChild(this.chipsWrapper.childNodes[i]);
  }
  enterChip(name) {
    if (this._data.includes(name)) { return };
    this._data.push(name);
    const chip = document.createElement('SPAN');
    chip.classList.add("chip")
    const b = document.createElement('BUTTON');
    chip.innerText = name;
    chip.appendChild(b);
    this.chipsWrapper.appendChild(chip);
  }
  popChip() {
    this._data.pop();
    try {this.chipsWrapper.removeChild(this.chipsWrapper.lastChild);} catch {};
  }
  _handleInput(e) {
    if (e.key == "Enter") {
      if (this.entry.value == "") {return};
      if (!(this._data.includes(this.entry.value))){
        this.enterChip(this.entry.value);
      }
      this.entry.value = "";
    } else  if (e.key == "Backspace"){
      if (this.entry.value == ""){
        this.popChip();
    }}
  }
  _deleteChipByButton(e) {
    if (e.target.closest(".chip")) {
      if (!(e.target.closest("BUTTON"))){return};
      const name = e.target.closest("DIV").innerText;
      this.removeChip(name);
    }
  }
}
