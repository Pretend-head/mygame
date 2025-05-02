// game.js
const config = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    type: Phaser.AUTO,
    width: 1080,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false // Çarpışma kutularını görebilmek için aktif
        }
    },
    scene: {
        preload,
        create,
        update
    }
};

const game = new Phaser.Game(config);

let playerSpeed = 150; // Daha hızlı başlangıç hızı // Başlangıç hızı
let bitisGeldi = false;


function preload() {
    //backgroundlar
    this.load.image('bg1', 'assets/bg1_2.png');
    this.load.image('end_bg', 'assets/end_bg.png');
    //this.load.image('bg3', 'assets/bg3.png');

    //Decorations
    this.load.image('kopru', 'assets/kopru.png');
    this.load.image('rumeli', 'assets/rumeli.png');
    this.load.image('galata', 'assets/galata.png');

    this.load.image('istanbul', 'assets/istranbul.png');
    this.load.image('sauna', 'assets/sauna-2.png');
    this.load.image('helsinki', 'assets/helsinki-2.png');
    this.load.image('baget', 'assets/baget.png');
    this.load.image('library', 'assets/library.png');
    this.load.image('diary', 'assets/learning_diary-2.png');
    this.load.image('sudoku', 'assets/sudoku-2.png');
    this.load.image('stockholm_label', 'assets/Stockholm_label.png');
    this.load.image('pippi', 'assets/pippi-2.png');
    this.load.image('stockholm', 'assets/stockholm-2.png');
    this.load.image('ikea', 'assets/ikea-2.png');
    this.load.image('calculus', 'assets/calculus-2.png');
    this.load.image('abba', 'assets/ABBA-2.png');
    this.load.image('north', 'assets/North-2.png');
    this.load.image('aurora', 'assets/Aurora-2.png');
    this.load.image('ev', 'assets/Kar_ev-2.png');
    this.load.image('cookie', 'assets/cookie-2.png');
    this.load.image('geyik', 'assets/geyik-2.png');
    this.load.image('baltic', 'assets/baltic.png');
    this.load.image('varsova', 'assets/varsova.png');
    this.load.image('chopin', 'assets/chopin-2.png');
    this.load.image('bremen', 'assets/Bremen-2.png');
    this.load.image('the_baltic_way', 'assets/the_baltic_way-2.png');
    this.load.image('kophenag_label', 'assets/kopenag.png');
    this.load.image('park', 'assets/Kophenag-2.png');
    this.load.image('christiana', 'assets/Christiana-2.png');
    this.load.image('bisiklet', 'assets/bisiklet.png');
    this.load.image('amsterdam', 'assets/Amsterdam.png');
    this.load.image('lale', 'assets/lale-2.png');
    this.load.image('cybertruck', 'assets/cyber_truck-2.png');
    this.load.image('lego', 'assets/lego_store-2.png');
    this.load.image('lego_ev', 'assets/lego_ev-2.png');
    this.load.image('lisa', 'assets/mona.png');
    this.load.image('louvre', 'assets/louvre.png');
    this.load.image('versay', 'assets/versay-2.png');
    this.load.image('eyfel', 'assets/eiffel-2.png');
    this.load.image('paris', 'assets/Paris.png');

    //kalan resimler
    this.load.image('tileset', 'assets/platform_tiles.png');
    this.load.image('platform_tiles', 'assets/platform_tiles.png');
    this.load.tilemapTiledJSON('map', 'assets/map.json');
    this.load.spritesheet('player_run', 'assets/player_run.png', {
        frameWidth: 94,
        frameHeight: 144
    });
    this.load.spritesheet('fireworks', 'assets/fireworks.png', {
    frameWidth: 92,
    frameHeight: 94

    });


}

function create() {
    this.anims.create({
        key: 'run',
        frames: this.anims.generateFrameNumbers('player_run', { start: 0, end: 7 }),
        frameRate: 14,
        repeat: -1
    });
    
    this.anims.create({
        key: 'boom',
        frames: this.anims.generateFrameNumbers('fireworks', { start: 0, end: 56 }),
        frameRate: 30,
        repeat: -1
    });

    this.endBgImage = this.add.image(0, 0, 'end_bg')
    .setOrigin(0.5)
    .setVisible(false)
    .setDepth(1000);

    this.bg1 = this.add.tileSprite(0, 0, 1080, 720, 'bg1')
        .setDepth(-1)
        .setOrigin(0, 0)
        .setScrollFactor(0);
    //this.bg2 = this.add.image(1280, 0, 'bg2').setOrigin(0, 0).setScrollFactor(1);
    //this.bg3 = this.add.image(1600, 0, 'bg3').setOrigin(0, 0).setScrollFactor(0.2);

    this.rumeli = this.add.image(-4, 662, 'rumeli')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.8)

    this.kopru = this.add.image(350, 676, 'kopru')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.9)
    this.galata = this.add.image(812, 722, 'galata')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.istanbul = this.add.image(1200, 763, 'istanbul')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.sauna = this.add.image(2065, 457, 'sauna')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.helsinki = this.add.image(2424, 658, 'helsinki')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.baget = this.add.image(2900, 470, 'baget')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.library = this.add.image(3077, 705, 'library')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.diary = this.add.image(3424, 268, 'diary')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.sudoku = this.add.image(3651, 831, 'sudoku')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.stocholm_label = this.add.image(4190, 654, 'stockholm_label')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.pippi = this.add.image(4421, 676, 'pippi')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.stockholm = this.add.image(4665, 501, 'stockholm')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.ikea = this.add.image(5365, 802, 'ikea')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.calculus = this.add.image(5369, 435, 'calculus')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.abba = this.add.image(5752, 672, 'abba')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.north = this.add.image(6407, 678, 'north')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.aurora = this.add.image(6755, 401, 'aurora')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.ev = this.add.image(7110, 687, 'ev')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.cookie = this.add.image(7589, 755, 'cookie')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.geyik = this.add.image(7605, 362, 'geyik')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.baltic = this.add.image(8187, 251, 'baltic')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.varsova = this.add.image(8113, 650, 'varsova')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.chopin = this.add.image(8963, 515, 'chopin')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.bremen = this.add.image(9220, 299, 'bremen')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.the_baltic_way = this.add.image(9253, 823, 'the_baltic_way')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.kophenag_label = this.add.image(10125, 336, 'kophenag_label')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.park = this.add.image(10082,791, 'park')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.christiana = this.add.image(10487,439, 'christiana')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.bisiklet = this.add.image(10978,682, 'bisiklet')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.amsterdam = this.add.image(11469,287, 'amsterdam')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.lale = this.add.image(11450,664, 'lale')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.cybertruck = this.add.image(11803,525, 'cybertruck')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.lego = this.add.image(12146,479, 'lego')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.lisa = this.add.image(12598,373, 'lisa')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.louvre = this.add.image(12544,734, 'louvre')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.lego_ev = this.add.image(11113,308, 'lego_ev')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.versay = this.add.image(12947,721, 'versay')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.eyfel = this.add.image(13440,682, 'eyfel')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
    this.paris = this.add.image(13034,153, 'paris')
        .setOrigin(0, 1)
        .setScrollFactor(1)
        .setDepth(-0.7)
        
    this.gravityInverted = false;
    this.gameOver = false;

    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('tileset', 'platform_tiles');
    const groundLayer = map.createLayer('Ground', tileset, 0, 0);

    // Tile çarpışmalarını aktif et (sadece ID 1 için)
    groundLayer.setCollisionBetween(1, 1);

    // Tüm dolu tile'ları zorla çarpışmalı yap
    groundLayer.forEachTile(tile => {
        if (tile.index !== -1) {
            tile.setCollision(true, true, true, true);
        }
    });

    // Oyuncu tanımı ve hitbox
    this.player = this.physics.add.sprite(400, 450, 'player_run');
    this.player.anims.play('run', true);
    this.player.anims.msPerFrame = Phaser.Math.Clamp(1000 / (playerSpeed / 10), 1000 / 30, 1000 / 14);
    this.player.setCollideWorldBounds(false);
    this.player.setSize(94, 144);
    this.player.setOffset(0, 0);

    this.physics.add.collider(this.player, groundLayer); // Basit çarpışma, hız aktarımı yok

    // Kamera önceliği
    groundLayer.setDepth(0);
    this.player.setDepth(1);

    // SPACE tuşu
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.input.on('pointerdown', () => {
        if (this.gameOver) this.scene.restart();
    });

    this.restartText = this.add.text(400, 300, '', {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Arial',
        align: 'center'
    }).setOrigin(0.5).setDepth(1);

    // Kamera ayarları
    // Kamera hızı başlangıçta oyuncu hızıyla eşit
    this.cameraScrollSpeed = playerSpeed;
    this.cameras.main.setBounds(0, 0, Number.MAX_SAFE_INTEGER, 720);
    
    

}

// ... (önceki preload ve create fonksiyonları aynı kalıyor)

// ... (önceki preload ve create fonksiyonları aynı kalıyor)

function update() {
    if (!this.gameOver && this.player.x >= 12947) {
        this.gameOver = true;
    
        // end_bg'yi görünür yap ve ortala
        this.endBgImage.setPosition(
            this.cameras.main.scrollX + this.cameras.main.width / 2,
            this.cameras.main.height / 2
        );
        this.endBgImage.setVisible(true);
    
        // Oyunu durdur
        this.physics.pause();
        this.player.anims.stop();
        this.player.setVelocity(0);
    }
    
    if (!this.gameOver) {
        // Oyuncu bitiş noktasına geldiyse önce kontrol et
        if (this.player.x >= 12947 && !this.gameOver) {
            endGame(this);
            return; // Aşağıdaki kodlar çalışmasın
        }

        // Kamera oyuncuyla aynı hızda sağa doğru gider
        this.bg1.tilePositionX = this.cameras.main.scrollX;
        this.cameras.main.scrollX += this.cameraScrollSpeed * this.game.loop.delta / 1000;

        if (Phaser.Input.Keyboard.JustDown(this.spaceKey) || this.input.activePointer.isDown) {
            this.gravityInverted = !this.gravityInverted;
            this.physics.world.gravity.y = this.gravityInverted ? -300 : 300;
            this.player.setFlipY(this.gravityInverted);
        }

        // Hızlandırma
        playerSpeed += 0.05;
        this.cameraScrollSpeed = playerSpeed;
        this.player.setVelocityX(playerSpeed);
        this.player.anims.msPerFrame = Phaser.Math.Clamp(1000 / (playerSpeed / 10), 1000 / 30, 1000 / 16);

        // Kaybedilen durumlar
        if (this.player.y < 0 || this.player.y > 720 || this.player.x + this.player.displayWidth < this.cameras.main.scrollX) {
            endGame(this);
        }
    }
}


function endGame(scene, reason) {
    if (scene.gameOver) return;
    scene.gameOver = true;

    playerSpeed = 150;
    scene.cameraScrollSpeed = 0;

    if (reason === 'bitis') {
        bitisGeldi = true; // Bitirme bayrağını yak
        if (!scene.endBgImage) {
            scene.endBgImage = scene.add.image(
                scene.cameras.main.scrollX + scene.cameras.main.width / 2,
                scene.cameras.main.height / 2,
                'end_bg'
            ).setOrigin(0.5).setDepth(999);
        }
    }

    scene.time.delayedCall(100, () => {
        scene.physics.pause();
        scene.player.anims.stop();
        scene.player.setVelocity(0);

        scene.restartText.setText('Oyun Bitti\nTekrar başlamak için tıkla');
        scene.restartText.setPosition(
            scene.cameras.main.scrollX + scene.cameras.main.width / 2,
            scene.cameras.main.height / 2 + 150
        );
    });
}
