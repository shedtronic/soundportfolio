+++
title = 'Unstable Memory'
date = 2025-06-18T07:07:07+01:00
categories = ["Sound Design"]
tags = ["glitch", "visualisation"]
draft = false
+++


Introduction

Unstable Memory is a visual and audio installation experiment that I am working on alongside my Touch Designer projects that mimics the fragmented feel of decaying media and glitching signals. Designed to run in fullscreen kiosk mode and on mobile devices, it allows the user to trigger audio-visual chaos using touch input, sliders, and audio file loading controls.

It began as a simple prototype and is now in its third iteration. I am interested here in developing interactive sound as an intervention experiment. It could and has already be used for exhibition use and the current version is available to experiment with here, it invites you to explore how sound fragments, glitch aesthetics, and interaction can evoke memory, decay, and digital noise.

This version (v0.3) builds on earlier experiments with p5.js, expanding the audio interactivity and glitch controls while testing kiosk deployment strategies for public-facing exhibition settings.

The interface allows you to blend two audio samples using an XY control plane, manipulating pitch, glitch intensity, and various audio effects in real time. It’s intentionally unstable, unpredictable, and its fun to try and get the sweet spot of eerie sonic hallucinatory audio driven by human touch.

Project Origins

The prototype started with the idea of blending fragmented sound and lost media styled on broken formats and memory. Inspired by glitch art, haunted tapes, and browser-based synthesis


Goals
	-	Build an immersive audiovisual canvas with:
	-	VHS-style glitch effects
	-	RGB pulse distortion
	-	Noise and crackle overlays
	-	Interactive sound modulation
	-	Add a basic UI for audio control and glitch toggling
	-	Run full screen in kiosk mode through browser and in the future a downloadable web app.
    -	Allow file-loading for audio channels A and B
	-	Introduce artificial ‘corrupt file’ glitch messages

Key Features Added

UI Panel (HTML/CSS)

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

Key Features

- Sample A and B Selectors

Choose from a curated collection of samples such as “Shopping.mp3”, “Chiptune”, “Funk”, and a dedicated Corrupted Sample that triggers a glitching message and noisy playback.

- XY Plane Interaction

Users influence pitch, volume, and glitch intensity by moving the mouse or finger across the screen. Vertical movement changes pitch and glitch amount; horizontal affects volume and stereo balance.

- Effects Panel

Reverb, Echo, Filter Sweep, RGB Pulse, and a working Toggle Glitch effect can all be adjusted. Echo time, RGB pulse distortion, and sweep modulation offer reactive complexity.

- Audio Sync Engine

Although Sample A and B can be different, pitch fine-tuning helps align their playback to create unexpected harmonies and dissonance. A full reset button returns the system to its default state.

- Volume and Pitch Fine-Tune Controls

Added to give users precise control alongside chaotic movement — these allow subtle tuning of each sample’s playback without affecting speed.

- Mobile Optimizations

The interface adapts for mobile, with a restructured panel layout that groups controls logically in a vertical stack. Sliders and buttons shrink for touch accuracy.

Visual Design
	- Dynamic Glitch Waveforms
Audio-reactive glitch waveforms pulse across the screen using randomized distortion and color flicker. These visuals shift based on pitch and glitch amount.
	- CRT Scanline Filter (optional)
A subtle filter mimics old CRT screens with scanlines and warp, adding nostalgia to the aesthetic.
	- Custom Sliders and Fonts
The UI uses glitch-inspired neon sliders, monospace fonts, and bold layout choices to reinforce the broken-machine theme.


Accessibility Notes
	- Touchscreen support was recently confirmed on Smart Board displays and mobile devices.
	- Issues with slider hitboxes on touchscreen were partially resolved by increasing their width and padding.
	- The reset and fine-tune sliders have been optimized for mobile and exhibition use.

Known Bugs and Upcoming Fixes
	- Occasionally, when selecting a new sample, the pitch resets unintentionally due to state mismatches.
	- Sliders sometimes react with background touch inputs; a background fix was applied to reduce unintended mouse interactions.
	- Bitcrusher has been temporarily removed due to high CPU load and implementation bugs — will hopefully return in a later iteration of UnstableMemory 03.

Thematic Intent

UnstableMemory reflects themes of:
	- Decay and Data Corruption
	- Collective Memory and Media Loss
	- Human-Machine Interaction
	- Sonic Glitch as Aesthetic

You can access the protoytype at the URL below

<a href="https://mikeballard.netlify.app/unstablememory0_3/">Unstable Memory 0.3</a>

