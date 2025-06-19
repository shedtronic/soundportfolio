+++
title = 'Unstable Memory'
date = 2025-06-18T07:07:07+01:00
categories = ["Sound Design"]
tags = ["glitch", "visualisation"]
draft = false
+++


Introduction

Unstable Memory is a visual and audio installation experiment that mimics the fragmented feel of decaying media and glitching signals. Designed to run in fullscreen kiosk mode on a touchscreen, it allows the user to trigger audio-visual chaos using touch input, sliders, and audio file loading controls.

This version (v0.2) builds on earlier experiments with p5.js, expanding the audio interactivity and glitch controls while testing kiosk deployment strategies for public-facing exhibition settings.

Goals
	-	Build an immersive audiovisual canvas with:
	-	VHS-style glitch effects
	-	RGB pulse distortion
	-	Noise and crackle overlays
	-	Interactive sound modulation
	-	Add a basic UI for audio control and glitch toggling
	-	Run full screen in kiosk mode on Raspberry Pi or Mac
    -	Allow file-loading for audio channels A and B
	-	Introduce artificial ‘corrupt file’ glitch messages

Key Features Added

🎛 UI Panel (HTML/CSS)

A vertical right-side panel with:
	-	Glitch toggle
	-	Reverb, filter sweep, delay sliders
	-	RGB Pulse and Crackle & Pop sliders
	-	Volume sliders for Sample A and B
	-	Sample pickers for A and B (now with multiple options)
	-	Reset button

All sliders use HTML <input type="range"> elements, styled to reflect a retro-futuristic, neon aesthetic.

 Audio Channels (p5.sound)

Each audio channel (A and B) can load independently and loop continuously. Sliders control volume, pitch, and glitch level based on user interaction. Reverb, delay, and filter sweep are applied globally. White noise and envelope-pulsed crackle effects simulate decaying signal fidelity.



You can access the protoytype at the URL below

<a href="https://mikeballard.netlify.app/unstablememory0_2/">Unstable Memory 0.2</a>

