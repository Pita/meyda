import { AmplitudeSpectrum, BarkScale } from "../main";

export type LoudnessParameters = {
  ampSpectrum: AmplitudeSpectrum;
  barkScale: BarkScale;
};

export default function (args: LoudnessParameters) {
  if (
    typeof args.ampSpectrum !== "object" ||
    typeof args.barkScale !== "object"
  ) {
    throw new TypeError();
  }

  var NUM_BARK_BANDS = 24;
  var specific = new Float32Array(NUM_BARK_BANDS);
  var total = 0;
  var normalisedSpectrum = args.ampSpectrum;
  var bbLimits = new Int32Array(NUM_BARK_BANDS + 1);

  bbLimits[0] = 0;
  var currentBandEnd =
    args.barkScale[normalisedSpectrum.length - 1] / NUM_BARK_BANDS;
  var currentBand = 1;
  for (let i = 0; i < normalisedSpectrum.length; i++) {
    while (args.barkScale[i] > currentBandEnd) {
      bbLimits[currentBand++] = i;
      currentBandEnd =
        (currentBand * args.barkScale[normalisedSpectrum.length - 1]) /
        NUM_BARK_BANDS;
    }
  }

  bbLimits[NUM_BARK_BANDS] = normalisedSpectrum.length - 1;

  //process

  for (let i = 0; i < NUM_BARK_BANDS; i++) {
    let sum = 0;
    for (let j = bbLimits[i]; j < bbLimits[i + 1]; j++) {
      sum += normalisedSpectrum[j];
    }

    specific[i] = Math.pow(sum, 0.23);
  }

  //get total loudness
  for (let i = 0; i < specific.length; i++) {
    total += specific[i];
  }

  return {
    specific: specific,
    total: total,
  };
}
