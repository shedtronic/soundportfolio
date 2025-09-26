class BitcrusherProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.bits = 16;
    this.step = Math.pow(0.5, this.bits);
    this.port.onmessage = (event) => {
      if (event.data.bits !== undefined) {
        this.bits = event.data.bits;
        this.step = Math.pow(0.5, this.bits);
      }
    };
  }

  process(inputs, outputs) {
    const input = inputs[0];
    const output = outputs[0];
    for (let channel = 0; channel < input.length; ++channel) {
      for (let i = 0; i < input[channel].length; ++i) {
        output[channel][i] = Math.round(input[channel][i] / this.step) * this.step;
      }
    }
    return true;
  }
}

registerProcessor('bitcrusher-processor', BitcrusherProcessor);