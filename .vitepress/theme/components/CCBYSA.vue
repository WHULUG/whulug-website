<template>
  <div class="cc-license-container">
    <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="license noopener noreferrer">
      <img src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" alt="CC BY-SA" />
    </a>
    <p>
      本作品采用
      <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="license noopener noreferrer">
        CC BY-SA 4.0 许可协议
      </a>
      发布。
    </p>
  </div>
</template>

<style scoped>
  .cc-license-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    max-width: 600px;
    margin: 2em auto;
    padding: 0 1em;
    flex-wrap: wrap;
  }

  .cc-license-container img {
    flex-shrink: 0;
    height: 31px;
    align-items: center;
  }

  .cc-license-container p {
    margin: 0;
    min-width: 0;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    .cc-license-container {
      flex-direction: column;
      align-items: center;
    }

    .cc-license-container img {
      margin-bottom: 0.5em;
      align-items: center;
    }
  }
</style>

