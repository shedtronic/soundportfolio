+++
title = 'Unstable Memory'
date = 2025-06-18T07:07:07+01:00
categories = ["Sound Design"]
tags = ["glitch", "visualisation"]
draft = false
+++


Over the last couple of weeks, I've been developing **Unstable Memory**, an experimental audiovisual project built using **p5.js**, designed to run fullscreen in kiosk mode. Here's a quick development timeline, code highlights, and reflections so far.

---

Project Goals

- Create a glitchy, nostalgic sound-reactive visual experience.
- Allow users to interact via mouse and sliders.
- Package it as a **browser-based kiosk** for installations.

---

Progress Timeline

Day 1: Project Setup
- Initialized HTML and JavaScript structure.
- Added `p5.js` and `p5.sound` libraries via CDN.
- Set up the canvas and fullscreen rendering.

 {{< highlight HTML>}}
    
    <script src="scripts/p5.min.js"></script>
<script src="scripts/p5.sound.min.js"></script>
    {{< /highlight >}}



Day 3: Audio & Slider UI
	- Integrated sample A/B loading via <select>.
	- Added sliders for volume, reverb, delay, filter sweep, glitch strength, and RGB splitting.
	- Designed a custom UI using the retro pixel font Press Start 2P with chromatic aberration style.

<div id="ui-panel">
  <label for="reverbSlider">Reverb</label>
  <input type="range" id="reverbSlider" min="0" max="100" value="50">
</div>
 {{< /highlight >}}

 Day 5: Visual Feedback
	-	Added FFT-based waveform shapes.
	-	Integrated drawRGBSplit() to simulate VHS-style channel shifts.
	-	Wrote a drawScanlines() function to overlay analog TV-style lines.

 {{< highlight JAVASCRIPT>}}

function drawScanlines() {
  glitchBuffer.stroke(0, 0, 0, 30);
  for (let y = 0; y < glitchBuffer.height; y += 2) {
    glitchBuffer.line(0, y, glitchBuffer.width, y);
  }
}
{{< /highlight >}}

Day 7:Crackle & Pop
	-	Added white noise with a custom ADSR envelope.
	-	Randomised micro "pops" for realism based on a crackleSlider.
{{< highlight JAVASCRIPT>}}
if (random() < crackleAmount * 0.02) {
  let pop = new p5.Noise('white');
  pop.amp(crackleAmount * 1.5);
  pop.start();
  crackleEnv.play(pop, 0, 0);
  setTimeout(() => pop.stop(), 20);
}
{{< /highlight >}}



You can access the protoytype at the URL below

<a href="https://mikeballard.netlify.app/unstablememory0_2/">Unstable Memory 0.2</a>

