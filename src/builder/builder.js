class Plant {
  constructor(name){
    this.name = name;
  }

  setSoil(soil){
    this.soil = soil;
    return this;
  }

  withClayPot(){
    this.pot = 'Clay pot';
    return this;
  }

  withCeramicPot(){
    this.pot = 'Ceramic pot';
    return this;
  }

  setPotStyle(style){
    this.style = style;
    return this;
  }

  
}

/* {
  name: a,
  soil: s,
  pot: f;
  style: f;
  color: s;
  extras: [s, k, f]
}
*/