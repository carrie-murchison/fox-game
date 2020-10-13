import gamestate from "./gamestate";
// at top
import initButtons from "./buttons";

// replace TICK_RATE
import { TICK_RATE } from "./constants";

function init() {
  initButtons(game.handleUserAction);
  console.log("Starting game");

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gamestate.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();
