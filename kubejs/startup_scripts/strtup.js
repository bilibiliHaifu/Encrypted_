// priority: 1000

console.info('Custom [Items / Blocks]')

onEvent('item.registry', event => {
	
	// Register new items here
	event.create('new_compound_ethylene').displayName('乙烯')
	event.create('crypto_currency').displayName('加密货币')
	event.create('encrypted_ingot').displayName('§5加密锭§r').glow(true)
	event.create('encrypted_matter').displayName('加密物质')
	event.create('finished_program').displayName('§3<§1已完成的项目§3/>_§r').glow(true).unstackable()
	event.create('creative_essence').displayName('创造精华').glow(true)
	event.create('raw_andesite_alloy').displayName('§6无机§r安山混合物')
	event.create('wooden_gear').displayName('木齿轮')
	event.create('wooden_plate').displayName('木制板材')
	event.create('incomplete_machine_frame', 'create:sequenced_assembly').displayName('未完成的机器框架').unstackable()
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

