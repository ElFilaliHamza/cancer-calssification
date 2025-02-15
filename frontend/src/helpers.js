// helpers.js
import { colorConfig } from "./colorConfig";

export function getPredictionColors(prediction) {
  // If the prediction is recognized, we use the corresponding color config;
  // otherwise we default to the fallback.
  return colorConfig[prediction] || colorConfig.default;
}
