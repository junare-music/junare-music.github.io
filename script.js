

const songs = [
    {
        id: 1,
        title: "rebel",
        artist: "Juna Re",
        cover: "content/covers/rebel_cover.jpg", // fotografija pjesme
        src: "content/music/rebel.mp3",    // mp3 pjesma
        links: {
            youtube: "https://youtu.be/leEemy4qbQI?si=hH_A2cKM7DrdAlRX",
            spotify: "https://open.spotify.com/track/1QNrOTjSJuTrAWLSHJD5zm?si=b02f075c19604645",
            apple: "https://music.apple.com/us/song/rebel/1770650777"
        }
    },
    {
        id: 2,
        title: "I love The Smiths",
        artist: "Juna Re",
        cover: "content/covers/ilts.jpg",
        src: "content/music/ilts.mp3",
        links: {
            youtube: "https://youtu.be/PnarWuuLWa4?si=vb8uAOngG70IUeEj",
            spotify: "https://open.spotify.com/track/6wMEP1BhPVwrZ7b6UIpPXc?si=1a630f53e0204860",
            apple: "https://music.apple.com/us/song/i-love-the-smiths/1802010428"
        }
    },
    {
        id: 3,
        title: "Icarus",
        artist: "Juna Re",
        cover: "content/covers/icarus.jpg",
        src: "content/music/icarus.mp3",
        links: {
            youtube: "https://youtu.be/692RxRzPNwE?si=jrrn9mIsIyhD9bBS",
            spotify: "https://open.spotify.com/track/2FNwSPY7Vkj6HDch5vthNh?si=56bc5e2a02d54611",
            apple: "https://music.apple.com/us/song/icarus/1812212142"
        }
    },
    {
        id: 4,
        title: "extraordinary",
        artist: "Juna Re",
        cover: "content/covers/extraordinary.jpg",
        src: "content/music/extraordinary.mp3",
        links: {
            youtube: "https://youtu.be/8ixNHPkDfbg?si=DjRFMKnsp4szNoAI",
            spotify: "https://open.spotify.com/track/3IPaR4sj9eOkX49vuQtsi1?si=4c8504d998874f0c",
            apple: "https://music.apple.com/us/song/extraordinary/1836095443"
        }
    },
    {
        id: 5,
        title: "stone cold",
        artist: "Juna Re",
        cover: "content/covers/stonecold.jpg",
        src: "content/music/stonecold.mp3",
        links: {
            youtube: "https://youtu.be/SMx4egafPpM?si=YpAoNrrgjIln1YA0",
            spotify: "https://open.spotify.com/track/6HKKoyqD9IUHBvyuvvckno?si=bbc5e5d979854715",
            apple: "https://music.apple.com/us/song/stone-cold/1844088920"
        }
    },
    {
        id: 6,
        title: "paper friend",
        artist: "Juna Re",
        cover: "content/covers/paperfriend.jpg",
        src: "content/music/paperfriend.mp3",
        links: {
            youtube: "https://youtu.be/itkjHrKAMsM?si=5o-NEPWHCoIkctv8",
            spotify: "https://open.spotify.com/track/4nmd1MQxljzisiMItisXBf?si=d2bd0168e46c4be6",
            apple: "https://music.apple.com/us/song/paper-friend/1855685409"
        }
    }
];

// koje specifične funkcije treba pokrenuti na temelju toga koju stranicu korisnik trenutno gleda:
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path.includes('songs.html')) {
        loadSongsList();
    } else if (path.includes('player.html')) {
        loadPlayer();
    } else if (path.includes('feedback.html')) {
        setupFeedbackForm();
    }
});

// funkcije

// generiranje pjesama
function loadSongsList() {
    const container = document.getElementById('songs-container');
    if (!container) return;

    songs.forEach(song => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.onclick = () => window.location.href = `player.html?id=${song.id}`;

        // u slučaju da nema fotografije
        card.innerHTML = `
      <div class="card-image" style="background-image: url('${song.cover}'), linear-gradient(to bottom right, #4a90e2, #9013fe);"></div>
      <div class="card-info">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
      </div>
    `;
        container.appendChild(card);
    });
}

// učitavanje specifičnih pjesama
function loadPlayer() {
    const params = new URLSearchParams(window.location.search);
    const songId = parseInt(params.get('id'));

    const song = songs.find(s => s.id === songId);

    if (!song) {
        document.querySelector('.player-wrapper').innerHTML = "<h1>Song not found</h1><a href='songs.html'>Go Back</a>";
        return;
    }

    document.getElementById('player-cover').src = song.cover;
    document.getElementById('player-title').textContent = song.title;
    document.getElementById('player-artist').textContent = song.artist;
    document.getElementById('audio-source').src = song.src;

    document.getElementById('link-yt').href = song.links.youtube;
    document.getElementById('link-spot').href = song.links.spotify;
    document.getElementById('link-apple').href = song.links.apple;

    const audio = document.getElementById('main-audio');
    audio.load();
}

// feedback form:
function setupFeedbackForm() {
    const form = document.getElementById('feedback-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you for your feedback! We have received your message.");
            form.reset();
        });
    }
}
