info.onScore(74, function () {
    game.showLongText("Cambia las fabricas", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`nivel5`)
})
info.onScore(123, function () {
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.InBackground)
    tiles.setCurrentTilemap(tilemap`nivel0`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    game.showLongText("Click en A para cargar texturas", DialogLayout.Center)
    pause(500)
    Jugador = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    game.showLongText("Has pasado el nivel 7", DialogLayout.Full)
    Jugador.setPosition(28, 28)
    controller.moveSprite(Jugador, 100, 100)
    scene.cameraFollowSprite(Jugador)
    tiles.setCurrentTilemap(tilemap`nivel24`)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Cloud), 500)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Cloud), 500)
    controller.moveSprite(Jugador, 100, 100)
    animation.runImageAnimation(
    Jugador,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b b 4 4 b b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b b 4 4 b b f e f f . 
        . f e e 4 b b d d b b 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b b 4 4 b b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico25`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`miMosaico`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel6, function (sprite, location) {
    scene.cameraShake(8, 500)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`miMosaico14`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico1`, function (sprite, location) {
    info.changeLifeBy(1)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    tiles.setTileAt(location, assets.tile`miMosaico`)
})
info.onScore(104, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.InBackground)
    tiles.setCurrentTilemap(tilemap`nivel0`)
    game.showLongText("Click en A para cargar texturas", DialogLayout.Center)
    pause(500)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Cloud), 500)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Cloud), 500)
    game.showLongText("Has sobrevivido al jefe, sigue asi :/", DialogLayout.Center)
    game.showLongText("Planta las semillas", DialogLayout.Bottom)
    Jugador = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Jugador, 100, 100)
    scene.cameraFollowSprite(Jugador)
    tiles.setCurrentTilemap(tilemap`nivel12`)
    Jugador.setPosition(21, 16)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico29`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    tiles.setCurrentTilemap(tilemap`nivel34`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico20`, function (sprite, location) {
    info.changeScoreBy(2)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    tiles.setTileAt(location, assets.tile`miMosaico`)
})
info.onScore(58, function () {
    tiles.setCurrentTilemap(tilemap`nivel2`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    game.showLongText("Click en A para cargar texturas", DialogLayout.Center)
    pause(500)
    game.showLongText("Haz finalizado el nivel 2, sigue así ;)", DialogLayout.Bottom)
    game.showLongText("Recolecta las monedas y cambia las fabricas por energia sostenible", DialogLayout.Bottom)
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.InBackground)
    Jugador = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Cloud), 100)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Cloud), 100)
    Jugador.setPosition(10, 10)
    animation.runImageAnimation(
    Jugador,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b b 4 4 b b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b b 4 4 b b f e f f . 
        . f e e 4 b b d d b b 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b b 4 4 b b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    true
    )
    scene.cameraFollowSprite(Jugador)
    tiles.setCurrentTilemap(tilemap`nivel4`)
    controller.moveSprite(Jugador, 112, 122)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico6`, function (sprite, location) {
    game.gameOver(false)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral2, function (sprite, location) {
    music.play(pianoRoll.createSong(hex`00ba000408060301001c000c960064006d019001000478002c010000640032000000000a06000606008000a000010002001c0001dc00690000045e0100040000000000000000000005640001040004540010002000011810002000010c20003000011420003000010830004100011130004100010550006000011950006000010d6000700001156000700001097000800001127000800001068000a00001118000a000010503001c00010a006400f4016400000400000000000000000000000000050000047a0100000800011400000800011808001000010d08001000011110001800011410001800011818002000010d18002000011120002800011420002800011828003000010d28003000011130003800011430003800011838004000010d38004000011140004800011940004800011d48005000011248005000011650005800011950005800011d58006000011258006000011660006800011960006800012460006800011d68007000011268007000011570007800011870007800012278007e00011278007e00011578007e00011e80009e00010d80009e00011180009e00011480009e00011880009e00011d9e009f00010c9e009f00011c9f00a100010b9f00a100011ba100a200010aa100a200011aa200a3000109a200a3000119a300a5000108a300a5000118a500a6000107a500a6000117a600a7000106a600a7000116a800a9000105a800a9000115a900aa000104a900aa000114aa00ac000103aa00ac000113ac00ad000102ac00ad000112ad00ae000101ad00ae0001110150027f7f7f7f48487f7f43437f7f7f7f033b3b3d3d3e3e3b3b4d4d3f3f4f4f36365858363643432d2d4f4f4f343446465b5b5b4d4d4d4d4d5353343434344343434341413a3a34344343434341413a3a`), music.PlaybackMode.InBackground)
    game.showLongText("Te moriste por el veneno de las anemonas, inténtalo de nuevo", DialogLayout.Bottom)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico22`, function (sprite, location) {
    scene.cameraShake(8, 500)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`miMosaico14`)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico11`, function (sprite, location) {
    info.changeScoreBy(2)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    tiles.setTileAt(location, assets.tile`miMosaico10`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico23`, function (sprite, location) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    tiles.setTileAt(location, assets.tile`miMosaico24`)
})
info.onScore(114, function () {
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.InBackground)
    tiles.setCurrentTilemap(tilemap`nivel0`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    game.showLongText("Click en A para cargar texturas", DialogLayout.Full)
    pause(500)
    game.showLongText("Has pasado el nivel 6", DialogLayout.Full)
    tiles.setCurrentTilemap(tilemap`nivel14`)
    Jugador = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Cloud), 500)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Cloud), 500)
    animation.runImageAnimation(
    Jugador,
    [img`
        9 9 9 9 9 9 f f f f f f 9 9 9 9 
        9 9 9 9 f f e e e e f 2 f 9 9 9 
        9 9 9 f f e e e e f 2 2 2 f 9 9 
        9 9 9 f e e e f f e e e e f 9 9 
        9 9 9 f f f f e e 2 2 2 2 e f 9 
        9 9 9 f e 2 2 2 f f f f e 2 f 9 
        9 9 f f f f f f f e e e f f f 9 
        9 9 f f e 4 4 e b f 4 4 e e f 9 
        9 9 f e e 4 d 4 1 f d d e f 9 9 
        9 9 9 f e e e 4 d d d d f 9 9 9 
        9 9 9 9 f f e e 4 4 4 e f 1 9 9 
        9 9 9 9 9 4 d d e 2 2 2 f 9 9 9 
        9 9 1 1 1 e d d e 2 2 2 f 9 9 9 
        9 9 9 9 9 f e e f 4 5 5 f 9 9 9 
        9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 f f f f f f 9 9 9 9 
        9 9 9 9 f f e e e e f 2 f 9 9 9 
        9 9 9 f f e e e e f 2 2 2 f 9 9 
        9 9 9 f e e e f f e e e e f 9 9 
        9 9 9 f f f f e e 2 2 2 2 e f 9 
        9 9 9 f e 2 2 2 f f f f e 2 f 9 
        9 9 f f f f f f f e e e f f f 9 
        9 9 f f e 4 4 e b f 4 4 e e f 9 
        9 9 f e e 4 d 4 1 f d d e f 9 9 
        9 9 9 f e e e e e d d d f 1 9 9 
        9 9 1 1 1 f 4 d d e 4 e f 9 9 9 
        9 9 9 9 9 f e d d e 2 2 f 9 9 9 
        9 9 9 9 f f f e e f 5 5 f f 9 9 
        9 9 9 9 1 1 1 1 1 1 1 1 1 1 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 f f f f f f 9 9 9 9 
        9 9 9 9 f f e e e e f 2 f 9 9 9 
        9 9 9 f f e e e e f 2 2 2 f 9 9 
        9 9 9 f e e e f f e e e e f 9 9 
        9 9 9 f f f f e e 2 2 2 2 e f 9 
        9 9 9 f e 2 2 2 f f f f e 2 f 9 
        9 9 f f f f f f f e e e f f f 9 
        9 9 f f e 4 4 e b f 4 4 e e f 9 
        9 9 f e e 4 d 4 1 f d d e f 9 9 
        9 9 9 f e e e 4 d d d d f 9 9 9 
        9 9 9 9 f f e e 4 4 4 e f 9 9 9 
        9 9 9 9 9 4 d d e 2 2 2 f 1 1 9 
        9 9 9 1 1 e d d e 2 2 2 f 9 9 9 
        9 9 9 9 9 f e e f 4 5 5 f 9 9 9 
        9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `],
    500,
    true
    )
    scene.cameraFollowSprite(Jugador)
    controller.moveSprite(Jugador, 0, 100)
    spriteutils.setVelocityAtAngle(Jugador, 0, 100)
    Jugador.setPosition(5, 60)
})
info.onScore(10, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.InBackground)
    tiles.setCurrentTilemap(tilemap`nivel2`)
    game.showLongText("Click en A para cargar texturas", DialogLayout.Center)
    pause(500)
    game.showLongText("Haz finalizado el nivel 1, sigue así ;)", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`nivel3`)
    Jugador = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Explosion), 1000)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Explosion), 1000)
    controller.moveSprite(Jugador, 0, 112)
    animation.runImageAnimation(
    Jugador,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b b 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b b 4 4 e e f . 
        . . f e e 4 d 4 b b d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b b 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
    spriteutils.setVelocityAtAngle(Jugador, 0, 67)
    Jugador.setPosition(0, 60)
    scene.cameraFollowSprite(Jugador)
})
info.onScore(100, function () {
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.InBackground)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`nivel0`)
    game.showLongText("Click en A para cargar texturas", DialogLayout.Center)
    pause(500)
    game.showLongText("Haz finalizado el nivel 4, sobrevive al BOSS", DialogLayout.Bottom)
    Jugador = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Cloud), 100)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Cloud), 100)
    animation.runImageAnimation(
    Jugador,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b b 4 4 b b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b b 4 4 b b f e f f . 
        . f e e 4 b b d d b b 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b b 4 4 b b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    true
    )
    tiles.setCurrentTilemap(tilemap`nivel11`)
    controller.moveSprite(Jugador, 150, 150)
    music.play(pianoRoll.createSong(hex`00ec000408180601001c000f05001202c102c20100040500280000006400280003140006020004080100010401011904010801011808010c0101190c011001011b10011401011918011d01011820012801011928012c0101143001400101104001490101154c014d01011550015501011558015c01011460017101011580018401011384018801011288018c0101138c019001011490019501011398019d010112a001a8010113a801ac01010fb001c0010113c001c8010114cc01ce010114d001d4010114d801dc010113e001f0010114f001f101010f00020b02011910021902011420022a02011030023b02010d40025402010e6002630201156402680201156c027102011574027602011578027e02011580028c02011990029a020114a002aa020110b002bb02010dc002de02010802001c00100500640000041e000004000000000000000000000000000a040005d40100000400011904000800011808000c0001190c001000011b10001400011918001d00011820002800011928002c0001143000400001104000490001154c004d00011550005500011558005c00011460007100011580008400011384008800011288008c0001138c009000011490009500011398009d000112a000a8000113a800ac00010fb000c0000107c000c8000114cc00ce000114d000d4000114d800dc000113e000f0000114f000f100010f00010401011904010801011808010c0101190c011001011b10011301011918011d01011820012801011928012b0101143001400101104001490101154c014d01011550015501011558015b01011460017101011580018401011384018801011288018b0101138c019001011490019401011398019d010112a001a8010113a801ac01010fb001c0010113c001c8010114cc01cd010114d001d4010114d801dc010113e001f0010114f001f101010f00020b02011910021902011420022a02011030023b02010d40025402010e6002630201156402680201156c027102011574027602011578027e02011580028c02011990029a020114a002aa020110b002bb02010dc002de020108e002e3020115e402e9020114ec02f2020114f402f7020114f802ff02011803001c000f0a006400f4010a0000040000000000000000000000000000000004f80100000700010d08001000010d18001c00010d20003100010d38003d00010d40004500010948005000010958005c00010960006c00011070007400011078007c0001157c008000011480008600011388008f00011398009b000113a000ad000113b800bb000113c000c3000114c800d1000114d800db000114e000eb000114f000f4000114f400f7000112f800fc000110fc000001010f00010501010d08011101010d18011b01010d20012501010d28012c01010830013401010d38013a01010d48015001011058015a01011060016b01011070017401010f74017801011078017b0101127c018001011480018401011388019101011398019b010113a001ab010113b001b7010113b801bb010115c001c4010114c801d0010114d801db010114e001e4010114e401e7010118e801ec010119ec01f001011bf001f301011cf401f801011ef801fc01011ffc010002012000020802011937023902010239023b0201073b023c02010d3c023d02010e3d023e0201133e023f0201143f024002011940024f02011a76027802010278027a0201077a027b02010d7b027c02010e7b027c0201137c027d0201187d027e02011e7e027f02011e7e027f02011f7f028f020124c002d9020120e002e4020120e402e802011ee802ec02011cec02f002011bf002f1020119f402f6020118f802fc020114fc02fe02011304001c00020a006400f401640000040000000000000000000000000000000003100800000200010d00000200011000000200011400000200011904000600010d04000600011004000600011404000600011908001200010d08001200011008001200011408001200011918001d00010d18001d00011018001d00011418001d00011920002900010d2000290001102000290001142000290001192c002e00010d2c002e0001102c002e0001142c002e00011930003200010d30003200011030003200011430003200011934003600010d34003600011034003600011434003600011938003e00010d38003e00011038003e00011438003e00011940004200010940004200010d40004200011040004200011544004600010944004600011044004600011544004600010d48005100010948005100010d48005100011548005100011058005d00010958005d00010d58005d00011558005d00011960006900010960006900010d6000690001156000690001196c006f0001096c006f00010d6c006f0001156c006f00011970007200010970007200010d70007200011570007200011974007600010974007600010d74007600011574007600011978007d00010978007d00010d78007d00011978007d00011580008200010780008200010d80008200011380008200011984008600010784008600010d84008600011384008600011988009100010788009100010d88009100011388009100011998009d00010798009d00010d98009d00011998009d000113a000a9000107a000a900010da000a9000113a000a9000119ac00ae000107ac00ae00010dac00ae000113ac00ae000119b000b3000107b000b300010db000b3000113b000b3000119b400b6000107b400b600010db400b6000113b400b6000119b800be000107b800be00010db800be000113b800be000119c000c2000108c000c200010cc000c2000118c000c2000114c400c6000108c400c600010cc400c6000114c400c6000118c800d1000108c800d100010cc800d1000118c800d1000114d800dc000108d800dc00010cd800dc000114d800dc000118d800dc00011be000e8000108e000e800010ce000e800011be000e8000114e000e8000118ec00ee000108ec00ee000114ec00ee000118ec00ee00011bec00ee00010cf000f3000108f000f300010cf000f3000114f000f3000118f000f300011bf400f6000108f400f600010cf400f6000114f400f6000118f400f600011bf800ff000108f800ff00010cf800ff00011bf800ff000114f800ff00011800010201010d00010201011400010201011900010201011c04010601010d04010601011404010601011904010601011c08011201010d08011201011408011201011908011201011c18011c01010d18011c01011418011c01011918011c01011c20012901010d20012901011420012901011920012901011c2c012e01010d2c012e0101142c012e0101192c012e01011c30013201010d30013201011430013201011930013201011c34013601010d34013601011434013601011934013601011c38013e01010d38013e01011438013e01011938013e01011c40014201010940014201010d40014201011040014201011c40014201011544014601010944014601011044014601011544014601011c44014601010d48015101010948015101010d48015101011548015101011048015101011c58015d01010958015d01010d58015d01011558015d01011958015d01011c60016901010960016901010d60016901011560016901011c6001690101196c016e0101096c016e01010d6c016e01011c6c016e0101156c016e01011970017201010970017201010d70017201011570017201011c70017201011974017601010974017601010d74017601011574017601011974017601011c78017e01010978017e01010d78017e01011978017e01011578017e01011c80018401010780018401010d80018401011380018401011980018401011f84018601010784018601010d84018601011384018601011988018c01010788018c01010d88018c01011388018c0101198c018e01011f90019201011f94019601011f98019d01010798019d01010d98019d01011998019d01011398019d01011fa001a9010107a001a901010da001a9010113a001a9010119a001a901011fac01ae010107ac01ae01010dac01ae010113ac01ae010119ac01ae01011fb001b2010107b001b201010db001b201011fb001b2010113b001b2010119b401b6010107b401b601010db401b6010113b401b6010119b401b601011fb801be010107b801be01010db801be010113b801be010119b801be01011fc001c4010108c001c401010cc001c4010118c001c4010114c001c4010120c401c6010108c401c601010cc401c6010114c401c6010118c801cc010108c801cc01010cc801cc010118c801cc010114cc01ce010120d001d2010120d401d6010120d801dd010108d801dd01010cd801dd010114d801dd010118d801dd01011bd801dd010120e001e9010108e001e901010ce001e901011be001e9010114e001e9010118e001e9010120ec01ee010108ec01ee010114ec01ee010118ec01ee01011bec01ee010120ec01ee01010cf001f2010108f001f201010cf001f2010114f001f2010118f001f2010119f001f201011bf001f2010120f401f6010108f401f601010cf401f6010114f401f6010118f401f601011bf401f601011ef801ff010108f801ff01010cf801ff010114f801ff01011bf801ff01011800020b02010d00020b02011900020b02011440024e02010e40024e02011a40024e02011580028c02010d80028c02011980028c020114c002e0020103c002e0020108c002e002010fc002e0020114e002fe020118e002fe02011b05001c000e050046006603320000040a002d0000006400140001320002010004d20000000100010f00000100010a0100020001056000680001096c006e00010970007400010978007d000108800091000107e000e8000114ec00ef000112f000f4000110f800fd00010f00011101010d6001690101156c016d01011570017601011578017c010114800190010113b901ba010113c001c8010114cc01cd010114d001d4010114e001e7010114ec01ef010114f001f5010114f801fb01011800020e02011940025a02011a5a025c0201155c025d0201105d025e02010b5e0260020106800293020119bf02ff020114ff020003010f06010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800420600000200010a00000200011300000200010300000200010900000200011104000800010304000800011108000b00010908000b0001110c000e00010910001600010710001600010918001a00010918001a0001111c00200001031c002000010920002500010920002500011128002b00010328002b0001092c002e0001092c002e00011130003400010730003400010930003400011134003600011138003a00010938003a00010a3b003c00010a3c003d0001093d003f00010a40004400010340004400011140004400010940004400010a44004800010344004800011148004c00010948004c0001114c004e00010950005600010750005600010958005a00010958005a0001115c00600001035c006000010960006500010960006500011168006c00010368006c0001096c006e0001096c006e00011170007400010770007400010970007400011174007600011178007b00010978007b0001117c007e00010980008300010380008300010980008300010a80008300011184008800010384008800011188008b00010988008b0001118c008e00010990009500010790009500010998009a00010998009a0001119c00a00001039c00a0000109a000a5000109a000a5000111a800ab000103a800ab000109ac00ae000109ac00ae000111b000b4000107b000b4000109b000b4000111b400b6000111b800ba00010ab800ba000109b800ba000111ba00bb00010abc00bd000109bd00bf00010ac000c400010ac000c4000103c000c4000111c000c4000109c400c8000103c400c8000111c800cb000109c800cb000111cc00ce000109d000d5000107d000d5000109d800db000109d800db000111dc00df000103dc00df000109e000e5000109e000e5000111e800eb000107e800eb000109ec00ee000109ec00ee000111f000f4000107f000f4000109f000f4000111f400f6000111f800fb000109f800fb000111fc000001010900010201010300010201010900010201011104010801010304010801011108010c01010908010c01011108010c0101160c010e01010910011501010710011501010918011a01010918011a01011118011a0101161c011f0101031c011f01010920012501010920012501011128012c01010328012c01010928012c0101162c012e0101092c012e01011130013401010730013401010930013401011134013601011138013c01010938013c0101163c013e01010940014201010340014201011140014201010944014801010344014801011148014c01010948014c01011148014c0101164c014e01010950015601010750015601010958015c01010958015c01011158015c0101165c015f0101035c015f01010960016501010960016501011168016c01010368016c01010968016c0101166c016e0101096c016e01011170017401010770017401010970017401011174017601011178017c01010978017c01011178017c0101167c017e01010980018201010380018201010980018201011184018801010384018801011188018c01010988018c01011188018c0101168c018e01010990019601010790019601010998019c01010998019c01011198019c0101169c019f0101039c019f010109a001a5010109a001a5010111a801ac010103a801ac010109a801ac010116ac01ae010109ac01ae010111b001b4010107b001b4010109b001b4010111b401b6010111b801bc010109b801bc010111b801bc010116bc01be010109c001c2010103c001c2010109c001c2010111c401c6010111c801cc010107c801cc010109c801cc010111c801cc010116cc01cf010103cc01cf010109d001d3010109d401d8010107d401d8010111d401d8010116d801dc010103d801dc010109dc01de010109e001e7010111e801ec010103e801ec010109e801ec010116ec01ee010109ec01ee010111f001f3010107f001f3010109f001f3010111f401f7010108f401f7010111f801fb010108f801fb010109f801fb010111f801fb010116fc0100020108fc01000201090002050201030002050201140002050201164002440201034002440201134002440201156002610201076402680201076c026f02010774027602010778027c020107800285020103800285020113800285020114800285020116c002c6020103c002c6020113c002c6020115e002e2020107e402e7020107ec02ef020107f402f6020107f802fc0201070159494c28493545493a2c2e3e3939484a433b4e43493c163c2c373a3516444233355576585e594650483c55590259494c28493545493a2c2e3e3939484a433b4e43493c163c2c373a351659494c28493545493a2c2e3e3939484a433b4e43493c163c2c373a3516444233355576585e594650483c55597f47413e4e03524552613749473a4030335057534e4755494b4047505a3f475e5358513e52465e4b544940434e5252595e464c57532d474d53354c42372e262e3335323a3933330e363f2a2a39384343415f523c374d2e3d464904404040403a3a3a3a535353537171717146464646383838384343434347474747727272724b4b4b4b464646464c4c4c4c535353534f4f4f4f444444444040404032323232343434345b5b5b5b6f6f6f6f555555556a6a6a6a696969693c3c3c3c61616161404040403f3f3f3f666666664a4a4a4a494949494d4d4d4d4d45454545454f4f4f4f4f434343434332323232324545454545404040403a3a3a3a5353535371717171636363633838383843434343474747474c4c4c4c4b4b4b4b4b4646464646535353535353535353534f4f4f4f4f4444444444404040404032323232323f3f3f3f3f5b5b5b5b5b6f6f6f6f5555555543454a6a6a6a6a6a69696969693c3c3c3c3c616161616140404040403f3f3f3f3f66666666664a4a4a4a4949494943454a4d4d4d4d4d4d4545454545454f4f4f4f4f4f4343434343434332323232323252525252524444444848484646464343434335350551512e4237313f3e452c46393447302e37441e4a2834323b463c3e423f3d4242577f51066f6f6f6f6f7f7f5c5c437f7f6b6b7f7f5c5c7f7f5c5c7f7f7f5c616124414b7f7f7f7f7f7f5c5c477f7f6a6a7f7f5c5c7f7f5c5c7f7f7f5c6e6e4f7f7f7f7f7f7f6464467f7f63637f7f5c5c7f7f5c5c7f7f7f5c5c5c5c2a4d437f7f7f7f7f7f5c5c3e7f7f5c5c7f7f5c5c7f7f4c4c7f7f7f5c5c5c3b7f7f7f7f7f5c5c5c437f7f6b6b6b7f7f5c5c7f7f7f5c5c7f7f7f5c6161417f7f7f7f7f5c5c5c477f7f6a6a6a7f7f5c5c7f7f7f5c5c7f7f7f5c6e6e6e4f7f7f7f7f7f646464467f7f6363637f7f5c5c7f7f7f5c5c7f7f7f5c6363634d7f7f7f5c7f7f7f7f7f7f497f7f7f7f7f4f5c7f7f7f5c5c7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f`), music.PlaybackMode.InBackground)
    titoelmounstrito = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `, SpriteKind.Enemy)
    titoelmounstrito.follow(Jugador, 100)
    animation.runImageAnimation(
    titoelmounstrito,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c c b 5 5 b d d d c . 
        . . . . . c d 5 5 b b c c c . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 5 5 5 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c b 5 5 b d d d c c . 
        . . . . c d 5 5 b b c c c . . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 5 5 5 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c . 
        . c c c c c b b d d d d d d c c 
        . . . c c 5 5 b 5 5 d d d d d c 
        . . . . c b 5 5 b b c c c c c c 
        . . . . c c c c c c . . . . . . 
        . . . . . c b b b c . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c c 3 3 b b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c c 
        . . . c b c c b 5 5 b c c c . . 
        . . . c c c d 5 5 b c . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d c c . 
        . . c b b c c c 5 5 b c c . . . 
        . . c c c c c d 5 5 c . . . . . 
        `],
    500,
    true
    )
    tiles.placeOnRandomTile(Jugador, assets.tile`miMosaico21`)
    scene.cameraFollowSprite(Jugador)
    tiles.placeOnRandomTile(titoelmounstrito, assets.tile`miMosaico19`)
})
info.onScore(80, function () {
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.InBackground)
    tiles.setCurrentTilemap(tilemap`nivel2`)
    game.showLongText("Click en A para cargar texturas", DialogLayout.Center)
    pause(500)
    game.showLongText("Haz finalizado el nivel 3, sigue así ;)", DialogLayout.Bottom)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    Jugador = sprites.create(img`
        5555555885555555
        .......55.......
        .......55.......
        .......55.......
        ......ffff......
        ....fff22fff....
        ...fff2222fff...
        ..fffeeeeeefff..
        ..ffe222222eef..
        ..fe2ffffff2ef..
        ..ffffeeeeffff..
        .ffefbf44fbfeff.
        .fee41fddf14eef.
        ..feeddddddeef..
        ...fee4444eef...
        ..e4f222222f4e..
        ..4df222222fd4..
        ..44f445544f44..
        .....ffffff.....
        .....ff..ff.....
        `, SpriteKind.Player)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Cloud), 100)
    extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Cloud), 100)
    animation.runImageAnimation(
    Jugador,
    [img`
        .55555588555555.
        .......55.......
        .......55.......
        .......55.......
        ......ffff......
        ....fff22fff....
        ...fff2222fff...
        ..fffeeeeeefff..
        ..ffe222222eef..
        ..fe2ffffff2ef..
        ..ffffeeeeffff..
        .ffefbb44bbbeff.
        .fee41fddf14eef.
        ..feeddddddeef..
        ...fee4444eef...
        ..e4f222222f4e..
        ..4df222222fd4..
        ..44f445544f44..
        .....ffffff.....
        .....ff..ff.....
        `,img`
        ..555558855555..
        .......55.......
        .......55.......
        .......55.......
        ......ffff......
        ....fff22fff....
        ...fff2222fff...
        ..fffeeeeeefff..
        ..ffe222222eef..
        ..fe2ffffff2ef..
        ..ffffeeeeffff..
        .ffefbb44bbfeff.
        .fee4bbddbb4eef.
        ..feeddddddeef..
        ...fee4444eef...
        ..e4f222222f4e..
        ..4df222222fd4..
        ..44f445544f44..
        .....ffffff.....
        .....ff..ff.....
        `,img`
        ...5555885555...
        .......55.......
        .......55.......
        .......55.......
        ......ffff......
        ....fff22fff....
        ...fff2222fff...
        ..fffeeeeeefff..
        ..ffe222222eef..
        ..fe2ffffff2ef..
        ..ffffeeeeffff..
        .ffefbb44bbfeff.
        .fee41fddf14eef.
        ..feeddddddeef..
        ...fee4444eef...
        ..e4f222222f4e..
        ..4df222222fd4..
        ..44f445544f44..
        .....ffffff.....
        .....ff..ff.....
        `,img`
        ....55588555....
        .......55.......
        .......55.......
        .......55.......
        ......ffff......
        ....fff22fff....
        ...fff2222fff...
        ..fffeeeeeefff..
        ..ffe222222eef..
        ..fe2ffffff2ef..
        ..ffffeeeeffff..
        .ffefbf44fbfeff.
        .fee41fddf14eef.
        ..feeddddddeef..
        ...fee4444eef...
        ..e4f222222f4e..
        ..4df222222fd4..
        ..44f445544f44..
        .....ffffff.....
        .....ff..ff.....
        `,img`
        .....558855.....
        .......55.......
        .......55.......
        .......55.......
        ......ffff......
        ....fff22fff....
        ...fff2222fff...
        ..fffeeeeeefff..
        ..ffe222222eef..
        ..fe2ffffff2ef..
        ..ffffeeeeffff..
        .ffefbb44bbfeff.
        .fee41fddf14eef.
        ..feeddddddeef..
        ...fee4444eef...
        ..e4f222222f4e..
        ..4df222222fd4..
        ..44f445544f44..
        .....ffffff.....
        .....ff..ff.....
        `,img`
        ......5885......
        .......55.......
        .......55.......
        .......55.......
        ......ffff......
        ....fff22fff....
        ...fff2222fff...
        ..fffeeeeeefff..
        ..ffe222222eef..
        ..fe2ffffff2ef..
        ..ffffeeeeffff..
        .ffefbb44bbfeff.
        .fee4bbddbb4eef.
        ..feeddddddeef..
        ...fee4444eef...
        ..e4f222222f4e..
        ..4df222222fd4..
        ..44f445544f44..
        .....ffffff.....
        .....ff..ff.....
        `],
    200,
    true
    )
    tiles.setCurrentTilemap(tilemap`nivel10`)
    scene.cameraFollowSprite(Jugador)
    tiles.placeOnRandomTile(Jugador, assets.tile`miMosaico31`)
    controller.moveSprite(Jugador, 100, 0)
    Jugador.setVelocity(0, -67)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico9`, function (sprite, location) {
    info.changeLifeBy(-2)
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
    tiles.setTileAt(location, assets.tile`miMosaico5`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    music.play(pianoRoll.createSong(hex`00ba000408060301001c000c960064006d019001000478002c010000640032000000000a06000606008000a000010002001c0001dc00690000045e0100040000000000000000000005640001040004540010002000011810002000010c20003000011420003000010830004100011130004100010550006000011950006000010d6000700001156000700001097000800001127000800001068000a00001118000a000010503001c00010a006400f4016400000400000000000000000000000000050000047a0100000800011400000800011808001000010d08001000011110001800011410001800011818002000010d18002000011120002800011420002800011828003000010d28003000011130003800011430003800011838004000010d38004000011140004800011940004800011d48005000011248005000011650005800011950005800011d58006000011258006000011660006800011960006800012460006800011d68007000011268007000011570007800011870007800012278007e00011278007e00011578007e00011e80009e00010d80009e00011180009e00011480009e00011880009e00011d9e009f00010c9e009f00011c9f00a100010b9f00a100011ba100a200010aa100a200011aa200a3000109a200a3000119a300a5000108a300a5000118a500a6000107a500a6000117a600a7000106a600a7000116a800a9000105a800a9000115a900aa000104a900aa000114aa00ac000103aa00ac000113ac00ad000102ac00ad000112ad00ae000101ad00ae0001110150027f7f7f7f48487f7f43437f7f7f7f033b3b3d3d3e3e3b3b4d4d3f3f4f4f36365858363643432d2d4f4f4f343446465b5b5b4d4d4d4d4d5353343434344343434341413a3a34344343434341413a3a`), music.PlaybackMode.InBackground)
    game.showLongText("Te moriste por el veneno de las anemonas, inténtalo de nuevo", DialogLayout.Bottom)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile15`, function (sprite, location) {
    info.changeScoreBy(2)
    tiles.setTileAt(location, sprites.castle.tileGrass1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico8`, function (sprite, location) {
    info.changeScoreBy(2)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    tiles.setTileAt(location, assets.tile`miMosaico7`)
})
info.onLifeZero(function () {
    music.play(pianoRoll.createSong(hex`00ba000408060301001c000c960064006d019001000478002c010000640032000000000a06000606008000a000010002001c0001dc00690000045e0100040000000000000000000005640001040004540010002000011810002000010c20003000011420003000010830004100011130004100010550006000011950006000010d6000700001156000700001097000800001127000800001068000a00001118000a000010503001c00010a006400f4016400000400000000000000000000000000050000047a0100000800011400000800011808001000010d08001000011110001800011410001800011818002000010d18002000011120002800011420002800011828003000010d28003000011130003800011430003800011838004000010d38004000011140004800011940004800011d48005000011248005000011650005800011950005800011d58006000011258006000011660006800011960006800012460006800011d68007000011268007000011570007800011870007800012278007e00011278007e00011578007e00011e80009e00010d80009e00011180009e00011480009e00011880009e00011d9e009f00010c9e009f00011c9f00a100010b9f00a100011ba100a200010aa100a200011aa200a3000109a200a3000119a300a5000108a300a5000118a500a6000107a500a6000117a600a7000106a600a7000116a800a9000105a800a9000115a900aa000104a900aa000114aa00ac000103aa00ac000113ac00ad000102ac00ad000112ad00ae000101ad00ae0001110150027f7f7f7f48487f7f43437f7f7f7f033b3b3d3d3e3e3b3b4d4d3f3f4f4f36365858363643432d2d4f4f4f343446465b5b5b4d4d4d4d4d5353343434344343434341413a3a34344343434341413a3a`), music.PlaybackMode.InBackground)
    pause(5000)
    game.gameOver(false)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico32`, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tilePath5)
    game.showLongText("Ganaste", DialogLayout.Bottom)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel2, function (sprite, location) {
    info.changeScoreBy(2)
    tiles.setCurrentTilemap(tilemap`nivel7`)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico0`, function (sprite, location) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    tiles.setTileAt(location, assets.tile`miMosaico`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico12`, function (sprite, location) {
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
    tiles.setTileAt(location, assets.tile`miMosaico5`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral1, function (sprite, location) {
    music.play(pianoRoll.createSong(hex`00ba000408060301001c000c960064006d019001000478002c010000640032000000000a06000606008000a000010002001c0001dc00690000045e0100040000000000000000000005640001040004540010002000011810002000010c20003000011420003000010830004100011130004100010550006000011950006000010d6000700001156000700001097000800001127000800001068000a00001118000a000010503001c00010a006400f4016400000400000000000000000000000000050000047a0100000800011400000800011808001000010d08001000011110001800011410001800011818002000010d18002000011120002800011420002800011828003000010d28003000011130003800011430003800011838004000010d38004000011140004800011940004800011d48005000011248005000011650005800011950005800011d58006000011258006000011660006800011960006800012460006800011d68007000011268007000011570007800011870007800012278007e00011278007e00011578007e00011e80009e00010d80009e00011180009e00011480009e00011880009e00011d9e009f00010c9e009f00011c9f00a100010b9f00a100011ba100a200010aa100a200011aa200a3000109a200a3000119a300a5000108a300a5000118a500a6000107a500a6000117a600a7000106a600a7000116a800a9000105a800a9000115a900aa000104a900aa000114aa00ac000103aa00ac000113ac00ad000102ac00ad000112ad00ae000101ad00ae0001110150027f7f7f7f48487f7f43437f7f7f7f033b3b3d3d3e3e3b3b4d4d3f3f4f4f36365858363643432d2d4f4f4f343446465b5b5b4d4d4d4d4d5353343434344343434341413a3a34344343434341413a3a`), music.PlaybackMode.InBackground)
    game.showLongText("Te moriste por el veneno de las anemonas, inténtalo de nuevo", DialogLayout.Bottom)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel4, function (sprite, location) {
    scene.cameraShake(8, 200)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`miMosaico14`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico2`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`miMosaico`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel1, function (sprite, location) {
    info.changeScoreBy(2)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    tiles.setCurrentTilemap(tilemap`nivel8`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico27`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    tiles.setCurrentTilemap(tilemap`nivel27`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel5, function (sprite, location) {
    scene.cameraShake(8, 500)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    tiles.setTileAt(location, assets.tile`miMosaico14`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico28`, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    tiles.setCurrentTilemap(tilemap`nivel34`)
})
info.onScore(136, function () {
    game.showLongText("Construye una casa para vivir", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`nivel26`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.jewels.jewel3, function (sprite, location) {
    info.changeScoreBy(2)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(titoelmounstrito, assets.tile`miMosaico19`)
})
let titoelmounstrito: Sprite = null
let Jugador: Sprite = null
let Salva_el_planetas_titulo = sprites.create(img`
    ..........................................................................................................................................................................
    ......66666.....................666.......................................................................................................................................
    ....6666666666..................666.......................................................................................................................................
    ....66666666666.................666.......................................................................................................................................
    ....66666666666.................666.......................................................................................................................................
    ....666....6666.................666.......................................................................................................................................
    ....666.....6666................666.......................................................................................................................................
    ....666.....6666................666.......................................................................................................................................
    ....6666....6666................6666......................................................................................................................................
    ....66666....666................6666......................................................................................................................................
    .....66666......................6666......................................................................................................................................
    .....6666666.....................666......................................................................................................................................
    ......6666666.....666666666......666.............666......................................................................................................................
    .......6666666...66666666666.....666....666......666.....6666666..........................................................................................................
    .........666666..66666666666.....666....666......666...6666666666.........................................................................................................
    ..........66666.66666...6666.....666....666......666...6666666666.........................................................................................................
    ...........6666.6666....6666.....666....6666....6666..666666.6666.........................................................................................................
    ...666......666.6666...666666....666....6666....6666..6666...66666........................................................................................................
    ...6666....6666.6666666666666....666.....6666..66666..666....66666........................................................................................................
    ...666666666666..666666666666....666.....6666666666...6666..666666........................................................................................................
    ...666666666666..6666666666666...666.....6666666666...6666666666666.......................................................................................................
    ....6666666666.....66666..6666...666......66666666....6666666666666.......................................................................................................
    ..........................6666.............666666......66666666.666.......................................................................................................
    ...........................666..........................666666............................................................................................................
    ..........................................................................................................................................................................
    .................................................666......................................................................................................................
    .................................................666.................................666...........................................666....................................
    ......................................6666666....666.................................666...........................................666....................................
    .....................................666666666...666.................6666666666......666...........................................666....................................
    ....................................6666666666...666...............66666666666666....666...........................................666....................................
    ....................................66666.6666...666...............666666666666666...666...........................................666....................................
    ....................................6666..6666...666...............6666.....6666666..666...........................................666....................................
    ....................................6666666666...666...............666........66666..666...........................................666....................................
    ....................................666666666....666...............666.........6666..666...........................................666....................................
    ....................................66666666.....666...............666..........666..666...........................................666....................................
    ....................................66666........666...............666.........6666..666...........................................6666.666...............................
    ....................................66666666666..666...............666.......666666..666.........................................6666666666.......66666666................
    .....................................6666666666..6666..............666.....66666666..666....666666....................666666.....6666666666......66666666666..............
    ......................................666666666..6666..............666..6666666666...666...66666666.....66666666.....66666666....6666666666......66666666666..............
    ........................................6666666..6666..............6666666666666.....666..6666666666....6666666666...666666666......666.........66666...6666..............
    ...................................................................6666666666........666..66666666666...66666666666.6666666666......666.........6666....6666..............
    ...................................................................66666666..........666..6666...6666...6666..66666.6666...666......666.........666....66666..............
    ...................................................................666...............666.6666....66666..6666...6666.6666...666......666.....666.6666...66666..............
    ...................................................................666...............666.6666...666666..6666....66666666666666......666....6666.6666..666666..............
    ...................................................................666...............666.6666666666666..666.....66666666666666......666....6666.6666666666666.............
    ...................................................................666...............666.6666666666666..666......6666666666666......6666..66666..666666666666.............
    ...................................................................666...............666.66666666666666.666......66666666...........6666666666...666666666666.............
    ...................................................................666...............666...666666..6666.666......666.66666666666....666666666.....66666...666.............
    ....................................................................................................666.666......666.66666666666.....6666666..............666.............
    ......................................................................................................................6666666666..........................................
    `, SpriteKind.Player)
Salva_el_planetas_titulo.setPosition(88, 30)
let Salva_el_planeta_titulo = sprites.create(img`
    ..........................................................................................................................................................................
    ......88888.....................888.......................................................................................................................................
    ....8888888888..................888.......................................................................................................................................
    ....88888888888.................888.......................................................................................................................................
    ....88888888888.................888.......................................................................................................................................
    ....888....8888.................888.......................................................................................................................................
    ....888.....8888................888.......................................................................................................................................
    ....888.....8888................888.......................................................................................................................................
    ....8888....8888................8888......................................................................................................................................
    ....88888....888................8888......................................................................................................................................
    .....88888......................8888......................................................................................................................................
    .....8888888.....................888......................................................................................................................................
    ......8888888.....888888888......888.............888......................................................................................................................
    .......8888888...88888888888.....888....888......888.....8888888..........................................................................................................
    .........888888..88888888888.....888....888......888...8888888888.........................................................................................................
    ..........88888.88888...8888.....888....888......888...8888888888.........................................................................................................
    ...........8888.8888....8888.....888....8888....8888..888888.8888.........................................................................................................
    ...888......888.8888...888888....888....8888....8888..8888...88888........................................................................................................
    ...8888....8888.8888888888888....888.....8888..88888..888....88888........................................................................................................
    ...888888888888..888888888888....888.....8888888888...8888..888888........................................................................................................
    ...888888888888..8888888888888...888.....8888888888...8888888888888.......................................................................................................
    ....8888888888.....88888..8888...888......88888888....8888888888888.......................................................................................................
    ..........................8888.............888888......88888888.888.......................................................................................................
    ...........................888..........................888888............................................................................................................
    ..........................................................................................................................................................................
    .................................................888......................................................................................................................
    .................................................888.................................888...........................................888....................................
    ......................................8888888....888.................................888...........................................888....................................
    .....................................888888888...888.................8888888888......888...........................................888....................................
    ....................................8888888888...888...............88888888888888....888...........................................888....................................
    ....................................88888.8888...888...............888888888888888...888...........................................888....................................
    ....................................8888..8888...888...............8888.....8888888..888...........................................888....................................
    ....................................8888888888...888...............888........88888..888...........................................888....................................
    ....................................888888888....888...............888.........8888..888...........................................888....................................
    ....................................88888888.....888...............888..........888..888...........................................888....................................
    ....................................88888........888...............888.........8888..888...........................................8888.888...............................
    ....................................88888888888..888...............888.......888888..888.........................................8888888888.......88888888................
    .....................................8888888888..8888..............888.....88888888..888....888888....................888888.....8888888888......88888888888..............
    ......................................888888888..8888..............888..8888888888...888...88888888.....88888888.....88888888....8888888888......88888888888..............
    ........................................8888888..8888..............8888888888888.....888..8888888888....8888888888...888888888......888.........88888...8888..............
    ...................................................................8888888888........888..88888888888...88888888888.8888888888......888.........8888....8888..............
    ...................................................................88888888..........888..8888...8888...8888..88888.8888...888......888.........888....88888..............
    ...................................................................888...............888.8888....88888..8888...8888.8888...888......888.....888.8888...88888..............
    ...................................................................888...............888.8888...888888..8888....88888888888888......888....8888.8888..888888..............
    ...................................................................888...............888.8888888888888..888.....88888888888888......888....8888.8888888888888.............
    ...................................................................888...............888.8888888888888..888......8888888888888......8888..88888..888888888888.............
    ...................................................................888...............888.88888888888888.888......88888888...........8888888888...888888888888.............
    ...................................................................888...............888...888888..8888.888......888.88888888888....888888888.....88888...888.............
    ....................................................................................................888.888......888.88888888888.....8888888..............888.............
    ......................................................................................................................8888888888..........................................
    `, SpriteKind.Player)
Salva_el_planeta_titulo.setPosition(85, 30)
scene.setBackgroundColor(9)
let Nubedecoracióntitulo = sprites.create(img`
    ............fffffffffff............
    .........ffff7888888888fff.........
    ........ff7777888888888877f........
    ......fff777777888888887777ff......
    .....ff7777777788888888777777f.....
    ....ff777777777888888887777777f....
    ...ff77777777777888888877777777f...
    ...f777777777777888888877777777f...
    ..ff777777777777888888877777777ff..
    .ff777777777777788888888777777777f.
    .f7777777777777788888888777777777f.
    .f7777777777777788888888777777777f.
    f877777777777777888888887777777777f
    f887777777777777888888887777777777f
    f887777777777778888888887777777777f
    f888877777777778888888888777777777f
    f888888887777778888888888888777777f
    f888888888777777788888888888887777f
    f888888888877777777888888888888877f
    f888888888877777777788888888888877f
    f888888888877777777778888888888877f
    f888888888877777777777888888888777f
    f888888888877777777777888888887777f
    .88888888887777777777788888888777f.
    .88888888887777777777778888887777f.
    .f888888888777777777777888888777ff.
    ..f8888888877777777777788888877ff..
    ...8888888887777777777788888877f...
    ...f88888888777777777778888887ff...
    ....f888888887777777777888888ff....
    .....f8888888877777777788888ff.....
    ......ff888888777777777888fff......
    ........f8888887777777788ff........
    .........ffff888877777ffff.........
    ............fffffffffff............
    `, SpriteKind.Player)
Nubedecoracióntitulo.setPosition(111, 80)
let myMenu = miniMenu.createMenuFromArray([
miniMenu.createMenuItem("Jugar"),
miniMenu.createMenuItem("Lore"),
miniMenu.createMenuItem("Info"),
miniMenu.createMenuItem("Creditos"),
miniMenu.createMenuItem("Peticiones")
])
miniMenu.setTitle(myMenu, "Opciones")
miniMenu.setDimensions(myMenu, 67, 60)
myMenu.setPosition(40, 85)
miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
    if (selectedIndex == 0) {
        sprites.destroy(Salva_el_planeta_titulo)
        sprites.destroy(Salva_el_planetas_titulo)
        sprites.destroy(Nubedecoracióntitulo)
        sprites.destroy(myMenu)
        tiles.setCurrentTilemap(tilemap`nivel2`)
        game.showLongText("Click en A para cargar texturas", DialogLayout.Center)
        pause(500)
        tiles.setCurrentTilemap(tilemap`nivel1`)
        Jugador = sprites.create(img`
            5555555885555555
            .......55.......
            .......55.......
            .......55.......
            ......ffff......
            ....fff22fff....
            ...fff2222fff...
            ..fffeeeeeefff..
            ..ffe222222eef..
            ..fe2ffffff2ef..
            ..ffffeeeeffff..
            .ffefbf44fbfeff.
            .fee41fddf14eef.
            ..feeddddddeef..
            ...fee4444eef...
            ..e4f222222f4e..
            ..4df222222fd4..
            ..44f445544f44..
            .....ffffff.....
            .....ff..ff.....
            `, SpriteKind.Player)
        animation.runImageAnimation(
        Jugador,
        [img`
            .55555588555555.
            .......55.......
            .......55.......
            .......55.......
            ......ffff......
            ....fff22fff....
            ...fff2222fff...
            ..fffeeeeeefff..
            ..ffe222222eef..
            ..fe2ffffff2ef..
            ..ffffeeeeffff..
            .ffefbb44bbbeff.
            .fee41fddf14eef.
            ..feeddddddeef..
            ...fee4444eef...
            ..e4f222222f4e..
            ..4df222222fd4..
            ..44f445544f44..
            .....ffffff.....
            .....ff..ff.....
            `,img`
            ..555558855555..
            .......55.......
            .......55.......
            .......55.......
            ......ffff......
            ....fff22fff....
            ...fff2222fff...
            ..fffeeeeeefff..
            ..ffe222222eef..
            ..fe2ffffff2ef..
            ..ffffeeeeffff..
            .ffefbb44bbfeff.
            .fee4bbddbb4eef.
            ..feeddddddeef..
            ...fee4444eef...
            ..e4f222222f4e..
            ..4df222222fd4..
            ..44f445544f44..
            .....ffffff.....
            .....ff..ff.....
            `,img`
            ...5555885555...
            .......55.......
            .......55.......
            .......55.......
            ......ffff......
            ....fff22fff....
            ...fff2222fff...
            ..fffeeeeeefff..
            ..ffe222222eef..
            ..fe2ffffff2ef..
            ..ffffeeeeffff..
            .ffefbb44bbfeff.
            .fee41fddf14eef.
            ..feeddddddeef..
            ...fee4444eef...
            ..e4f222222f4e..
            ..4df222222fd4..
            ..44f445544f44..
            .....ffffff.....
            .....ff..ff.....
            `,img`
            ....55588555....
            .......55.......
            .......55.......
            .......55.......
            ......ffff......
            ....fff22fff....
            ...fff2222fff...
            ..fffeeeeeefff..
            ..ffe222222eef..
            ..fe2ffffff2ef..
            ..ffffeeeeffff..
            .ffefbf44fbfeff.
            .fee41fddf14eef.
            ..feeddddddeef..
            ...fee4444eef...
            ..e4f222222f4e..
            ..4df222222fd4..
            ..44f445544f44..
            .....ffffff.....
            .....ff..ff.....
            `,img`
            .....558855.....
            .......55.......
            .......55.......
            .......55.......
            ......ffff......
            ....fff22fff....
            ...fff2222fff...
            ..fffeeeeeefff..
            ..ffe222222eef..
            ..fe2ffffff2ef..
            ..ffffeeeeffff..
            .ffefbb44bbfeff.
            .fee41fddf14eef.
            ..feeddddddeef..
            ...fee4444eef...
            ..e4f222222f4e..
            ..4df222222fd4..
            ..44f445544f44..
            .....ffffff.....
            .....ff..ff.....
            `,img`
            ......5885......
            .......55.......
            .......55.......
            .......55.......
            ......ffff......
            ....fff22fff....
            ...fff2222fff...
            ..fffeeeeeefff..
            ..ffe222222eef..
            ..fe2ffffff2ef..
            ..ffffeeeeffff..
            .ffefbb44bbfeff.
            .fee4bbddbb4eef.
            ..feeddddddeef..
            ...fee4444eef...
            ..e4f222222f4e..
            ..4df222222fd4..
            ..44f445544f44..
            .....ffffff.....
            .....ff..ff.....
            `],
        200,
        true
        )
        scene.cameraFollowSprite(Jugador)
        tiles.placeOnRandomTile(Jugador, assets.tile`miMosaico3`)
        controller.moveSprite(Jugador, 100, 0)
        Jugador.setVelocity(0, -56)
        info.setScore(0)
        info.setLife(5)
        extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Explosion), 1000)
        extraEffects.createSpreadEffectOnAnchor(Jugador, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Explosion), 1000)
        game.showLongText("Hola, bienvenido a Salva un planeta recoge todas las gotas", DialogLayout.Bottom)
    } else {
        if (selectedIndex == 1) {
            game.showLongText("Este juego esta inspirado en el ODS 13: Acción por el clima es el plan urgente de la ONU para frenar el calentamiento global y proteger el planeta de los efectos del cambio climático. Su meta principal es reducir las emisiones de gases de efecto invernadero para mantener el aumento de la temperatura mundial por debajo de los 1.5 °C.", DialogLayout.Full)
        } else {
            if (selectedIndex == 2) {
                game.showLongText("Para mover el jugador W,A,S,D o ↑,←,↓,→ ", DialogLayout.Full)
            } else {
                if (selectedIndex == 3) {
                    game.showLongText("JOSUÉ FERNANDO FLOREZ CARVAJAL,KAYLEENA SARITH NEIRA HERNANDEZ ,SEBASTIAN QUIÑONEZ BARON, DANIEL ESTEBAN BERMUDEZ DELGADO,EMILY CAROLINA DURÁN GÓMEZ", DialogLayout.Full)
                } else {
                    if (selectedIndex == 4) {
                        game.showLongText("Escribe tu petición en este correo p21087@colprespiedecuesta.edu.co", DialogLayout.Full)
                    }
                }
            }
        }
    }
})
