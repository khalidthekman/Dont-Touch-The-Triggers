controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    200,
    true
    )
})
info.onScore(1000, function () {
    scene.setBackgroundImage(assets.image`Background V5`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    200,
    true
    )
})
info.onScore(100, function () {
    scene.setBackgroundImage(assets.image`Background V3`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f c f f f f f f . . 
        c f f f c c f f f f f f f 
        c f f f f f f f c f f f f 
        c c f f e e f f f c c c . 
        f c c f f e e f f f f f . 
        f f f b f e e f b f f f . 
        f f 4 1 f 4 4 f 1 4 f f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 7 7 7 b f e f . 
        . e 4 4 e 7 7 7 7 f 4 e . 
        . . e e 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    200,
    true
    )
})
info.onScore(500, function () {
    scene.setBackgroundImage(assets.image`Background V4`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.bigCrash.play()
    info.changeLifeBy(-1)
})
let bad_to_eat: Sprite = null
let bad_to_eat_2: Sprite = null
let good_to_eat2: Sprite = null
let good_to_eat: Sprite = null
let hero: Sprite = null
scene.setBackgroundImage(assets.image`Background V2`)
hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
info.setLife(4)
game.onUpdateInterval(5000, function () {
    good_to_eat = sprites.createProjectileFromSide(img`
        . . . . . . . e e e e . . . . . 
        . . . . . e e 4 5 5 5 e e . . . 
        . . . . e 4 5 6 2 2 7 6 6 e . . 
        . . . e 5 6 6 7 2 2 6 4 4 4 e . 
        . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
        e 5 e c 5 4 5 4 5 5 5 e e . . . 
        e 5 e e 5 5 5 5 5 4 e . . . . . 
        4 5 4 e 5 5 5 5 e e . . . . . . 
        . 4 5 4 5 5 4 e . . . . . . . . 
        . . 4 4 e e e . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    good_to_eat2 = sprites.createProjectileFromSide(img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `, randint(-50, 50), randint(-50, 50))
    bad_to_eat_2 = sprites.createProjectileFromSide(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        .................fffffffff........................
        .................f4444444f........................
        .................f4444444f........................
        .................f4444444f........................
        .................f4444444f........................
        .................f4444444f........................
        .........fffffffff4444444fffffffff................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f4444ffff4444ffff4444444f................
        .........f4444f444f444f4ff4444444f................
        .........f4444f444f4fffff44444444f................
        .........f4444f44ff4444f444444444f................
        .........f4444ffff44444f44ff44444f................
        .........f4444444444444ffff444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........f44444444444444444444444f................
        .........fffffffffffffffffffffffff................
        ..................................................
        ..................................................
        ..................................................
        `, randint(-10, 50), randint(-10, 50))
    bad_to_eat = sprites.createProjectileFromSide(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        .................fffffffff........................
        .................f8888888f........................
        .................f8888888f........................
        .................f8888888f........................
        .................f8888888f........................
        .................f8888888f........................
        .........fffffffff8888888fffffffff................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f888ff8fff88888888888888f................
        .........f888ffff8f88888fff888888f................
        .........f88ff8ff8f8888ff8ff88888f................
        .........f88f88888ff888f888f88888f................
        .........f888888888f888f8fff88888f................
        .........f8888888888888f88ff88888f................
        .........f8888888888888f888f88888f................
        .........f88888888888888f88f88888f................
        .........f888888888888888fff88888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........f88888888888888888888888f................
        .........fffffffffffffffffffffffff................
        ..................................................
        ..................................................
        ..................................................
        `, randint(-10, 50), randint(-10, 50))
    bad_to_eat.setKind(SpriteKind.Enemy)
    bad_to_eat_2.setKind(SpriteKind.Enemy)
})
