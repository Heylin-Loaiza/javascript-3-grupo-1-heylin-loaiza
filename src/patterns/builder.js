class Plant {
  constructor(name) {
    this.name = name;
  }

  setSoil(soil) {
    this.soil = soil;
    return this;
  }

  withClayPot() {
    this.pot = 'clay';
    return this;
  }

  withCeramicPot() {
    this.pot = 'ceramic';
    return this;
  }

  setPotDecoration(style) {
    this.style = style;
    return this;
  }

  setPotColor(color) {
    this.color = color;
    return this;
  }

  setExtras(extra) {
    this.extras = extra;
    return this;
  }
}

export default Plant;
