export default function getSmoothedAngleFromVelocity(sprite) {
  let oldAngle = sprite.angle;
  let newAngle = 8 * Math.atan(sprite.body.velocity.y, sprite.body.velocity.x)
  let smoothedAngle = Phaser.Math.Interpolation.SmoothStep(0.25, oldAngle, newAngle)
  return smoothedAngle
}