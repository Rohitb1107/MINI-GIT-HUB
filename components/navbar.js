function navbar() {
    return `<div class="navbar">
      <div class="logo">
        <a href="/">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt=""
          />
        </a>
      </div>
      <div class="search">
        <input type="text" id="search-input" placeholder="Search github" />
      </div>
      <div class="option">
        <ul class="list">
          <li>Pull Request</li>
          <li>Issue</li>
          <li>Marketplace</li>
          <a href="/explore.html"><li>Explore</li></a>
        </ul>
      </div>
      <div class="profile">
        <img
          src="https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg"
          class="profile-img"
          alt=""
        />
      </div>
    </div>`
}

export default navbar