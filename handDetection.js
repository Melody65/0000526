function drawHandGesture(predictions, gesture) {
  if (predictions.length > 0) {
    const keypoints = predictions[0].scaledMesh;

    let position;
    if (gesture === "scissors") {
      // 額頭 (假設第10點為額頭位置)
      position = keypoints[10];
    } else if (gesture === "rock") {
      // 左眼睛 (假設第33點為左眼睛位置)
      position = keypoints[33];
    } else if (gesture === "paper") {
      // 右臉頰 (假設第234點為右臉頰位置)
      position = keypoints[234];
    }

    if (position) {
      const [x, y] = position;
      noFill();
      stroke(255, 0, 0);
      strokeWeight(4);
      ellipse(x, y, 50, 50);
    }
  }
}
