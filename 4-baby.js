function Person(name, age) {
    this.name = name
    this.age = age
}

function Baby(name, age, favoriteToy) {
    Person.call(this, name, age)
    this.favoriteToy = favoriteToy
}

Baby.prototype = Object.create(Person.prototype)
Baby.prototype.constructor = Baby

Baby.prototype.play = function () {
    return `Playing with ${this.favoriteToy}`
}

function Song(title, artist) {
    this.title = title
    this.artist = artist
    this.isPlaying = false
}

Song.prototype.play = function () {
    this.isPlaying = true
    console.log(`${this.title} started to play`)
}

Song.prototype.stop = function () {
    this.isPlaying = false
    console.log(`${this.title} stopped`)
}

function Playlist() {
    this.songs = []
    this.index = 0
}

Playlist.prototype.add = function (song) {
    this.songs.push(song)
}

Playlist.prototype.play = function () {
    const currentSong = this.songs[this.index]
    currentSong.play()
}

Playlist.prototype.stop = function () {
    const currentSong = this.songs[this.index]
    currentSong.stop()
}

Playlist.prototype.next = function () {
    if (this.songs.length < 1) return
    this.stop()
    this.index = (++this.index) % this.songs.length
    this.play()
}

const baby = new Baby('Lucy', 1, 'Teddy Bear')
console.log(baby.play()) // Playing with Teddy Bear

const heyJude = new Song('Hey Jude', 'The Beatles')
const jaded = new Song('Jaded', 'Aerosmith')

const playlist = new Playlist()
playlist.add(heyJude)
playlist.add(jaded)
playlist.play() // Hey Jude started to play
playlist.next() // Hey Jude stopped Jaded started to play
playlist.stop() // Jaded stopped