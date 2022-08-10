onEvent("block.right_click", (event) => {
  const { block, hand, item, world, player } = event;
  if (hand.name() != "MAIN_HAND") return;

  if (item == "create:wrench" && player.isCrouching()) {
    if (block.equals("minecraft:end_portal_frame")) {
      const hasEnderEye = block.properties.eye;
      block.set("minecraft:air");
      player.give("minecraft:end_portal_frame");
      if (hasEnderEye == "true") {
        player.give("minecraft:ender_eye");
      }
    }
  }

});

onEvent('block.right_click', event => {
  if (!event.player.mainHandItem.isEmpty()) return
  if (event.block.id == 'minecraft:white_concrete'){
      if (event.player.fake) {
          event.player.mainHandItem = Item.of('kubejs:encrypted_matter');
      } else {
      if (event.player.crouching){
        event.server.runCommandSilent(`execute at ${event.player.id} as ${event.player.id} run give @s kubejs:encrypted_matter 1`)}
      }
      event.cancel()
  }
})

onEvent("item.right_click", event => {

  command = `/clear @s kubejs:finished_program 1`
  yourItem = Item.of('kubejs:finished_program')

  if (event.player.mainHandItem == yourItem) {
      if (!event.player.fake) {
          event.player.mainHandItem.count -= 1;
          event.server.runCommandSilent(`execute at ${event.player.id} as ${event.player.id} run title @s title {"text":"\u25b6 Returning to Reality...","bold":true,"color":"aqua"}`)
          event.server.runCommandSilent(`execute at ${event.player.id} as ${event.player.id} run title @s subtitle {"text":"You won ! GG","bold":true,"color":"dark_aqua"}`)
          event.server.runCommandSilent(`execute at ${event.player.id} as ${event.player.id} run time set midnight`)
          event.server.runCommandSilent(`execute at ${event.player.id} as ${event.player.id} run summon minecraft:lightning_bolt ~ ~5 ~`)
          event.server.runCommandSilent(`execute at ${event.player.id} as ${event.player.id} run particle cofh_core:straight_arc ~ ~ ~ ~ ~ ~ 0 50 force`)
          event.server.runCommandSilent(`execute at ${event.player.id} as ${event.player.id} run playsound minecraft:encrypted.finishpack master @s ~ ~ ~ 3`)
          
      }
  }
})