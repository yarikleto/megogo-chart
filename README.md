# megogo-chart

#### Run project:
```bash
npm i
npm start # localhost:9000
```
- [x] Match changes in the current channel width W (in Kbps, calculated by the player) with changes in the displayed video quality Q (in Kbps).
- [x] Match W with the current buffer size of the player B (in seconds).
- [x] Match B with Q.
- [x] Match all the listed metrics (W, Q, B) with buffering mode events (buffering, downloading content into the buffer without simultaneous playback) and exiting the buffering mode.
