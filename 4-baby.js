class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Baby extends Person {
    constructor(name, age, favoriteToy) {
        super(name, age)
        this.favoriteToy = favoriteToy
    }

    play() {
        return `Playing with ${this.favoriteToy}`
    }
}

class Song {
    constructor(title, artist) {
        this.title = title
        this.artist = artist
        this.isPlaying = false
    }

    play() {
        this.isPlaying = true
        console.log(`${this.title} started to play`)
    }

    stop() {
        this.isPlaying = false
        console.log(`${this.title} stopped`)
    }
}

class Playlist {
    constructor() {
        this.songs = []
        this.index = 0
    }

    add(song) {
        this.songs.push(song)
    }

    play() {
        const currentSong = this.songs[this.index]
        currentSong.play()
    }

    stop() {
        const currentSong = this.songs[this.index]
        currentSong.stop()
    }

    next() {
        if (this.songs.length < 1) return
        this.stop()
        this.index = (++this.index) % this.songs.length
        this.play()
    }
}

const baby = new Baby('Lucy', 1, 'Teddy Bear')
console.log(baby.play()) // Playing with Teddy Bear

const heyJude = new Song('Hey Jude', 'The Beatles')
const jaded = new Song('Jaded', 'Aerosmith')

const playlist = new Playlist()
playlist.add(heyJude)
playlist.add(jaded)
playlist.play() // Hey Jude started to play
playlist.next() // Hey Jude stopped, Jaded started to play
playlist.stop() // Jaded stopped