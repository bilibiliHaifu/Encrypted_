// priority: 1000

console.info('Custom [Items / Blocks]')

onEvent('item.registry', event => {
	
	// Register new items here
	event.create('new_compound_ethylene').displayName('Ethylene')
	event.create('crypto_currency').displayName('Crypto Currency')
	event.create('encrypted_ingot').displayName('§5Encrypted Ingot§r').glow(true)
	event.create('encrypted_matter').displayName('Encrypted Matter')
	event.create('finished_program').displayName('§3<§1Finished_program§3/>_§r').glow(true).unstackable()
	event.create('creative_essence').displayName('Creative Essence').glow(true)
	event.create('raw_andesite_alloy').displayName('§6Lifeless §rAndesite Mixture')
	event.create('wooden_gear').displayName('Wooden Gear')
	event.create('wooden_plate').displayName('Wooden Plate')
	event.create('incomplete_machine_frame', 'create:sequenced_assembly').displayName('Incomplete Machine Frame').unstackable()
})

onEvent('block.registry', event => {
	// Register new blocks here
	event.create('encrypted_ore').material("stone").fullBlock(true).hardness(0.5)
	event.create('wood_machine_frame').material("wood")
})


onEvent('item.modification', event => {
	event.modify('minecraft:egg', item => {item.maxStackSize = 64})
	event.modify('minecraft:ender_pearl', item => {item.maxStackSize = 64})
	event.modify('minecraft:snowball', item => {item.maxStackSize = 64})

	event.modify('chemlib:element_hydrogen', item => {item.burnTime = 20})
	event.modify('chemlib:element_carbon', item => {item.burnTime = 200})
})

