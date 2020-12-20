<template>
  <div class="contacts">
    <a
      class="social-link"
      href="https://github.com/spesthecat"
      target="_blank"
    >
      <img
        class="social"
        alt="github"
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      >
    </a>
    <a
      class="social-link"
      href="https://www.linkedin.com/in/kenneth-sun-561b42193/"
      target="_blank"
    >
      <img
        class="social"
        alt="linkedin"
        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
      >
    </a>
    <a
      class="social-link"
      href="mailto:spesthecat@gmail.com"
      target="_blank"
    >
      <img
        id="email"
        class="social"
        alt="email"
        src="https://cdn.onlinewebfonts.com/svg/img_420677.png"
      >
    </a>
  </div>
</template>

<style scoped>

.contacts {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}

.social {
  transition: transform 0.3s ease;
  opacity: 0.7;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.social-link {
  margin: 0 15px;
}

.social:hover {
  transform: scale(1.2);
  opacity: 1;
}

#email {
  height: 30px;
}

</style>