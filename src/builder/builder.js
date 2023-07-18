class Plant {
  constructor(name) {
    this.name = name;
  }

  setSoil(soil) {
    this.soil = soil;
    return this;
  }

  withClayPot() {
    this.pot = 'Clay pot';
    return this;
  }

  withCeramicPot() {
    this.pot = 'Ceramic pot';
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

  setExtra(extra) {
    this.extra = extra;
    return this;
  }
}

export default Plant;
